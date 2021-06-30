class Vehic {
  protected price: number;

  constructor(p: number) {
    this.price = p;
  }

  public drive(): void {
    console.log("drive");
  }

  protected honk(): void {
    console.log("honk");
  }

  public cost(): void {
    console.log(this.price);
  }
}

class Car extends Vehic {
  constructor(p: number) {
    super(p);
  }

  drive(): void {
    console.log("vroom");
  }

  honk(): void {
    super.honk();
  }

  x(): void {
    console.log(this.price);
  }
}

const v = new Vehic(1);
v.drive();
// v.honk();
v.cost();

const a = new Car(3);
a.drive();
a.honk();
a.cost();
a.x();
