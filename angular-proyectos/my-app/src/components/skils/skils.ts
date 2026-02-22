import { Component } from '@angular/core';
import { DataService } from '../../app/data';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-skils',
  imports: [CommonModule],
  templateUrl: './skils.html',
  styleUrls: ['./skils.css']
})
export class Skils {
  skillsList: string[] = [];

  constructor(private data: DataService) {
    this.skillsList = this.data.skills;
  }
}
