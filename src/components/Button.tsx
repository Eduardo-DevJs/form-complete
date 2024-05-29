import { ComponentProps } from "react";

export default function Button({
  disabled,
  className,
}: ComponentProps<"button">) {
  return (
    <button type="submit" disabled={disabled} className={className}>
      Login
    </button>
  );
}
