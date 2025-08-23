import { colors } from "@/constants";
import fs from "fs";
import path from "path";

const safelist: string[] = [];

for (const variantSet of Object.values(colors) as Record<string, string>[]) {
  for (const className of Object.values(variantSet)) {
    safelist.push(className as string);
  }
}

const outputPath = path.resolve(__dirname, "../tailwind-safelist.json");
fs.writeFileSync(outputPath, JSON.stringify(safelist, null, 2));