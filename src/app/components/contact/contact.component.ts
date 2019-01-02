import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  emailContacto: string;
  constructor() { }

  ngOnInit() {
  }


  guardarEmail(){
    console.log(this.emailContacto);
    localStorage.setItem('emailContacto', this.emailContacto);
  }

}
