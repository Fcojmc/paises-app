import { Component, Input, OnInit } from '@angular/core';
import { CountryResponse } from '../../interfaces/pais.model';

@Component({
  selector: 'app-paises-list',
  templateUrl: './paises-list.component.html',
  styleUrls: ['./paises-list.component.css']
})
export class PaisesListComponent implements OnInit {

  @Input() paises: CountryResponse[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
