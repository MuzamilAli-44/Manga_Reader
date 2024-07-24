import { Routes } from '@angular/router';
import { AuthGuardService } from './modules/authentication/services/auth-guard.service';
export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/authentication/authentication.module').then(
        (m) => m.ModModule
      ),
  },
  {
    path: 'search',
    loadChildren: () =>
      import('./modules/homepage/homepage.module').then((m) => m.HomepageModule),
    canActivate: [AuthGuardService],
  },

];
