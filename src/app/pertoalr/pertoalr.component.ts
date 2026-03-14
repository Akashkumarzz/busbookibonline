import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pertoalr',
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './pertoalr.component.html',
  styleUrl: './pertoalr.component.css',
})
export class PertoalrComponent {
  currentDate: Date = new Date();

  constructor(private router: Router) {}

  gotoSeat() {
    this.router.navigate(['/seat']);
  }
}
