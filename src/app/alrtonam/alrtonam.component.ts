import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-alrtonam',
  imports: [DatePipe],
  templateUrl: './alrtonam.component.html',
  styleUrl: './alrtonam.component.css'
})
export class AlrtonamComponent {
currentDate:Date=new Date();
}
