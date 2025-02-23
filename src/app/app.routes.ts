import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const routes: Routes = [
  { path: '', component: LayoutComponent, loadChildren: () => import('./layout/layout.route').then(mod => mod.ADMIN_ROUTES)},
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },

];
