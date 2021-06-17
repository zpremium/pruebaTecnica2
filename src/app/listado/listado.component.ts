import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Starship } from '../starship';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent implements OnInit {
   title: string;
   starships: any;
   starship: Starship; // Usa el modelo 'starship' para usar sus atributos en mi componente


  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private apiService: ApiService
  ) {
    this.title = 'STASHIPS';
    this.starship = new Starship('', '', '', '', '', '');
    //cada string vacio es una interface de starship.ts
  }

  ngOnInit() {
    this.apiService.getStarships().subscribe(
      response => {
        let res: any;
        res = response; // Recolecta la respuesta de la API en la variable 'res'
        this.starships = res.results; //Accede al array 'results' que esta dentro de 'res' y lo guarda en starships
      },
      error => {
        console.log(error);
      }
    );
  }

  goDetail() {
    this.router.navigateByUrl('/detalle');
  }
}
