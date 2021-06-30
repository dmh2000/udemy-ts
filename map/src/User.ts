import faker from "faker";
import { Mappable } from "./Map";

class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    const lat = parseFloat(faker.address.latitude(undefined, undefined, 5));
    const lon = parseFloat(faker.address.longitude(undefined, undefined, 5));
    this.location = { lat, lng: lon };
  }

  info(): string {
    return `
    <div>
      <div>${this.name}</div>
    </div>
    `;
  }
}

export default User;
