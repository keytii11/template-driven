import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactive',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css'
})
export class ReactiveComponent {

  title = 'finals-project';
  anytext: string = "";
  username: string = "";
  email: string ="";
  password: string="";
  phone: string="";
  message: string="";
  submitted: boolean = false;
  
  onSubmit() {
    this.submitted = true;
  }
 formdata: FormGroup = new FormGroup({
    username: new FormControl(""),
    email: new FormControl(""),
    password: new FormControl(""),
    phone: new FormControl(""),
    message: new FormControl(""),
  });

  onClickSubmit(data: {username: string, email:string, password:string, phone:string, message:string}){
    this.username = data.username;
    this.email = data.email;
    this.password = data.password;
    this.phone = data.phone;
    this.message = data.message;
    this.submitted = true;


  }
}
