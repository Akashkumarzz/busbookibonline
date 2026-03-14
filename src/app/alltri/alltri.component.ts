import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alltri',
  imports: [DatePipe,CurrencyPipe],
  templateUrl: './alltri.component.html',
  styleUrl: './alltri.component.css'
})
export class AlltriComponent {
  currentDate: Date = new Date();

  constructor(private router: Router) {}

  gotoSeat() {
    this.router.navigate(['/seat']);
  }
}
