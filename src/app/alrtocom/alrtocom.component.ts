import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-alrtocom',
  imports: [CommonModule,FormsModule,],
  templateUrl: './alrtocom.component.html',
  styleUrl: './alrtocom.component.css'
})
export class AlrtocomComponent {

  currentDate: Date = new Date();

  constructor(private router: Router) {}

  gotoSeat() {
    this.router.navigate(['/seat']);
  }

}
