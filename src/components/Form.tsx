import { ChangeEvent, useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Label from "./Label";

export default function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setEmail(value);
    checkButtonState(value, password);
  }

  function handlePasswordChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setPassword(value);
    checkButtonState(email, value);
  }

  function checkButtonState(email: string, password: string) {
    if (email !== "" && password !== "") {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }
  return (
    <form className="space-y-3 bg-white p-5 shadow-md rounded-md">
      <div className="flex flex-col items-start">
        <Label htmlFor="email">Email</Label>
        <Input
          onChange={handleEmailChange}
          value={email}
          id="email"
          placeholder="Digite seu email"
          name="email"
          type="email"
        />
      </div>
      <div className="flex flex-col items-start">
        <Label htmlFor="password">Senha</Label>
        <Input
          onChange={handlePasswordChange}
          value={password}
          id="password"
          placeholder="Digite sua senha"
          name="password"
          type="password"
        />
      </div>
      <Button
        className={`${
          isButtonDisabled
            ? "bg-zinc-400 cursor-not-allowed text-white rounded p-2 w-full"
            : "bg-sky-500 text-white rounded cursor-pointer p-2 w-full"
        }`}
        disabled={isButtonDisabled}
      />
    </form>
  );
}
