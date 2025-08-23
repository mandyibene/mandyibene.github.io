export function toCamelCase(input: string): string {
  return input
    .split(/[:\-]/g)
    .map((word, index) =>
      index === 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("");
}