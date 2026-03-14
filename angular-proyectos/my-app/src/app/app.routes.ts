import { Routes } from '@angular/router';
import { Hero } from '../components/hero/hero';
import { Skils } from '../components/skils/skils';
import { Experience } from '../components/experience/experience';
import { Jobs } from '../components/experience/jobs/jobs';
import { Volunteering } from '../components/experience/volunteering/volunteering';
import { Projects } from '../components/projects/projects';

export const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },

  { path: 'about', component: Hero },
  { path: 'skills', component: Skils },

  {
    path: 'experience',
    component: Experience,
    children: [
      { path: 'jobs', component: Jobs },
      { path: 'volunteering', component: Volunteering }, 
      { path: '', redirectTo: 'jobs', pathMatch: 'full' }
    ]
  },

  { path: 'projects', component: Projects },

  { path: '**', redirectTo: 'about' }
];