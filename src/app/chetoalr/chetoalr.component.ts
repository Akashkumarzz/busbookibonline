import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink ,Router} from '@angular/router';
@Component({
  selector: 'app-chetoalr',
  imports: [CurrencyPipe,CommonModule,RouterLink],
  templateUrl: './chetoalr.component.html',
  styleUrl: './chetoalr.component.css'
})
export class ChetoalrComponent {

  currentDate:Date=new Date();

  constructor(private router:Router){}

  gotoSeat()
  {
    this.router.navigate(['/seat']);
  }
}
