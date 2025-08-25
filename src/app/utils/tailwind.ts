import { toCamelCase } from "./string";

type Prefix =
  | "text"
  | "hover:text"
  | "dark:text"
  | "bg"
  | "hover:bg"
  | "dark:bg"
  | "dark:hover:bg"
  | "fill"
  | "dark:fill"
  | "group-hover:fill"
  | "dark:group-hover:fill"
  | "checked:bg"
  | "checked:border"
  | "peer-checked:border"
  | "peer-checked:bg"
  | "border"
  | "dark:hover:text";

export function generateVariants(color: string, prefixes: Prefix[]) {
  const entries = prefixes.map((prefix) => {
    const key = toCamelCase(prefix);
    return [key, `${prefix}-${color}`];
  });

  return Object.fromEntries(entries);
}