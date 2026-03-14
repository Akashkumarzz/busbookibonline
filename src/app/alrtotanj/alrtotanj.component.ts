import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router, ROUTER_CONFIGURATION } from '@angular/router';

@Component({
  selector: 'app-alrtotanj',
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './alrtotanj.component.html',
  styleUrl: './alrtotanj.component.css',
})
export class AlrtotanjComponent {
  currentDate: Date = new Date();

  constructor(private router: Router) {}

  gotoSeat() {
    this.router.navigate(['/seat']);
  }
}
