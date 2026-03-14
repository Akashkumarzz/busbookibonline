import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-initial',
  imports: [FormsModule, CommonModule],
  templateUrl: './initial.component.html',
  styleUrl: './initial.component.css',
})
export class InitialComponent implements OnInit {
  hideBus = true;

  busColor: any = '#6082B6';

  ngOnInit(): void {
    setTimeout(() => {
      this.hideBus = false;
      this.busColor = false;
    }, 3000);
  }
}
