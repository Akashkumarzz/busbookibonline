import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alrtoper',
  imports: [CommonModule,FormsModule,],
  templateUrl: './alrtoper.component.html',
  styleUrl: './alrtoper.component.css'
})
export class AlrtoperComponent {
  currentDate: Date = new Date();

  constructor(private router: Router) {}

  gotoSeat() {
    this.router.navigate(['/seat']);
  }
}
