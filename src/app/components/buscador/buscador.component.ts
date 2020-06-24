import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.search.valueChanges.pipe(
      debounceTime(350)
    ).subscribe(data => this.searchEmiiter.emit(data))
  }


  search = new FormControl('')
  @Output('search') searchEmiiter = new EventEmitter<string>();
}
