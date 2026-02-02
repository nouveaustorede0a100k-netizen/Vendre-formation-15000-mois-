import { cn } from "@/lib/utils";

export function Badge({
  className,
  variant = "default",
  children,
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & { variant?: "default" | "blue" | "pill" }) {
  const variants = {
    default: "bg-[#F3F4F6] text-[#374151]",
    blue: "bg-[#2563EB] text-white",
    pill: "rounded-full bg-[#F3F4F6] text-[#374151] px-3 py-1 text-sm",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-lg px-2.5 py-0.5 text-sm font-medium",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
