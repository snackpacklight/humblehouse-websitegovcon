import type { ReactNode } from "react";

export default function FadeUp({ children, className }: { children: ReactNode; delay?: number; className?: string }) {
  return <div className={className}>{children}</div>;
}
