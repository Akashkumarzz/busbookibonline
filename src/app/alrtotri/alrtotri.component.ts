import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alrtotri',
  imports: [DatePipe,CurrencyPipe],
  templateUrl: './alrtotri.component.html',
  styleUrl: './alrtotri.component.css'
})
export class AlrtotriComponent {
  currentDate: Date = new Date();

  constructor(private router: Router) {}

  gotoSeat() {
    this.router.navigate(['/seat']);
  }
}
