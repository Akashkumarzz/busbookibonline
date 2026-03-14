import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-helps',
  imports: [FooterComponent,RouterLink],
  templateUrl: './helps.component.html',
  styleUrl: './helps.component.css'
})
export class HelpsComponent {

}
