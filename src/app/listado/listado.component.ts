import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';
import { Starship } from '../starship';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent implements OnInit {
  title: string;
  starships: any; //resultado de la api
  starship: Starship; // No hace falta llamar a la clase Starship solo si te sabes que datos existen dentro de la API y que datos necesitas, pero como yo no me voy a acordar de los datos que existen dentro de esta API llamo a la clase y digo que existen estos datos y que puedo utilizarlos.

  constructor(private router: Router, private apiService: ApiService) {
    this.title = 'STASHIPS';
    this.starship = new Starship('', '', '', '', '', '', '', '');
    //cada string vacio es una interface de starship.ts
  }

  ngOnInit() {
    this.getData();
  }

  goDetail() {
    this.router.navigateByUrl('/detalle');
  }

  getData() {
    this.apiService.getStarships().subscribe(
      (response) => {
        let res: any;
        res = response; // Recolecta la respuesta de la API en la variable 'res'
        this.starships = res.results; //Accede al array 'results' que esta dentro de 'res' y lo guarda en starships
        this.apiService.naves = res.results; //estoy guardando el array del servicio naves, lo guardo del resultado del api
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getData2(){
    this.apiService.getStarships2().subscribe(
      (response) => {
        let res: any;
        res = response; // Recolecta la respuesta de la API en la variable 'res'
        this.starships = res.results; //Accede al array 'results' que esta dentro de 'res' y lo guarda en starships
        this.apiService.naves = res.results; //estoy guardando el array del servicio naves, lo guardo del resultado del api
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getData3(){
    this.apiService.getStarships3().subscribe(
      (response) => {
        let res: any;
        res = response; // Recolecta la respuesta de la API en la variable 'res'
        this.starships = res.results; //Accede al array 'results' que esta dentro de 'res' y lo guarda en starships
        this.apiService.naves = res.results; //estoy guardando el array del servicio naves, lo guardo del resultado del api
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getData4(){
    this.apiService.getStarships4().subscribe(
      (response) => {
        let res: any;
        res = response; // Recolecta la respuesta de la API en la variable 'res'
        this.starships = res.results; //Accede al array 'results' que esta dentro de 'res' y lo guarda en starships
        this.apiService.naves = res.results; //estoy guardando el array del servicio naves, lo guardo del resultado del api
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
