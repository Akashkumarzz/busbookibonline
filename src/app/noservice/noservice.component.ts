import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-noservice',
  imports: [DatePipe,],
  templateUrl: './noservice.component.html',
  styleUrl: './noservice.component.css'
})
export class NoserviceComponent {
  currentDate:Date=new Date();
}
