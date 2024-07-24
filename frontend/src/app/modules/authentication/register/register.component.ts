import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth-service.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  hidePassword: boolean = true;
  httpClient = inject(HttpClient);

  constructor(private route: Router, private registerations: AuthService) {}

  onSubmit(form: any) {
    // alert('you have registered');
    // Store the form data in local storage, make an obj
    const userData = {
      username: form.value.name,
      email: form.value.email,
      password: form.value.password,
    };

    // localStorage.setItem('userData', JSON.stringify(userData)); //json to convert obj to string because setitem takes string
    this.registerations.Registered(userData).subscribe((data) => {
      console.log('data', data);
      this.route.navigateByUrl('login');
    });
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }
  navigateToLogin(){
    this.route.navigateByUrl('login');
  }
}
//Before you save the array in the localStorage, you need to convert it to a string since it can only store strings. (stringify)

//When you retrieve the array from the localStorage, you will get a string,
//so you need to convert it to an array if you want to manipulate it.(parse)
