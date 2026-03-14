import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-namtoalr',
  imports: [DatePipe],
  templateUrl: './namtoalr.component.html',
  styleUrl: './namtoalr.component.css'
})
export class NamtoalrComponent {
currentDate:Date=new Date();
}
