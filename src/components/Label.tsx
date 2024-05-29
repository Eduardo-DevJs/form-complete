import { ComponentProps } from "react";

export default function Label({ children, htmlFor }: ComponentProps<'label'>) {
  return (
    <label htmlFor={htmlFor} className="mb-2 text-base font-bold uppercase text-slate-800">
      {children}
    </label>
  );
}
