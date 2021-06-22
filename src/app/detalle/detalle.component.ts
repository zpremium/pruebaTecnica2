import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ApiService } from '../service/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css'],
})
export class DetalleComponent implements OnInit {

  starship:any;

  constructor(
    private _location: Location,
    private apiService: ApiService,
    private route:ActivatedRoute,

  ) {
  }

  ngOnInit(): void {
    this.getStarshipDetails();
  }

  getStarshipDetails(){
    const name = String(this.route.snapshot.paramMap.get('id'));

    this.starship = this.apiService.getStarshipByName(name);
    console.log(this.starship);

  }

  goBack() {
    this._location.back();
    this.apiService.pages= 0;
  }
}
