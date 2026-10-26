import React from "react";

type FormApi = {
  change: (name: string, value: boolean) => void;
  getState: () => { values?: Record<string, unknown> };
  registerField?: (name: string, listener: () => void, subscription: { value: boolean }) => () => void;
  subscribe: (
    listener: (state: { values?: Record<string, unknown> }) => void,
    subscription: { values: boolean },
  ) => () => void;
};

type SectionToggleProps = {
  input: { value?: boolean | null; onChange: (value: boolean) => void };
  field: { name: string; label?: string | boolean };
  form?: FormApi;
};

const iconButton = (color: string): React.CSSProperties => ({
  flex: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 36,
  height: 36,
  padding: 0,
  border: "none",
  borderRadius: 8,
  background: "transparent",
  color,
  cursor: "pointer",
});

function EyeIcon({ shown }: { shown: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ display: "block", opacity: shown ? 1 : 0.45 }}>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ display: "block" }}>
      <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.75" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function UnlockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ display: "block" }}>
      <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.75" />
      <path d="M8 11V8a4 4 0 0 1 7.4-2" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

export function SectionToggle({ input, field, form }: SectionToggleProps) {
  const shown = input.value !== false;
  const lockName = field.name.replace(/^show/, "lock");
  const label = typeof field.label === "string" ? field.label : field.name;
  const [locked, setLocked] = React.useState(false);

  React.useEffect(() => {
    if (!form) return;
    const read = (values?: Record<string, unknown>) => values?.[lockName] === true;
    setLocked(read(form.getState().values));
    const unregister = form.registerField?.(lockName, () => {}, { value: true });
    const unsubscribe = form.subscribe((state) => setLocked(read(state.values)), { values: true });
    return () => {
      unsubscribe();
      unregister?.();
    };
  }, [form, lockName]);

  return (
    <div
      data-section-toggle={field.name}
      data-edit-locked={locked ? "true" : "false"}
      aria-checked={shown ? "true" : "false"}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
        marginBottom: 8,
        padding: "10px 12px",
        border: "1px solid #2a2422",
        borderRadius: 8,
        background: "#1a1614",
      }}
    >
      <div style={{ fontSize: 15, fontWeight: 600, color: shown ? "#e4e2df" : "#6f6a67" }}>{label}</div>
      <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
        <button
          type="button"
          role="switch"
          aria-checked={shown}
          aria-label={`${label} visibility`}
          title={shown ? "Shown" : "Hidden"}
          onClick={() => input.onChange(!shown)}
          style={iconButton(shown ? "#e4e2df" : "#6f6a67")}
        >
          <EyeIcon shown={shown} />
        </button>
        <button
          type="button"
          aria-pressed={locked}
          aria-label={locked ? `${label} locked` : `${label} unlocked`}
          title={locked ? "Locked" : "Unlocked"}
          onClick={() => {
            const next = !locked;
            setLocked(next);
            form?.change(lockName, next);
          }}
          style={iconButton(locked ? "#fe4101" : "#e4e2df")}
        >
          {locked ? <LockIcon /> : <UnlockIcon />}
        </button>
      </div>
    </div>
  );
}
