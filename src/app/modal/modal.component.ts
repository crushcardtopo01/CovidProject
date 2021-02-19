import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  totalAngularPackages; // <---
  url: string = 'http://localhost:3000/Estados/';
  error;




  constructor( public modal:NgbModal , private http: HttpClient) { 

  }

  ngOnInit(): void {

    console.log("ngOnInit()"); 
    this.http.get<any>(this.url).subscribe(data => {
      
      this.totalAngularPackages = data;
      console.log("onSubmit(): this.totalAngularPackages: "+this.totalAngularPackages);
      debugger;
    },error => this.error = error); 
    
  }

  openModal(contenido){
    this.modal.open(contenido,{size:'xl',scrollable:true});


  }


}
