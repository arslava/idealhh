"use client";

// Matches the real theme's floating-label form field pattern (.c-form,
// .has-value in the original CSS): label sits inside the field until
// focused/filled, then shrinks to a small uppercase label at the top.
// Implemented with Tailwind peer classes — no JS state needed.

type Props = {
  id: string;
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  rows?: number;
  as?: "input" | "textarea" | "select";
  children?: React.ReactNode;
  defaultValue?: string;
};

export default function FloatingInput({
  id, name, label, type = "text", required, rows, as = "input", children, defaultValue,
}: Props) {
  const fieldClass =
    "peer w-full rounded-[10px] border border-navy-900/15 bg-white px-4 pt-6 pb-2 text-grey-800 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-accent";
  const labelClass =
    "absolute left-4 top-4 text-grey-800/60 text-base transition-all pointer-events-none " +
    "peer-focus:top-2 peer-focus:text-xs peer-focus:font-bold peer-focus:uppercase peer-focus:text-accent " +
    "peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:font-bold peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:text-navy-muted";

  return (
    <div className="relative">
      {as === "textarea" ? (
        <textarea id={id} name={name} required={required} rows={rows || 4} placeholder=" " className={fieldClass} />
      ) : as === "select" ? (
        <select id={id} name={name} required={required} defaultValue={defaultValue} className={fieldClass.replace("placeholder-transparent", "")}>
          {children}
        </select>
      ) : (
        <input id={id} name={name} type={type} required={required} placeholder=" " className={fieldClass} />
      )}
      {as !== "select" && (
        <label htmlFor={id} className={labelClass}>
          {label}{required ? " *" : ""}
        </label>
      )}
    </div>
  );
}
