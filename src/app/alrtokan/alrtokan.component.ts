import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-alrtokan',
  imports: [DatePipe],
  templateUrl: './alrtokan.component.html',
  styleUrl: './alrtokan.component.css'
})
export class AlrtokanComponent {
currentDate:Date=new Date();
}
