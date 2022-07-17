import { Component, OnInit } from '@angular/core';
import { CountryResponse } from '../../interfaces/pais.model';
import { PaisService } from '../../services/pais.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {

  termino: string = '';
  error: boolean = false;
  codError: string = '';

  paises: CountryResponse[] =  []

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(): void {
    this.paisService.getPorCapital(this.termino)
    .subscribe({
      next: (res: CountryResponse[]) => this.handleResponse(res),
      error: (err: HttpErrorResponse) => this.handleHttpError(err)
    })
  }


  onQueryRecieved(event: string): void {
    console.log(event);
    this.termino = event;
    this.buscar();
  }
  
  sugerencias(event: any): void {

  }

  handleResponse(response: CountryResponse[]): void {
    this.paises = response;
    this.codError = '';
    this.error = false;
    this.termino = '';
  }

  handleHttpError(err: HttpErrorResponse): void {
    this.error = true;
    this.codError = err.status.toString();
  }
}
