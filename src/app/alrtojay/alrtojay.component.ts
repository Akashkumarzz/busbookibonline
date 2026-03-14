import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alrtojay',
  imports: [DatePipe,CurrencyPipe,],
  templateUrl: './alrtojay.component.html',
  styleUrl: './alrtojay.component.css'
})
export class AlrtojayComponent {
  currentDate: Date = new Date();

  constructor(private router: Router) {}

  gotoSeat() {
    this.router.navigate(['/seat']);
  }
}
