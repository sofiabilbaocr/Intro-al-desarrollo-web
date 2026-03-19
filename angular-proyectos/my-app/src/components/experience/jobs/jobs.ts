import { Component } from '@angular/core';
import { DataService } from '../../../services/skills-service/data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-jobs',
  imports: [CommonModule],
  templateUrl: './jobs.html',
  styleUrl: './jobs.css',
})
export class Jobs{
  jobsList: string[] = [];

  constructor(private data: DataService) {
    this.jobsList = this.data.jobs;
  }
}
