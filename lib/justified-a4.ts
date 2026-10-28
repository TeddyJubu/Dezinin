/** Portrait A4, width / height. */
export const A4_PORTRAIT = 210 / 297;

/** Landscape A4, width / height. At a shared height this is twice a portrait. */
export const A4_LANDSCAPE = 297 / 210;

const DEFAULT_GAP = 12;

export type JustifiedOptions = {
  /** Space between images, in px. Also used between rows. */
  gap?: number;
  /** Preferred row height. When omitted, it follows the container width. */
  targetRowHeight?: number;
  /**
   * How many portrait-widths a typical row should hold.
   * Overrides the width-based default (about 2 on a phone, 3–4 on a tablet, 4–6 on a desktop).
   */
  portraitsPerRow?: number;
};

export type PlacedImage = {
  index: number;
  x: number;
  y: number;
  width: number;
  height: number;
  aspect: number;
};

export type JustifiedRow = {
  top: number;
  height: number;
  items: PlacedImage[];
};

export type JustifiedLayout = {
  width: number;
  height: number;
  gap: number;
  targetRowHeight: number;
  rows: JustifiedRow[];
  items: PlacedImage[];
};

/** Snap a measured image to portrait or landscape A4. Unknown sizes stay portrait. */
export function a4AspectRatio(width: number, height: number): number {
  if (!Number.isFinite(width) || !Number.isFinite(height) || width <= 0 || height <= 0) return A4_PORTRAIT;
  return width >= height ? A4_LANDSCAPE : A4_PORTRAIT;
}

/** Portrait-widths that fit a row comfortably at this container width. */
export function portraitsForWidth(width: number): number {
  if (width < 640) return 2;
  if (width < 1200) return 3;
  return 4;
}

function sanitize(aspect: number): number {
  if (!Number.isFinite(aspect) || aspect <= 0) return A4_PORTRAIT;
  return aspect;
}

function heightForAspectSum(sum: number, count: number, width: number, gap: number): number {
  const available = width - gap * Math.max(0, count - 1);
  if (available <= 0 || sum <= 0) return 0;
  return available / sum;
}

function rowGeometry(aspects: number[], start: number, end: number, width: number, gap: number) {
  const count = end - start;
  let sum = 0;
  for (let i = start; i < end; i++) sum += aspects[i];
  const height = heightForAspectSum(sum, count, width, gap);
  return { count, sum, height };
}

function rowCost(height: number, target: number, count: number): number {
  if (height <= 0 || target <= 0) return 1e12;
  const ratio = height / target;
  let cost = (ratio - 1) * (ratio - 1) * count;
  if (ratio > 1.85) cost += (ratio - 1.85) * (ratio - 1.85) * count * 6;
  if (ratio < 0.55) cost += (0.55 - ratio) * (0.55 - ratio) * count * 6;
  return cost;
}

function placeRow(aspects: number[], start: number, end: number, width: number, gap: number, top: number, height: number): PlacedImage[] {
  const count = end - start;
  const available = width - gap * Math.max(0, count - 1);
  let raw = 0;
  for (let i = start; i < end; i++) raw += height * aspects[i];
  const scale = raw > 0 ? available / raw : 1;
  const items: PlacedImage[] = [];
  let x = 0;
  for (let i = start; i < end; i++) {
    const last = i === end - 1;
    const itemWidth = last ? width - x : height * aspects[i] * scale;
    items.push({
      index: i,
      x,
      y: top,
      width: itemWidth,
      height,
      aspect: aspects[i],
    });
    x += itemWidth + (last ? 0 : gap);
  }
  return items;
}

type Partition = {
  cost: number;
  maxDev: number;
  breaks: number[];
};

function scoreBreaks(aspects: number[], breaks: number[], width: number, gap: number, target: number): { cost: number; maxDev: number } {
  let cost = 0;
  let maxDev = 0;
  for (let r = 0; r < breaks.length - 1; r++) {
    const { height } = rowGeometry(aspects, breaks[r], breaks[r + 1], width, gap);
    cost += rowCost(height, target, breaks[r + 1] - breaks[r]);
    maxDev = Math.max(maxDev, Math.abs(height / target - 1));
  }
  return { cost, maxDev };
}

/**
 * Repartition the images that landed in the last two or three rows.
 * The global pass already fills every row; this pass only moves boundaries
 * so the tail is not one very tall row beside very short ones.
 */
function rebalanceTail(aspects: number[], breaks: number[], width: number, gap: number, target: number, maxCount: number): number[] {
  const rowCount = breaks.length - 1;
  if (rowCount < 2) return breaks;
  const tailRows = Math.min(3, rowCount);
  const tailStart = breaks[rowCount - tailRows];
  const end = aspects.length;
  const prefix = breaks.slice(0, rowCount - tailRows + 1);
  let best: Partition = {
    breaks,
    ...scoreBreaks(aspects, breaks, width, gap, target),
  };

  const consider = (cuts: number[]) => {
    const candidate = [...prefix, ...cuts, end];
    for (let i = 1; i < candidate.length; i++) {
      if (candidate[i] <= candidate[i - 1]) return;
      if (candidate[i] - candidate[i - 1] > maxCount) return;
    }
    const score = scoreBreaks(aspects, candidate, width, gap, target);
    const betterDev = score.maxDev < best.maxDev - 0.02;
    const tiedAndCheaper = Math.abs(score.maxDev - best.maxDev) <= 0.02 && score.cost < best.cost - 1e-6;
    if (betterDev || tiedAndCheaper) best = { breaks: candidate, ...score };
  };

  const span = end - tailStart;
  if (tailRows >= 2) {
    for (let cut = tailStart + 1; cut < end; cut++) consider([cut]);
  }
  if (tailRows >= 3 && span >= 3) {
    for (let a = tailStart + 1; a < end - 1; a++) {
      for (let b = a + 1; b < end; b++) consider([a, b]);
    }
  }
  return best.breaks;
}

/**
 * Order-preserving justified rows. Every row, including the last, is scaled
 * to `width`. Images keep the aspect ratios they were given.
 */
export function layoutJustifiedA4(aspectsIn: number[], containerWidth: number, options: JustifiedOptions = {}): JustifiedLayout {
  const aspects = aspectsIn.map(sanitize);
  const gap = options.gap ?? DEFAULT_GAP;
  const width = Math.max(1, containerWidth);
  const portraits = options.portraitsPerRow ?? portraitsForWidth(width);
  const target =
    options.targetRowHeight ??
    heightForAspectSum(portraits * A4_PORTRAIT, portraits, width, gap);
  const safeTarget = target > 0 ? target : width / (portraits * A4_PORTRAIT);

  const n = aspects.length;
  const items: PlacedImage[] = new Array(n);
  if (n === 0) {
    return { width, height: 0, gap, targetRowHeight: safeTarget, rows: [], items };
  }

  const maxCount = Math.max(2, Math.round(portraits));
  const dp = new Array<number>(n + 1).fill(Number.POSITIVE_INFINITY);
  const choice = new Array<number>(n + 1).fill(0);
  dp[0] = 0;

  for (let end = 1; end <= n; end++) {
    const earliest = Math.max(0, end - maxCount);
    for (let start = end - 1; start >= earliest; start--) {
      if (!Number.isFinite(dp[start])) continue;
      const { height } = rowGeometry(aspects, start, end, width, gap);
      if (height <= 0) continue;
      const cost = dp[start] + rowCost(height, safeTarget, end - start);
      if (cost < dp[end]) {
        dp[end] = cost;
        choice[end] = start;
      }
    }
  }

  const rev: number[] = [n];
  let cursor = n;
  while (cursor > 0) {
    const start = choice[cursor];
    if (start === cursor) break;
    rev.push(start);
    cursor = start;
  }
  if (rev[rev.length - 1] !== 0) rev.push(0);
  let breaks = rev.reverse();
  breaks = rebalanceTail(aspects, breaks, width, gap, safeTarget, maxCount);

  const rows: JustifiedRow[] = [];
  let top = 0;
  for (let r = 0; r < breaks.length - 1; r++) {
    const start = breaks[r];
    const end = breaks[r + 1];
    const { height } = rowGeometry(aspects, start, end, width, gap);
    const placed = placeRow(aspects, start, end, width, gap, top, height);
    for (const item of placed) items[item.index] = item;
    rows.push({ top, height, items: placed });
    top += height + (r === breaks.length - 2 ? 0 : gap);
  }

  return {
    width,
    height: top,
    gap,
    targetRowHeight: safeTarget,
    rows,
    items,
  };
}
