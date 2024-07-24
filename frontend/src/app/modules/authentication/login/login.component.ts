import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth-service.service';

@Component({ 
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone:true,
  imports:[CommonModule, FormsModule]
  

})
export class LoginComponent {
  email: string='';
  password: string='';
  hidePassword:boolean=true;

  constructor(private router: Router, private authService: AuthService) {}

  onSubmit(form: any) {
    const userData = {
      username: form.value.email, 
      password: form.value.password
    };
  
    this.authService.loggedin(userData).subscribe({
      next: (response:any) => {
        localStorage.setItem("authToken",response.access_token)
        console.log("Login successful!", response);
        this.router.navigate(['search']);
      },
      error: (err) => {
        console.error("Login error:", err);
        alert('Invalid credentials. Please try again.');
      }
    });
  }
  
  navigateToUrl(event:any,url:string){
    event.preventDefault()
    this.router.navigateByUrl(url)
  }
  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }
  }

  

