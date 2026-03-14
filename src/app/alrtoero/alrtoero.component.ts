import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alrtoero',
  imports: [CommonModule,FormsModule,],
  templateUrl: './alrtoero.component.html',
  styleUrl: './alrtoero.component.css'
})
export class AlrtoeroComponent {
  currentDate: Date = new Date();

  constructor(private router: Router) {}

  gotoSeat() {
    this.router.navigate(['/seat']);
  }
}
