import { generateVariants } from "@/app/utils";

const baseColors = {
  base: "stone-50",
  subtle: "stone-400",
  contrast: "zinc-800",
  muted: "zinc-500",
  strong: "zinc-900",
} as const;

export const colors = {
  base: generateVariants(baseColors.base, [
    "text",
    "hover:text",
    "dark:text",
    "bg",
    "dark:bg",
    "hover:bg",
    "dark:hover:bg",
    "checked:bg",
    "border",
    "checked:border",
    "fill",
    "dark:fill",
    "group-hover:fill",
    "peer-checked:border",
  ]),

  contrast: generateVariants(baseColors.contrast, [
    "bg",
    "hover:bg",
    "dark:hover:bg",
    "fill",
  ]),

  subtle: generateVariants(baseColors.subtle, [
    "text",
  ]),

  muted: generateVariants(baseColors.muted, [
    "text",
  ]),

  strong: generateVariants(baseColors.strong, [
    "text",
    "bg",
    "dark:hover:text",
    "dark:bg",
    "peer-checked:bg",
    "border",
    "peer-checked:border",
    "fill",
    "group-hover:fill",
    "dark:group-hover:fill",
  ]),
};