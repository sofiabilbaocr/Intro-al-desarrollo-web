import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  skills: string[] = ['Angular', 'Github', 'Node/Npm'];
  jobs: string[] = ['Portafolio Diversificado'];
}
