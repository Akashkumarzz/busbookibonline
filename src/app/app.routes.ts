import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListService } from './list.service';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((x) => x.HomeComponent),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((x) => x.HomeComponent),
  },
  {
    path: 'alrtoche',
    loadComponent: () =>
      import('./alrtoche/alrtoche.component').then((x) => x.AlrtocheComponent),
  },
  {
    path: 'chetoalr',
    loadComponent: () =>
      import('./chetoalr/chetoalr.component').then((x) => x.ChetoalrComponent),
  },
  {
    path: 'seat',
    loadComponent: () =>
      import('./seat/seat.component').then((x) => x.SeatComponent),
  },
  {
    path: 'alrtocom',
    loadComponent: () =>
      import('./alrtocom/alrtocom.component').then((x) => x.AlrtocomComponent),
  },
  {
    path: 'comtoalr',
    loadComponent: () =>
      import('./comtoalr/comtoalr.component').then((x) => x.ComtoalrComponent),
  },
  {
    path: 'alrtoero',
    loadComponent: () =>
      import('./alrtoero/alrtoero.component').then((x) => x.AlrtoeroComponent),
  },
  {
    path: 'erotoalr',
    loadComponent: () =>
      import('./erotoalr/erotoalr.component').then((x) => x.ErotoalrComponent),
  },
  {
    path: 'alrtokan',
    loadComponent: () =>
      import('./alrtokan/alrtokan.component').then((x) => x.AlrtokanComponent),
  },
  {
    path: 'kantoalr',
    loadComponent: () =>
      import('./kantoalr/kantoalr.component').then((x) => x.KantoalrComponent),
  },
  {
    path: 'alrtonam',
    loadComponent: () =>
      import('./alrtonam/alrtonam.component').then((x) => x.AlrtonamComponent),
  },
  {
    path: 'namtoalr',
    loadComponent: () =>
      import('./namtoalr/namtoalr.component').then((x) => x.NamtoalrComponent),
  },
  {
    path: 'alrtoper',
    loadComponent: () =>
      import('./alrtoper/alrtoper.component').then((x) => x.AlrtoperComponent),
  },
  {
    path: 'pertoalr',
    loadComponent: () =>
      import('./pertoalr/pertoalr.component').then((x) => x.PertoalrComponent),
  },
  {
    path: 'alrtosal',
    loadComponent: () =>
      import('./alrtosal/alrtosal.component').then((x) => x.AlrtosalComponent),
  },
  {
    path: 'saltoalr',
    loadComponent: () =>
      import('./saltoalr/saltoalr.component').then((x) => x.SaltoalrComponent),
  },
  {
    path: 'alrtotanj',
    loadComponent: () =>
      import('./alrtotanj/alrtotanj.component').then(
        (x) => x.AlrtotanjComponent
      ),
  },
  {
    path: 'tanjtoalr',
    loadComponent: () =>
      import('./tanjtoalr/tanjtoalr.component').then(
        (x) => x.TanjtoalrComponent
      ),
  },
  {
    path: 'alrtotri',
    loadComponent: () =>
      import('./alrtotri/alrtotri.component').then((x) => x.AlrtotriComponent),
  },
  {
    path: 'tritoalr',
    loadComponent: () =>
      import('./tritoalr/tritoalr.component').then((x) => x.TritoalrComponent),
  },
  {
    path: 'chetocoim',
    loadComponent: () =>
      import('./chetocoim/chetocoim.component').then(
        (x) => x.ChetocoimComponent
      ),
  },
  {
    path: 'chetoero',
    loadComponent: () =>
      import('./chetoero/chetoero.component').then((x) => x.ChetoeroComponent),
  },
  {
    path: 'allche',
    loadComponent: () =>
      import('./allche/allche.component').then((x) => x.AllcheComponent),
  },
  {
    path: 'allcoim',
    loadComponent: () =>
      import('./allcoim/allcoim.component').then((x) => x.AllcoimComponent),
  },
  {
    path: 'allero',
    loadComponent: () =>
      import('./allero/allero.component').then((x) => x.AlleroComponent),
  },
  {
    path: 'alltri',
    loadComponent: () =>
      import('./alltri/alltri.component').then((x) => x.AlltriComponent),
  },
  {
    path: 'namtop',
    loadComponent: () =>
      import('./namtop/namtop.component').then((x) => x.NamtopComponent),
  },
  {
    path: 'madurai',
    loadComponent: () =>
      import('./madurai/madurai.component').then((x) => x.MaduraiComponent),
  },
  {
    path: 'bmtc',
    loadComponent: () =>
      import('./bmtc/bmtc.component').then((x) => x.BmtcComponent),
  },
  {
    path: 'noservice',
    loadComponent: () =>
      import('./noservice/noservice.component').then((x) => x.NoserviceComponent),
  },
  {
    path: 'mysore',
    loadComponent: () =>
      import('./chetomy/chetomy.component').then((x) => x.ChetomyComponent),
  },
  {
    path: 'jayankondam',
    loadComponent: () =>
      import('./alrtojay/alrtojay.component').then((x) => x.AlrtojayComponent),
  },
  {
    path: 'account',
    loadComponent: () =>
      import('./account/account.component').then((x) => x.AccountComponent),
  },
  {
    path:'booking',
    loadComponent:()=>
      import('./booking/booking.component').then((x)=>x.BookingComponent)
  },
  {
    path:'helps',
    loadComponent:()=>
      import('./helps/helps.component').then((x)=>x.HelpsComponent)
  },
  {
    path:'footer',
    loadComponent:()=>
      import('./footer/footer.component').then((x)=>x.FooterComponent)
  }
];
