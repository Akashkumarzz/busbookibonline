import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-saltoalr',
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './saltoalr.component.html',
  styleUrl: './saltoalr.component.css',
})
export class SaltoalrComponent {
  currentDate: Date = new Date();

  constructor(private router: Router) {}

  gotoSeat() {
    this.router.navigate(['/seat']);
  }
}
