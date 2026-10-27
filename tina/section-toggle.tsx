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

function EyeIcon({ shown }: { shown: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.75" />
      {shown ? null : <path d="M5 19 19 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />}
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.75" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function UnlockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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

  const status = locked && !shown ? "Hidden and locked" : locked ? "Locked" : shown ? "Visible on the site" : "Hidden on the site";

  return (
    <div
      className="dezinin-section"
      data-section-toggle={field.name}
      data-edit-locked={locked ? "true" : "false"}
      data-shown={shown ? "true" : "false"}
      aria-checked={shown ? "true" : "false"}
    >
      <div className="dezinin-section-copy">
        <div className="dezinin-section-label">{label}</div>
        <div className="dezinin-section-status">{status}</div>
      </div>
      <div className="dezinin-section-actions">
        <button
          type="button"
          className="dezinin-icon-btn"
          role="switch"
          aria-checked={shown}
          aria-label={`${label} visibility`}
          data-tooltip={shown ? "Shown" : "Hidden"}
          onClick={() => input.onChange(!shown)}
        >
          <EyeIcon shown={shown} />
        </button>
        <button
          type="button"
          className="dezinin-icon-btn"
          data-hot={locked ? "true" : "false"}
          aria-pressed={locked}
          aria-label={locked ? `${label} locked` : `${label} unlocked`}
          data-tooltip={locked ? "Locked" : "Unlocked"}
          onClick={() => {
            const next = !locked;
            setLocked(next);
            form?.change(lockName, next);
          }}
        >
          {locked ? <LockIcon /> : <UnlockIcon />}
        </button>
      </div>
    </div>
  );
}
