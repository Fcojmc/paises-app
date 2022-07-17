import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-paises-input',
  templateUrl: './paises-input.component.html',
  styleUrls: ['./paises-input.component.css']
})
export class PaisesInputComponent implements OnInit {

  termino: string = '';

  @Output() queryEmitter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();

  constructor() { }

  ngOnInit(): void {
    this.debouncer.pipe(
      debounceTime(300)
    ).subscribe( (value: string) => {
      this.onDebounce.emit(value);
    });
  }

  buscar(): void {
    this.queryEmitter.emit(this.termino);
  }

  pressedKey(): void {
    this.debouncer.next( this.termino );
  }
}
