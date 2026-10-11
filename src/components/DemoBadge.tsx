// Demo mode badge component
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface DemoBadgeProps {
  className?: string;
  label?: string;
}

export default function DemoBadge({ className, label = "Demo" }: DemoBadgeProps) {
  return (
    <span className={cn("demo-badge", className)}>
      <Sparkles className="w-3 h-3" />
      {label}
    </span>
  );
}
