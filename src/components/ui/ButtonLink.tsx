import type { AnchorHTMLAttributes } from "react";
import { Link, type LinkProps } from "react-router-dom";
import { buttonClassName, type ButtonVariant } from "./buttonStyles";

type Props = LinkProps & {
  variant?: ButtonVariant;
  className?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

export function ButtonLink({
  variant,
  className,
  ...props
}: Props) {
  return (
    <Link
      className={[buttonClassName(variant), className].filter(Boolean).join(" ")}
      {...props}
    />
  );
}