import { Routes } from '@angular/router';
import { HeroesComponent } from './Components/heroes/heroes.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { HeroDetailComponent } from './Components/hero-detail/hero-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
];
