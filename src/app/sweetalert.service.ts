import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class SweetalertService {
  constructor(private router: Router) {}

  sweetAlert(
    isRed1: boolean,
    isRed2: boolean,
    isRed3: boolean,
    isRed4: boolean,
    isRed5: boolean,
    isRed6: boolean,
    isRed7: boolean,
    isRed8: boolean,
    isRed11: boolean,
    isRed12: boolean,
    isRed13: boolean,
    isRed14: boolean,
    isRed15: boolean,
    isRed16: boolean,
    isRed17: boolean,
    isRed18: boolean
  ) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        actions: 'swal-buttons-gap',
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: 'Confirm Booking?',
        html:
          isRed1 ||
          isRed2 ||
          isRed3 ||
          isRed4 ||
          isRed5 ||
          isRed6 ||
          isRed7 ||
          isRed8 ||
          isRed11 ||
          isRed12 ||
          isRed13 ||
          isRed14 ||
          isRed15 ||
          isRed16 ||
          isRed17 ||
          isRed18
            ? '<strong class="text-primary">1 seat selected</strong>'
            : '<strong class="text-warning">Seat deselected</strong>',
        icon: 'info',
        showCancelButton: true,
        confirmButtonText: 'Confirm',
        cancelButtonText: 'Cancel',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          // First alert confirmed, now delay the second one by 2 seconds

          Swal.fire({
            title: 'Booking Confirmed!',
            text: 'Your booking has been confirmed successfully.',
            icon: 'success',
          }).then(() => {
            // This runs after the "Booking Confirmed!" SweetAlert closes
            console.log('Booking confirmed!');
          });
          // Delay the second SweetAlert by 2 seconds
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire({
            title: 'Cancelled',
            text: 'Booking Cancelled',
            icon: 'error',
          });
        }
      })
      .then(() => {
        this.router.navigate(['/home']);
      });
  }
}
