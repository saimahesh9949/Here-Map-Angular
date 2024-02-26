import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { JsmapComponent } from "./jsmap/jsmap.component";
import { MappositionComponent } from "./mapposition/mapposition.component";
import { NewFeaturesComponent } from "./new-features/new-features.component";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, JsmapComponent, MappositionComponent, NewFeaturesComponent , FormsModule]
})
export class AppComponent {
  title = 'HERE_MAPS';
  constructor() {
    this.zoom = 2;
    this.lat = 0;
    this.lng = 0;
  }

  zoom: number;
  lat: number;
  lng: number;


  handleInputChange(event: Event) {
    const target = <HTMLInputElement> event.target;
    if (target) {
      if (target.name === 'zoom') {
        this.zoom = parseFloat(target.value);
      }
      if (target.name === 'lat') {
        this.lat = parseFloat(target.value);
      }
      if (target.name === 'lng') {
        this.lng = parseFloat(target.value);
      }
    }
  }

  handleMapChange(event: H.map.ChangeEvent) {
    if (event.newValue.lookAt) {
      const lookAt = event.newValue.lookAt;
      this.zoom = lookAt.zoom;
      this.lat = lookAt.position.lat;
      this.lng = lookAt.position.lng;
    }
  }

}
