export type ButtonVariant = "primary" | "secondary";

export function buttonClassName(variant: ButtonVariant = "primary") {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold " +
    "transition focus:outline-none focus:ring-2 focus:ring-micro-lime/60";

  const variants: Record<ButtonVariant, string> = {
    primary: "bg-micro-lime text-white hover:brightness-95",
    secondary: "bg-white/90 text-black hover:bg-white",
  };

  return `${base} ${variants[variant]}`;
}