// Park Buddy mascot illustration component
// Display based on unlock status: silhouette / partial image / full image

import { useAppStore } from "@/store/useAppStore";
import type { BuddyState } from "@/models/types";
import SvgDisplay from "./SvgDisplay";
import { cn } from "@/lib/utils";

interface BuddyIllustrationProps {
  parkId: string;
  state?: BuddyState;
  className?: string;
  size?: "sm" | "md" | "lg";
  animate?: boolean;
}

const sizeMap = {
  sm: "w-12 h-12",
  md: "w-24 h-24",
  lg: "w-40 h-40",
};

export default function BuddyIllustration({
  parkId,
  state: stateOverride,
  className,
  size = "md",
  animate = false,
}: BuddyIllustrationProps) {
  const park = useAppStore((s) => s.parks.find((p) => p.id === parkId));
  const storeState = useAppStore((s) => s.getBuddyState(parkId));

  if (!park) return null;

  const state = stateOverride ?? storeState;
  const buddy = park.buddy;

  let svg = buddy.silhouetteSvg;
  if (state === "familiar") svg = buddy.partialSvg;
  if (state === "unlocked") svg = buddy.fullSvg;

  return (
    <div
      className={cn(
        "flex items-center justify-center",
        sizeMap[size],
        animate && state === "unlocked" && "animate-breathe",
        className
      )}
    >
      <SvgDisplay
        svg={svg}
        className={cn(
          "w-full h-full",
          state === "unknown" && "opacity-70 grayscale-[40%]"
        )}
      />
    </div>
  );
}
