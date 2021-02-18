import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor( public modal:NgbModal , private http: HttpClient) { 

    this.http.get('http://localhost:3000/Estados/');
    debugger;
  }

  ngOnInit(): void {
  }

}
