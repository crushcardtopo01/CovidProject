import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-vacunacion',
  templateUrl: './vacunacion.component.html',
  styleUrls: ['./vacunacion.component.css']
})
export class VacunacionComponent implements OnInit {

  constructor(public modal: NgbModal) { }

  ngOnInit(): void {
  }

  openModal(contenido){
    this.modal.open(contenido,{size:'xl',scrollable:true});


  }

}
