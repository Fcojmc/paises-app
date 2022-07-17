import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { CountryResponse } from '../../interfaces/pais.model';
import { HttpErrorResponse } from '@angular/common/http';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-detalle-pais',
  templateUrl: './detalle-pais.component.html',
  styleUrls: ['./detalle-pais.component.css']
})
export class DetallePaisComponent implements OnInit {

  pais!: CountryResponse;

  constructor(private activatedRoute: ActivatedRoute,
              private paisService: PaisService) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.paisService.getByPorCodigo(id) ),
        tap(console.log)
      )
      .subscribe( (res: CountryResponse) => this.pais = res);
  }

}
