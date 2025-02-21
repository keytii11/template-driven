import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule,  } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { ReactiveValidationComponent } from './reactive-validation/reactive-validation.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, TemplateDrivenComponent, ReactiveComponent, ReactiveValidationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
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
}
