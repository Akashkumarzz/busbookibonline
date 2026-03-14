import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tanjtoalr',
  imports: [DatePipe,CurrencyPipe,],
  templateUrl: './tanjtoalr.component.html',
  styleUrl: './tanjtoalr.component.css'
})
export class TanjtoalrComponent {
  currentDate: Date = new Date();

  constructor(private router: Router) {}

  gotoSeat() {
    this.router.navigate(['/seat']);
  }
}
