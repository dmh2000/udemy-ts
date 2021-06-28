const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

const add = (a: number, b: number): number => {
  return a + b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

const throwErr = (message: string): never => {
  throw new Error(message);
};

const wx = {
  date: new Date(),
  weather: "sunny",
};

const logW = ({ date, weather }: { date: Date; weather: string }): void => {
  console.log(date, weather);
};

logW(wx);
