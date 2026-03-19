import { Component, OnInit } from '@angular/core';
import { AdviceService } from '../../services/advice-service/advice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero implements OnInit {
  advice: string = '';

  constructor(private adviceService: AdviceService) {}

  ngOnInit(): void {
    this.adviceService.getAdvice().subscribe(data => {
      this.advice = data.slip.advice;
    });
  }
}