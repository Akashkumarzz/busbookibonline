import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bmtc',
  imports: [DatePipe,CurrencyPipe,],
  templateUrl: './bmtc.component.html',
  styleUrl: './bmtc.component.css'
})
export class BmtcComponent {
  currentDate: Date = new Date();

  constructor(private router: Router) {}

  gotoSeat() {
    this.router.navigate(['/seat']);
  }
}
