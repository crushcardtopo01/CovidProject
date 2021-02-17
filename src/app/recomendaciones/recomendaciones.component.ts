import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-recomendaciones',
  templateUrl: './recomendaciones.component.html',
  styleUrls: ['./recomendaciones.component.css']
})
export class RecomendacionesComponent implements OnInit {

  constructor(public modal:NgbModal) { }

  ngOnInit(): void {
  }

  openModalRecomendaciones(contenido){
    this.modal.open(contenido,{size:'xl',scrollable:true});


  }

}
