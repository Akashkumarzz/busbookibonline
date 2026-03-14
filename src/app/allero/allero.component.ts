import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allero',
  imports: [DatePipe,CurrencyPipe,],
  templateUrl: './allero.component.html',
  styleUrl: './allero.component.css'
})
export class AlleroComponent {
  currentDate: Date = new Date();

  constructor(private router: Router) {}

  gotoSeat() {
    this.router.navigate(['/seat']);
  }
}
