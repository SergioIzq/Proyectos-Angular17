import { Component } from '@angular/core';
import { SearchBoxComponent } from '../../../shared/component/search-box/search-box.component';
import { CountryService } from '../../services/country.service';
import { CommonModule } from '@angular/common';
import { CountryTableComponent } from '../../components/country-table/country-table.component';

@Component({
  selector: 'app-by-country-page',
  standalone: true,
  imports: [SearchBoxComponent, CommonModule, CountryTableComponent],
  templateUrl: './by-country-page.component.html',
  styles: `.search-container {
    margin-bottom: 20px;
}`
})
export class ByCountryPageComponent {
  placeholderText: string = "País";
  countries: any[] = [];
  constructor(private countryService: CountryService) { }

  procesaEmisor(capital: string) {
    this.countryService.getByCountry(capital).subscribe(
      (data) => {
        this.countries = data;
        console.log(this.countries)
      },
      (error) => {
        console.error('Error al obtener los datos de la capital:', error);
      }
    );
  }
}
