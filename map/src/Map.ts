//import {} from "google";
//import {} from "google.maps";

export interface Mappable {
  location: { lat: number; lng: number };
  name: string;
  info(): string;
  color?: number;
}

class Map {
  private map: google.maps.Map;

  constructor() {
    const e = document.querySelector("#map");
    console.log(e);
    this.map = new google.maps.Map(e, {
      zoom: 1,
      center: { lat: 0, lng: 0 },
    });
  }

  setCenter(lat: number, lng: number) {
    this.map.setCenter({ lat, lng });
  }

  setZoom(level: number) {
    this.map.setZoom(level);
  }

  addMarker(m: Mappable) {
    const marker = new google.maps.Marker({
      title: m.name,
      position: { lat: m.location.lat, lng: m.location.lng },
      map: this.map,
    });

    marker.addListener("click", () => {
      const infowin = new google.maps.InfoWindow({
        content: m.info(),
      });
      infowin.open({
        anchor: marker,
        map: this.map,
        shouldFocus: false,
      });
    });
  }
}

export default Map;
