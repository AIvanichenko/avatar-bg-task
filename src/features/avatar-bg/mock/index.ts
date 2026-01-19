import type { BgItem } from "../types";

import defaultImg from "@/assets/images/default-img.png";
import img1 from "@/assets/images/img-1.png";

export const MOCK_IDEAS = [
  "Animate glowing rays pulsating from behind the bottle, leaves gently swaying, and golden sparkles floating upward for a natural, radiant effect.",
  "Soft studio light with subtle bokeh and warm highlights.",
  "Minimal gradient backdrop with gentle particles and premium look.",
] as const;

export const MOCK_BACKGROUNDS: BgItem[] = [
  {
    id: "default",
    badge: "DEFAULT",
    previewUrl: defaultImg,
  },
  { id: "bg-1", previewUrl: img1 },
];
