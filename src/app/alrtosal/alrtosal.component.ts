import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alrtosal',
  imports: [CommonModule, FormsModule],
  templateUrl: './alrtosal.component.html',
  styleUrl: './alrtosal.component.css',
})
export class AlrtosalComponent {
  currentDate: Date = new Date();

  constructor(private router: Router) {}

  gotoSeat() {
    this.router.navigate(['/seat']);
  }
}
