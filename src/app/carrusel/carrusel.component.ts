import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngbd-carousel-basic',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/1200/600`);

  constructor() { }

  ngOnInit(): void {
  }

}
