import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-mitos',
  templateUrl: './mitos.component.html',
  styleUrls: ['./mitos.component.css']
})
export class MitosComponent implements OnInit {

  constructor(public modal : NgbModal) { }

  ngOnInit(): void {
  }

  openModal(contenido){
    this.modal.open(contenido,{size:'xl',scrollable:true});


  }


}
