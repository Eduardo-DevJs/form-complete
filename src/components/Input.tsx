import { ChangeEvent } from "react";

interface InputProps {
  id: string;
  placeholder: string;
  value: string;
  type: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  id,
  name,
  placeholder,
  type,
  onChange,
  value,
}: InputProps) {
  return (
    <input
      className="border text-xl rounded-md outline-none p-2"
      type={type}
      onChange={onChange}
      value={value}
      name={name}
      placeholder={placeholder}
      id={id}
    />
  );
}
