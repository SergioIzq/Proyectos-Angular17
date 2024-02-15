import { Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';

export const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'contact', component: ContactPageComponent },

  {
    path: 'capital',
    loadChildren: () => import('./countries/countries.routes').then((m) => m.routesCountries),
  },
  {
    path: 'countries',
    loadChildren: () => import('./countries/countries.routes').then((m) => m.routesCountries),
  },

  {
    path: 'by-country-Page',
    loadChildren: () => import('./countries/countries.routes').then((m) => m.routesCountries),
  },
  {
    path: 'region',
    loadChildren: () => import('./countries/countries.routes').then((m) => m.routesCountries),
  },
];

