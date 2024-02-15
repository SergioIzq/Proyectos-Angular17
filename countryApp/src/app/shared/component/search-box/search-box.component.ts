import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [],
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent {
  @Input() placeholder: string = "";
}
