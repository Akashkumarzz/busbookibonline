import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-madurai',
  imports: [DatePipe,CurrencyPipe,],
  templateUrl: './madurai.component.html',
  styleUrl: './madurai.component.css'
})
export class MaduraiComponent {
  currentDate:Date=new Date();

  constructor(private router:Router){}

  gotoSeat()
  {
    this.router.navigate(['/seat']);
  }
}
