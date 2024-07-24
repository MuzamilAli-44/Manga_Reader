import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { LogoutComponent } from '../../modules/authentication/logout/logout.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavBarComponent,LogoutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
