import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-kantoalr',
  imports: [DatePipe],
  templateUrl: './kantoalr.component.html',
  styleUrl: './kantoalr.component.css'
})
export class KantoalrComponent {
currentDate:Date=new Date();
}
