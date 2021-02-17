import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-visitar-medico',
  templateUrl: './visitar-medico.component.html',
  styleUrls: ['./visitar-medico.component.css']
})
export class VisitarMedicoComponent implements OnInit {

  constructor(public modal:NgbModal) { }

  ngOnInit(): void {
  }

  openModal(contenido){
    this.modal.open(contenido,{size:'xl',scrollable:true});


  }

}
