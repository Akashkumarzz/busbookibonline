import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-alrtoche',
  imports: [CommonModule],
  templateUrl: './alrtoche.component.html',
  styleUrl: './alrtoche.component.css',
})
export class AlrtocheComponent {
  currentDate: Date = new Date();

  constructor(private router: Router) {}

  gotoSeat() {
    this.router.navigate(['/seat']);
  }
}
