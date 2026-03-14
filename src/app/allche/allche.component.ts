import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allche',
  imports: [DatePipe,CurrencyPipe],
  templateUrl: './allche.component.html',
  styleUrl: './allche.component.css'
})
export class AllcheComponent {
  currentDate: Date = new Date();

  constructor(private router: Router) {}

  gotoSeat() {
    this.router.navigate(['/seat']);
  }
}
