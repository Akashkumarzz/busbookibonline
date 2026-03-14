import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-erotoalr',
  imports: [CommonModule,FormsModule,],
  templateUrl: './erotoalr.component.html',
  styleUrl: './erotoalr.component.css'
})
export class ErotoalrComponent {
  currentDate: Date = new Date();

  constructor(private router: Router) {}

  gotoSeat() {
    this.router.navigate(['/seat']);
  }
}
