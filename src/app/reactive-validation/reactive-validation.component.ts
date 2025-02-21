import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactive-validation',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule], // Ensure ReactiveFormsModule is imported
  templateUrl: './reactive-validation.component.html',
  styleUrl: './reactive-validation.component.css'
})
export class ReactiveValidationComponent {
  loginForm: FormGroup;

  title = 'finals-project';
  anytext: string = "";
  username: string = "";
  email: string = "";
  password: string = "";
  phone: string = "";
  message: string = "";
  submitted: boolean = false;

  constructor() {
    this.loginForm = new FormGroup({
      name: new FormControl('', Validators.required),  
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      phone: new FormControl('', Validators.required),  
      message: new FormControl('', Validators.required) 
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form Submitted!', this.loginForm.value);
      this.username = this.loginForm.value.name;
      this.email = this.loginForm.value.email;
      this.password = this.loginForm.value.password;
      this.phone = this.loginForm.value.phone;
      this.message = this.loginForm.value.message;
      this.submitted = true;
    } else {
      console.log('Form is not valid');
    }
  }
}
