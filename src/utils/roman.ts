/** Convert 1-based index to uppercase Roman numeral (I–XII covers site needs). */
export const toRoman = (n: number): string => {
  const map: [number, string][] = [
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];
  let num = Math.max(1, Math.floor(n));
  let out = "";
  for (const [value, glyph] of map) {
    while (num >= value) {
      out += glyph;
      num -= value;
    }
  }
  return out;
};
