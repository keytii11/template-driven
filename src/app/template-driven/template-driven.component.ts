import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-driven',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './template-driven.component.html',
  styleUrl: './template-driven.component.css'
})
export class TemplateDrivenComponent {
  title = 'template-form-app';
  username: string = "";
  email: string = "";
  password: string = "";
  phone: string = "";
  message: string = "";
  anytext: string = "";
  submitted: boolean = false;

  onSubmit(){
    this.submitted = true;
  }


}
