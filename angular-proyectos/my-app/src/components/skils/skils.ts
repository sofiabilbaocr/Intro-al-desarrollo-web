import { Component } from '@angular/core';
import { DataService } from '../../app/data';
import { CommonModule } from '@angular/common';
import { ExclaimPipe } from '../../app/exclaim.pipe';

@Component({
  selector: 'app-skils',
  standalone: true,
  imports: [CommonModule, ExclaimPipe],
  templateUrl: './skils.html',
  styleUrls: ['./skils.css']
})
export class Skils {
  skillsList: string[] = [];
  today = new Date();

  constructor(private data: DataService) {
    this.skillsList = this.data.skills;
  }
}
