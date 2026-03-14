import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chetomy',
  imports: [DatePipe,CurrencyPipe,],
  templateUrl: './chetomy.component.html',
  styleUrl: './chetomy.component.css'
})
export class ChetomyComponent {
  currentDate: Date = new Date();

  constructor(private router: Router) {}

  gotoSeat() {
    this.router.navigate(['/seat']);
  }
}
