import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private Cities: string[] = [
    'Ariyalur',
    'Ariyalur',
    'Chennai',
    'Coimbatore',
    'Erode',
    'Kanniyakumari',
    'Namakkal',
    'Perambalur',
    'Salem',
    'Thanjavur',
    'Tiruchirappalli',
    'Madurai',
    'Banglore',
    'Mysore',
    'Nagapattinam',
    'Dharmapuri',
    'Villupuram',
    'Jayankondam'
    

  ];

  getCities(): Observable<string[]> {
    return of(this.Cities);
  }
}
