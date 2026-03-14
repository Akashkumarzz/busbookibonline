import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ListService } from '../list.service';
import { InitialComponent } from '../initial/initial.component';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    InitialComponent,
    FooterComponent,
    NavbarComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  rotation = 0;
  SearchInput1 = '';
  SearchInput2 = '';
  parent = false;
  parent2 = false;
  parent3 = false;
  list = false;
  hideContainer = true;
  navbar = false;

  initialComp = true;
  footer = false;

  city: string[] = [];

  constructor(private service: ListService, private routers: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.initialComp = false;
      this.parent = true;
      this.parent2 = true;
      this.parent3 = true;
      this.footer = true;
      this.navbar = true;
    }, 3000);
  }

  ngOnDestroy(): void {
    // Reset the component's states when it is destroyed
    console.log('Destroyed...');
    this.initialComp = true;

    this.parent = false;
    this.list = false;
  }

  // swap function
  swap() {
    const temp = this.SearchInput1;
    this.SearchInput1 = this.SearchInput2;
    this.SearchInput2 = temp;
  }

  // Access Service
  getList() {
    this.service.getCities().subscribe((datas) => {
      this.city = datas.sort((a: string, b: string) => a.localeCompare(b));
      console.log(this.city);
    });
  }

  // Show list or parent
  inputClick() {
    this.parent = false;
    this.parent2 = false;
    this.parent3 = false;
    this.navbar = false;
    this.list = true;
  }

  // Handle back button
  backBtn() {
    this.parent = true;
    this.parent2 = true;
    this.parent3 = true;
    this.list = false;
    this.navbar = true;
  }

  listClick() {
    this.list = false;
    this.parent = true;
    this.parent3 = true;
    this.navbar = true;
  }

  selectCity(item: string) {
    if (this.SearchInput1 === '') {
      this.SearchInput1 = item;
    } else {
      this.SearchInput2 = item;
    }
  }

  //Input statements
  AlrtoChe() {
    if (
      this.SearchInput1.toLowerCase() == 'ariyalur' &&
      this.SearchInput2.toLowerCase() == 'chennai'
    ) {
      this.routers.navigate(['/alrtoche']);
    } else if (
      this.SearchInput1.toLowerCase() === 'chennai' &&
      this.SearchInput2.toLowerCase() === 'ariyalur'
    ) {
      this.routers.navigate(['/chetoalr']);
    } else if (
      this.SearchInput1.toLowerCase() == 'ariyalur' &&
      this.SearchInput2.toLowerCase() == 'coimbatore'
    ) {
      this.routers.navigate(['/alrtocom']);
    } else if (
      this.SearchInput1.toLowerCase() == 'coimbatore' &&
      this.SearchInput2.toLowerCase() == 'ariyalur'
    ) {
      this.routers.navigate(['/comtoalr']);
    } else if (
      this.SearchInput1.toLowerCase() == 'ariyalur' &&
      this.SearchInput2.toLowerCase() == 'erode'
    ) {
      this.routers.navigate(['/alrtoero']);
    } else if (
      this.SearchInput1.toLowerCase() == 'erode' &&
      this.SearchInput2.toLowerCase() == 'ariyalur'
    ) {
      this.routers.navigate(['/erotoalr']);
    } else if (
      this.SearchInput1.toLowerCase() == 'ariyalur' &&
      this.SearchInput2.toLowerCase() == 'kanniyakumari'
    ) {
      this.routers.navigate(['/alrtokan']);
    } else if (
      this.SearchInput1.toLowerCase() == 'kanniyakumari' &&
      this.SearchInput2.toLowerCase() == 'ariyalur'
    ) {
      this.routers.navigate(['/kantoalr']);
    } else if (
      this.SearchInput1.toLowerCase() == 'ariyalur' &&
      this.SearchInput2.toLowerCase() == 'namakkal'
    ) {
      this.routers.navigate(['/alrtonam']);
    } else if (
      this.SearchInput1.toLowerCase() == 'namakkal' &&
      this.SearchInput2.toLowerCase() == 'ariyalur'
    ) {
      this.routers.navigate(['/namtoalr']);
    } else if (
      this.SearchInput1.toLowerCase() == 'ariyalur' &&
      this.SearchInput2.toLowerCase() == 'perambalur'
    ) {
      this.routers.navigate(['/alrtoper']);
    } else if (
      this.SearchInput1.toLowerCase() == 'perambalur' &&
      this.SearchInput2.toLowerCase() == 'ariyalur'
    ) {
      this.routers.navigate(['/pertoalr']);
    } else if (
      this.SearchInput1.toLowerCase() == 'ariyalur' &&
      this.SearchInput2.toLowerCase() == 'salem'
    ) {
      this.routers.navigate(['/alrtosal']);
    } else if (
      this.SearchInput1.toLowerCase() == 'salem' &&
      this.SearchInput2.toLowerCase() == 'ariyalur'
    ) {
      this.routers.navigate(['/saltoalr']);
    } else if (
      this.SearchInput1.toLowerCase() == 'ariyalur' &&
      this.SearchInput2.toLowerCase() == 'thanjavur'
    ) {
      this.routers.navigate(['/alrtotanj']);
    } else if (
      this.SearchInput1.toLowerCase() == 'thanjavur' &&
      this.SearchInput2.toLowerCase() == 'ariyalur'
    ) {
      this.routers.navigate(['/tanjtoalr']);
    } else if (
      this.SearchInput1.toLowerCase() == 'ariyalur' &&
      this.SearchInput2.toLowerCase() == 'tiruchirappalli'
    ) {
      this.routers.navigate(['/alrtotri']);
    } else if (
      this.SearchInput1.toLowerCase() == 'tiruchirappalli' &&
      this.SearchInput2.toLowerCase() == 'ariyalur'
    ) {
      this.routers.navigate(['/tritoalr']);
    } else if (
      (this.SearchInput1.toLowerCase() == 'chennai' &&
        this.SearchInput2.toLowerCase() == 'coimbatore') ||
      (this.SearchInput1.toLowerCase() == 'coimbatore' &&
        this.SearchInput2.toLowerCase() == 'chennai')
    ) {
      this.routers.navigate(['/chetocoim']);
    } else if (
      (this.SearchInput1.toLowerCase() == 'chennai' &&
        this.SearchInput2.toLowerCase() == 'erode') ||
      (this.SearchInput1.toLowerCase() == 'erode' &&
        this.SearchInput2.toLowerCase() == 'chennai')
    ) {
      this.routers.navigate(['/chetoero']);
    } else if (
      (this.SearchInput1.toLowerCase() == 'chennai' &&
        this.SearchInput2.toLowerCase() == 'kanniyakumari') ||
      (this.SearchInput1.toLowerCase() == 'kanniyakumari' &&
        this.SearchInput2.toLowerCase() == 'chennai') ||
      (this.SearchInput1.toLowerCase() == 'chennai' &&
        this.SearchInput2.toLowerCase() == 'namakkal') ||
      (this.SearchInput1.toLowerCase() == 'namakkal' &&
        this.SearchInput2.toLowerCase() == 'chennai') ||
      (this.SearchInput1.toLowerCase() == 'chennai' &&
        this.SearchInput2.toLowerCase() == 'perambalur') ||
      (this.SearchInput1.toLowerCase() == 'perambalur' &&
        this.SearchInput2.toLowerCase() == 'chennai') ||
      (this.SearchInput1.toLowerCase() == 'chennai' &&
        this.SearchInput2.toLowerCase() == 'salem') ||
      (this.SearchInput1.toLowerCase() == 'salem' &&
        this.SearchInput2.toLowerCase() == 'chennai') ||
      (this.SearchInput1.toLowerCase() == 'chennai' &&
        this.SearchInput2.toLowerCase() == 'tiruchirappalli') ||
      (this.SearchInput1.toLowerCase() == 'tiruchirappalli' &&
        this.SearchInput2.toLowerCase() == 'chennai')
    ) {
      this.routers.navigate(['/allche']);
    } else if (
      (this.SearchInput1.toLowerCase() == 'coimbatore' &&
        this.SearchInput2 == 'chennai') ||
      (this.SearchInput1.toLowerCase() == 'chennai' &&
        this.SearchInput2 == 'coimbatore') ||
      (this.SearchInput1.toLowerCase() == 'coimbatore' &&
        this.SearchInput2.toLowerCase() == 'erode') ||
      (this.SearchInput1.toLowerCase() == 'erode' &&
        this.SearchInput2.toLowerCase() == 'coimbatore') ||
      (this.SearchInput1.toLowerCase() == 'coimbatore' &&
        this.SearchInput2.toLowerCase() == 'tiruchirappalli') ||
      (this.SearchInput1.toLowerCase() == 'tiruchirappalli' &&
        this.SearchInput2.toLowerCase() == 'coimbatore') ||
      (this.SearchInput1.toLowerCase() == 'coimbatore' &&
        this.SearchInput2.toLowerCase() == 'thanjavur') ||
      (this.SearchInput1.toLowerCase() == 'thanjavur' &&
        this.SearchInput2.toLowerCase() == 'coimbatore')
    ) {
      this.routers.navigate(['/allcoim']);
    } else if (
      (this.SearchInput1.toLowerCase() == 'erode' &&
        this.SearchInput2 == 'chennai') ||
      (this.SearchInput1.toLowerCase() == 'chennai' &&
        this.SearchInput2 == 'erode') ||
      (this.SearchInput1.toLowerCase() == 'coimbatore' &&
        this.SearchInput2.toLowerCase() == 'erode') ||
      (this.SearchInput1.toLowerCase() == 'erode' &&
        this.SearchInput2.toLowerCase() == 'coimbatore') ||
      (this.SearchInput1.toLowerCase() == 'erode' &&
        this.SearchInput2.toLowerCase() == 'tiruchirappalli') ||
      (this.SearchInput1.toLowerCase() == 'tiruchirappalli' &&
        this.SearchInput2.toLowerCase() == 'erode') ||
      (this.SearchInput1.toLowerCase() == 'erode' &&
        this.SearchInput2.toLowerCase() == 'thanjavur') ||
      (this.SearchInput1.toLowerCase() == 'thanjavur' &&
        this.SearchInput2.toLowerCase() == 'erode')
    ) {
      this.routers.navigate(['/allero']);
    } else if (
      (this.SearchInput1.toLowerCase() == 'tiruchirappalli' &&
        this.SearchInput2 == 'chennai') ||
      (this.SearchInput1.toLowerCase() == 'chennai' &&
        this.SearchInput2 == 'tiruchirappalli') ||
      (this.SearchInput1.toLowerCase() == 'tiruchirappalli' &&
        this.SearchInput2.toLowerCase() == 'erode') ||
      (this.SearchInput1.toLowerCase() == 'erode' &&
        this.SearchInput2.toLowerCase() == 'tiruchirappalli') ||
      (this.SearchInput1.toLowerCase() == 'tiruchirappalli' &&
        this.SearchInput2.toLowerCase() == 'salem') ||
      (this.SearchInput1.toLowerCase() == 'salem' &&
        this.SearchInput2.toLowerCase() == 'tiruchirappalli') ||
      (this.SearchInput1.toLowerCase() == 'tiruchirappalli' &&
        this.SearchInput2.toLowerCase() == 'thanjavur') ||
      (this.SearchInput1.toLowerCase() == 'thanjavur' &&
        this.SearchInput2.toLowerCase() == 'tiruchirappalli')
    ) {
      this.routers.navigate(['/alltri']);
    } else if (
      (this.SearchInput1.toLowerCase() == 'namakkal' &&
        this.SearchInput2.toLowerCase() == 'perambalur') ||
      (this.SearchInput1.toLowerCase() == 'perambalur' &&
        this.SearchInput2.toLowerCase() == 'namakkal')
    ) {
      this.routers.navigate(['/namtop']);
    } else if (
      (this.SearchInput1.toLowerCase() == 'madurai' &&
        this.SearchInput2.toLowerCase() == 'chennai') ||
      (this.SearchInput1.toLowerCase() == 'chennai' &&
        this.SearchInput2.toLowerCase() == 'madurai') ||
      (this.SearchInput1.toLowerCase() == 'perambalur' &&
        this.SearchInput2.toLowerCase() == 'madurai') ||
      (this.SearchInput1.toLowerCase() == 'madurai' &&
        this.SearchInput2.toLowerCase() == 'perambalur') ||
      (this.SearchInput1.toLowerCase() == 'madurai' &&
        this.SearchInput2.toLowerCase() == 'tiruchirappalli') ||
      (this.SearchInput1.toLowerCase() == 'tiruchirappalli' &&
        this.SearchInput2.toLowerCase() == 'madurai')
    ) {
      this.routers.navigate(['/madurai']);
    } else if (
      (this.SearchInput1.toLowerCase() == 'banglore' &&
        this.SearchInput2.toLowerCase() == 'chennai') ||
      (this.SearchInput1.toLowerCase() == 'chennai' &&
        this.SearchInput2.toLowerCase() == 'banglore') ||
      (this.SearchInput1.toLowerCase() == 'perambalur' &&
        this.SearchInput2.toLowerCase() == 'banglore') ||
      (this.SearchInput1.toLowerCase() == 'banglore' &&
        this.SearchInput2.toLowerCase() == 'perambalur') ||
      (this.SearchInput1.toLowerCase() == 'banglore' &&
        this.SearchInput2.toLowerCase() == 'tiruchirappalli') ||
      (this.SearchInput1.toLowerCase() == 'tiruchirappalli' &&
        this.SearchInput2.toLowerCase() == 'banglore') ||
      (this.SearchInput1.toLowerCase() == 'banglore' &&
        this.SearchInput2.toLowerCase() == 'madurai') ||
      (this.SearchInput1.toLowerCase() == 'madurai' &&
        this.SearchInput2.toLowerCase() == 'banglore')
    ) {
      this.routers.navigate(['/bmtc']);
    } else if (
      (this.SearchInput1.toLowerCase() == 'chennai' &&
        this.SearchInput2.toLocaleLowerCase() == 'mysore') ||
      (this.SearchInput1.toLowerCase() == 'mysore' &&
        this.SearchInput2.toLowerCase() == 'chennai')
    ) {
      this.routers.navigate(['/mysore']);
    } else if (
      (this.SearchInput1.toLowerCase() == 'ariyalur' &&
        this.SearchInput2.toLowerCase() == 'jayankondam') ||
      (this.SearchInput1.toLowerCase() == 'jayankondam' &&
        this.SearchInput2 == 'ariyalur')
    ) {
      this.routers.navigate(['/jayankondam']);
    } else if (this.SearchInput1 === '' && this.SearchInput2 === '') {
      alert('select your journey');
    } else {
      this.routers.navigate(['/noservice']);
    }
  }
}
