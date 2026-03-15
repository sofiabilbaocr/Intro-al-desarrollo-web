import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github-service/github-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects implements OnInit {
  repos: any[] = [];

  constructor(private githubService: GithubService) {}

ngOnInit(): void {
  this.repos = [
    {
      name: 'Final Project Board Game',
      stargazers_count: 0,
      description: 'Juego de mesa desarrollado en Python',
      html_url: 'https://github.com/alejandro-ufm/final-project-board-game-sofiabilbaoc'
    },
    {
      name: 'Parcial No.2 Pokemon Battle',
      stargazers_count: 0,
      description: 'Batalla de Pokemon en Python',
      html_url: 'https://github.com/alejandro-ufm/parcial-no-2-pok-mon-battle-sofiabilbaoc'
    },
    {
      name: 'Lab No.5 The Aurora Zoo',
      stargazers_count: 0,
      description: 'Simulación de zoológico en C#',
      html_url: 'https://github.com/alejandro-ufm/lab-no-5-the-aurora-zoo-sofiabilbaoc'
    }
  ];
}
}
