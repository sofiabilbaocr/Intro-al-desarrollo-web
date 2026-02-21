import { Routes } from '@angular/router';
import { Experience} from '../components/experience/experience';
import { Hero } from '../components/hero/hero';;
import { Skils } from '../components/skils/skils';

export const routes: Routes = [
  { path: '', redirectTo: 'hero', pathMatch: 'full' },

  { path: 'hero', component: Hero },
  { path: 'skills', component: Skils },

  { path: '**', redirectTo: 'about' }
];
