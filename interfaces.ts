interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

const old: Vehicle = {
  name: "civic",
  broken: true,
  year: 2000,
};

const printOld = (v: Vehicle): void => {
  console.log(`Name: ${v.name}`);
  console.log(`year: ${v.year}`);
  console.log(`broke: ${v.broken}`);
};

// object must implement Vehicle
const printX = ({ name, year, broken }: Vehicle): void => {
  console.log(`Name: ${name}`);
  console.log(`year: ${year}`);
  console.log(`broke: ${broken}`);
};

// object can be anything with these members
const printY = ({ name, year, broken }): void => {
  console.log(`Name: ${name}`);
  console.log(`year: ${year}`);
  console.log(`broke: ${broken}`);
};

interface HasName {
  name: string;
}
const printZ = (n: HasName) => {
  console.log(n.name);
};

const x = {
  name: "x",
  year: 2000,
  broken: false,
  doors: 4,
};

printOld(old);
printOld(x);
printX(old);
printX(x);
printY(old);
printY(x);
printZ(old);
printZ(x);
