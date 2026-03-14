import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chetoero',
  imports: [DatePipe,CurrencyPipe],
  templateUrl: './chetoero.component.html',
  styleUrl: './chetoero.component.css'
})
export class ChetoeroComponent {
  currentDate:Date=new Date();

  constructor(private router:Router){}

  gotoSeat()
  {
    this.router.navigate(['/seat']);
  }
}
