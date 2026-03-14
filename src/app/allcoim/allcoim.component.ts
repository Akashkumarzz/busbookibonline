import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allcoim',
  imports: [DatePipe,CurrencyPipe],
  templateUrl: './allcoim.component.html',
  styleUrl: './allcoim.component.css'
})
export class AllcoimComponent {
  currentDate: Date = new Date();

  constructor(private router: Router) {}

  gotoSeat() {
    this.router.navigate(['/seat']);
  }
}
