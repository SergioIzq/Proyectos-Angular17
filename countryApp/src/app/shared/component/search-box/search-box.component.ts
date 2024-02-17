import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [],
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent {
  @Input() placeholder: string = "";
  input: string = "";
  @Output() propagar = new EventEmitter<string>();

  OnPropagate($event: any) {
    const inputValue = $event.target.value;
    this.propagar.emit(inputValue);
  }
}
