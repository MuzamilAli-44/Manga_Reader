import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth-service.service';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})
export class LogoutComponent {

  constructor(private router: Router, private authService: AuthService) {
    this.logoutUser()
  }

  logoutUser()
  {
    this.authService.logout();
    alert('You are Logged out');
    this.router.navigate(['login'])
    
  }
}
