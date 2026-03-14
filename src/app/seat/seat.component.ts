import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { SweetalertService } from '../sweetalert.service';
import { tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-seat',
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './seat.component.html',
  styleUrl: './seat.component.css',
})
export class SeatComponent {
  constructor(private routers: Router, private sweet: SweetalertService) {}

  seat = true;
  form = false;
  formDetails = false;
  name = '';
  email = '';
  age = '';
  proof = '';
  gender = '';

  isRed1 = false;
  isRed2 = false;
  isRed3 = false;
  isRed4 = false;
  isRed5 = false;
  isRed6 = false;
  isRed7 = false;
  isRed8 = false;

  //double seat
  isRed11 = false;
  isRed12 = false;
  isRed13 = false;
  isRed14 = false;
  isRed15 = false;
  isRed16 = false;
  isRed17 = false;
  isRed18 = false;

  isToggle() {
    this.isRed1 = !this.isRed1;
  }

  isToggle2() {
    this.isRed2 = !this.isRed2;
  }

  isToggle3() {
    this.isRed3 = !this.isRed3;
  }

  isToggle4() {
    this.isRed4 = !this.isRed4;
  }

  isToggle5() {
    this.isRed5 = !this.isRed5;
  }

  isToggle6() {
    this.isRed6 = !this.isRed6;
  }

  isToggle7() {
    this.isRed7 = !this.isRed7;
  }

  isToggle8() {
    this.isRed8 = !this.isRed8;
  }

  isToggle11() {
    this.isRed11 = !this.isRed11;
  }

  isToggle12() {
    this.isRed12 = !this.isRed12;
  }

  isToggle13() {
    this.isRed13 = !this.isRed13;
  }

  isToggle14() {
    this.isRed14 = !this.isRed14;
  }

  isToggle15() {
    this.isRed15 = !this.isRed15;
  }

  isToggle16() {
    this.isRed16 = !this.isRed16;
  }

  isToggle17() {
    this.isRed17 = !this.isRed17;
  }

  isToggle18() {
    this.isRed18 = !this.isRed18;
  }

  //access sweetAlert
  accessSweetAlert() {
    this.sweet.sweetAlert(
      this.isRed1,
      this.isRed2,
      this.isRed3,
      this.isRed4,
      this.isRed5,
      this.isRed6,
      this.isRed7,
      this.isRed8,
      this.isRed11,
      this.isRed12,
      this.isRed13,
      this.isRed14,
      this.isRed15,
      this.isRed16,
      this.isRed17,
      this.isRed18
    );
  }

  backBtn() {
    this.form = false;
    this.formDetails = false;
    this.seat = true;
  }

  showFormDetails() {
    this.form = false;
    this.seat = false;
    this.formDetails = true;
  }
  showForm() {
    this.seat = false;
    this.form = true;
  }

  yourDetails() {
    this.seat = false;
    this.form = true;
  }
}
