import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comtoalr',
  imports: [CommonModule,FormsModule,],
  templateUrl: './comtoalr.component.html',
  styleUrl: './comtoalr.component.css'
})
export class ComtoalrComponent {
  currentDate: Date = new Date();

  constructor(private router: Router) {}

  gotoSeat() {
    this.router.navigate(['/seat']);
  }
}
