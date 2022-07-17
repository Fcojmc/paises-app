import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { CountryResponse } from '../../interfaces/pais.model';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  termino: string = '';
  error: boolean = false;
  codError: string = '';

  paises: CountryResponse[] =  []

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(): void {

    this.paisService.getPais(this.termino)
    .subscribe({
      next: (res: CountryResponse[]) => this.handleGetPaisResponse(res),
      error: (err: HttpErrorResponse) => this.handleErrorResponse(err)
    });

  }


  handleGetPaisResponse(res: CountryResponse[]): void {
    this.error = false;
    this.codError = '';
    console.log(res);
    this.paises = res;
    this.termino = '';
  }

  handleErrorResponse(error: HttpErrorResponse): void {
    this.error = true;
    this.codError = error.status.toString();
    this.paises = [];
  }
}