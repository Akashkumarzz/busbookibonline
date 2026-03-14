import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chetocoim',
  imports: [DatePipe,CurrencyPipe],
  templateUrl: './chetocoim.component.html',
  styleUrl: './chetocoim.component.css'
})
export class ChetocoimComponent {
  currentDate:Date=new Date();

  constructor(private router:Router){}

  gotoSeat()
  {
    this.router.navigate(['/seat']);
  }
}
