import React from "react";

type FormApi = {
  getState: () => { values?: Record<string, unknown> };
  subscribe: (
    listener: (state: { values?: Record<string, unknown> }) => void,
    subscription: { values: boolean },
  ) => () => void;
};

type CategorySelectProps = {
  input: { name: string; value?: string | null; onChange: (value: string) => void };
  form?: FormApi;
};

function readPath(values: Record<string, unknown> | undefined, path: string[]) {
  let cursor: unknown = values;
  for (const key of path) {
    if (cursor == null || typeof cursor !== "object") return undefined;
    cursor = (cursor as Record<string, unknown>)[key];
  }
  return cursor;
}

function filterOptions(values?: Record<string, unknown>) {
  const filters = values?.filters;
  if (!Array.isArray(filters)) return [];
  const seen = new Set<string>();
  const options: string[] = [];
  for (const item of filters) {
    if (typeof item !== "string") continue;
    const label = item.trim();
    if (!label || label.toUpperCase() === "ALL" || seen.has(label)) continue;
    seen.add(label);
    options.push(label);
  }
  return options;
}

function chosenElsewhere(values: Record<string, unknown> | undefined, name: string, current: string) {
  const parts = name.split(".");
  const index = Number(parts.pop());
  const list = readPath(values, parts);
  if (!Array.isArray(list) || Number.isNaN(index)) return new Set<string>();
  return new Set(
    list.filter((item, itemIndex): item is string => typeof item === "string" && item !== "" && itemIndex !== index && item !== current),
  );
}

export function CategorySelect({ input, form }: CategorySelectProps) {
  const [options, setOptions] = React.useState<string[]>([]);
  const [taken, setTaken] = React.useState<Set<string>>(new Set());
  const current = typeof input.value === "string" ? input.value : "";

  React.useEffect(() => {
    if (!form) return;
    const read = (values?: Record<string, unknown>) => {
      setOptions(filterOptions(values));
      setTaken(chosenElsewhere(values, input.name, current));
    };
    read(form.getState().values);
    return form.subscribe((state) => read(state.values), { values: true });
  }, [form, input.name, current]);

  const choices = current && !options.includes(current) ? [current, ...options] : options;

  return (
    <select
      className="dezinin-category-select"
      value={current}
      aria-label="Category"
      onChange={(event) => input.onChange(event.target.value)}
    >
      <option value="">Choose a category</option>
      {choices.map((option) => (
        <option key={option} value={option} disabled={taken.has(option)}>
          {option}
        </option>
      ))}
    </select>
  );
}
