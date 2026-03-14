import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-namtop',
  imports: [DatePipe,CurrencyPipe,],
  templateUrl: './namtop.component.html',
  styleUrl: './namtop.component.css'
})
export class NamtopComponent {
  currentDate: Date = new Date();

  constructor(private router: Router) {}

  gotoSeat() {
    this.router.navigate(['/seat']);
  }
}
