import { Component } from '@angular/core';
import { SearchBoxComponent } from '../../../shared/component/search-box/search-box.component';
import { CountryService } from '../../services/country.service';
import { CommonModule } from '@angular/common';
import { CountryTableComponent } from '../../components/country-table/country-table.component';

@Component({
  selector: 'app-by-region-page',
  standalone: true,
  imports: [SearchBoxComponent, CommonModule, CountryTableComponent],
  templateUrl: './by-region-page.component.html',
  styles: `.search-container {
    margin-bottom: 20px;}`
})
export class ByRegionPageComponent {
  placeholderText:string ="Region";
  countries:any[] = [];
  constructor(private countryService : CountryService) {}

  procesaEmisor(region: string) {
    this.countryService.getByRegion(region).subscribe(
      (data) => {
        this.countries = data;
      },
      (error) => {
        console.error('Error al obtener los datos de la región:', error);
      }
    );
  }
}
