import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tritoalr',
  imports: [DatePipe,CurrencyPipe,CommonModule],
  templateUrl: './tritoalr.component.html',
  styleUrl: './tritoalr.component.css'
})
export class TritoalrComponent {
  currentDate: Date = new Date();

  constructor(private router: Router) {}

  gotoSeat() {
    this.router.navigate(['/seat']);
  }
}
