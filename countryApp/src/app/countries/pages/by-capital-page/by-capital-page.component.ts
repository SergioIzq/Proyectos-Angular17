import { Component } from '@angular/core';
import { SearchBoxComponent } from '../../../shared/component/search-box/search-box.component';

@Component({
  selector: 'app-by-capital-page',
  standalone: true,
  imports: [SearchBoxComponent],
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {
  placeholderText:string ="Prueba";
}
