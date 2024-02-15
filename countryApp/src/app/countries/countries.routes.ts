import { Routes } from "@angular/router";
import { ByCountryPageComponent } from "./pages/by-country-page/by-country-page.component";
import { ByCapitalPageComponent } from "./pages/by-capital-page/by-capital-page.component";
import { CountryPageComponent } from "./pages/country-page/country-page.component";


export const routesCountries: Routes = [
  { path: 'by-capital', component: ByCapitalPageComponent },
  { path: 'by-country', component: ByCountryPageComponent },
  { path: 'country', component: CountryPageComponent }
]

