const carMakers: string[] = ["ford", "toyota", "chevy"];

let a: string[] = [];
a.push("a");

const b: string[][] = [["f150"], ["tacoma"], ["camaro"]];

b.forEach((v: string[]): void => {
  console.log(v[0]);
});

b[0].forEach((v: string): void => {
  console.log(v);
});

// flexible types

const idate: [Date | string][] = [];
