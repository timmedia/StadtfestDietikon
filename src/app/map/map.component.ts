import { Component, OnInit, ViewChild } from '@angular/core';
import { Locations } from '../locations';
declare const google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @ViewChild('map') mapElement: any;
  map: google.maps.Map;
  markers: Array<any>;
  markerInformation: Array<any>;
  isTracking: boolean;
  currentPositionMarker;

  constructor() { }

  ngOnInit() {
    var mapProp = {
      center: new google.maps.LatLng(47.402614, 8.402115),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true,
      fullscreenControl: false,
      streetViewControl: false
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapProp);
    this.markerInformation = Locations.map(location => new google.maps.InfoWindow({
      content: location.title
    }));
    this.markers = Locations.map(location => new google.maps.Marker({
      position: new google.maps.LatLng(location.lat, location.lng),
      map: this.map,
      title: location.title
    }));
    this.markers.forEach((marker, index) => marker.addListener('click', () => this.markerInformation[index].open(this.map, marker)))
    
    this.trackUser();
  }

  trackUser() {
    if (navigator.geolocation) {
      this.isTracking = true;
      navigator.geolocation.watchPosition((position) => {
        if (!this.currentPositionMarker) {
          this.currentPositionMarker = new google.maps.Marker({
            position: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
            title: 'Ihr Standort',
            map: this.map,
            icon: '../../assets/marker.png'
          })
        } else {
          this.currentPositionMarker.setPosition(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
        }
      })
    } else {
      console.log("Tracking not supported");
    }
  }

}
