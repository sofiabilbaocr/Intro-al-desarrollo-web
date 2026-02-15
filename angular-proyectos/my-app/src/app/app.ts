import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Salimos de 'app' con '../' para encontrar 'components'
import { Contact } from '../components/contact/contact';
import { Education} from '../components/education/education';
import { Experience} from '../components/experience/experience';
import { Footer } from '../components/footer/footer';
import { Hero } from '../components/hero/hero';
import { Languages } from '../components/languages/languages';
import { Navbar } from '../components/navbar/navbar';
import { Skils } from '../components/skils/skils';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Navbar,
    Hero,
    Experience,
    Education,
    Skils,
    Languages,
    Contact,
    Footer
  ],
  templateUrl: './app.html',
})
export class AppComponent {
  title = 'mi-app';
}

