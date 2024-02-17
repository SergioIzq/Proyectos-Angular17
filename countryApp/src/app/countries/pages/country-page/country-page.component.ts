import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-country-page',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './country-page.component.html',
  styles: `.list-group-item{
    width:200px
  }`
})
export class CountryPageComponent {
  country: any;

  constructor(private rutaActiva: ActivatedRoute, private countryService: CountryService) { }

  ngOnInit(): void {
    this.countryService.searchCountryByAlphaCode(this.rutaActiva.snapshot.params['id']).subscribe(
      (data) => {
        if (data) {
          this.country = data;
        } else {
          console.error('No se encontraron datos del país');
        }
      },
      (error) => {
        console.error('Error al obtener los datos del país:', error);
      }
    );
  }


  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }
}
