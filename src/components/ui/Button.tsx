import type { ButtonHTMLAttributes } from "react";
import { buttonClassName, type ButtonVariant } from "./buttonStyles";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export function Button({ className, variant, ...props }: Props) {
  return (
    <button
      className={[buttonClassName(variant), className].filter(Boolean).join(" ")}
      {...props}
    />
  );
}