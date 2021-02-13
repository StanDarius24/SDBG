import { Component, OnInit } from '@angular/core';

declare const L:any;

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    if(!navigator.geolocation)
    {
      console.log('location is not supported');
    }
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(
        `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
      );
      let mymap = L.map('mapid').setView([45.41580, 22.21695], 13);

      L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGFyaXV6c3RhbiIsImEiOiJja2wzcHdpbWUwNnVlMzBwNm1zZDExaTM1In0.H1PgC6wmtu_Yzhda725SkQ', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'your.mapbox.access.token'
      }).addTo(mymap);
      let marker = L.marker([45.41580, 22.21695]).addTo(mymap);
      marker.bindPopup("<b>Salon Diva B&G</b>").openPopup();
    });
    this.watchPosition();
  }

  watchPosition(){
    let desLat=0;
    let desLon=0;
    let id = navigator.geolocation.watchPosition(position => {
      console.log(
        `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
      );
      if(desLat == position.coords.longitude)
      {
        navigator.geolocation.clearWatch(id);
      }
    },(err) =>{
      console.log(err);
    },{
      enableHighAccuracy: true,
      timeout:5000,
      maximumAge: 0
    })
  }

}
