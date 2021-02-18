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
      debugger;
       this.totalAngularPackages = data.total;
    },error => this.error = error); 
    
  }

  onSubmit() { // <----
    console.log("onSubmit(): this.totalAngularPackages: "+this.totalAngularPackages);
    debugger;
  }


}
