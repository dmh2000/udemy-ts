import fs from "fs";

export default function loadCsv<T>(
  fname: string,
  loader: (v: string[]) => T
): T[] {
  return fs
    .readFileSync(fname, {
      encoding: "utf-8",
    })
    .split("\n")
    .map((v: string): string[] => {
      return v.split(",");
    })
    .map((v: string[]): T => {
      return loader(v);
    });
}
