import faker from "faker";
import { Mappable } from "./Map";

class Company implements Mappable {
  name: string;
  phrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.company.companyName();
    this.phrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  info(): string {
    return `
    <div>
      <div>${this.name}</div>
      <div>${this.phrase}</div>
    </div>
    `;
  }
}

export default Company;
