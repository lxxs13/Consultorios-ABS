import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { EspecialistaModel } from 'src/app/models/especialistas.model';

@Component({
  selector: 'app-catalogos-especialistas',
  templateUrl: './catalogos-especialistas.component.html',
  styleUrls: ['./catalogos-especialistas.component.css']
})
export class CatalogosEspecialistasComponent implements OnInit {

  especialistas: EspecialistaModel[] = [
    {
      id: 1,
      especilidad: "Médico general",
      nombre: "Doc. Juan Arturo",
      costoConsulta: 200,
    },
    {
      id: 2,
      especilidad: "Psicología",
      nombre: "Doc. Juan Arturo",
      costoConsulta: 200,
    },
    {
      id: 3,
      especilidad: "Nutriólogo",
      nombre: "Doc. Juan Arturo",
      costoConsulta: 200,
    },
    {
      id: 4,
      especilidad: "Dentista",
      nombre: "Doc. Juan Arturo",
      costoConsulta: 200,
    },
    {
      id: 5,
      especilidad: "Médico general",
      nombre: "Doc. Juan Arturo",
      costoConsulta: 200,
    },
    {
      id: 6,
      especilidad: "Dentista",
      nombre: "Doc. Juan Arturo",
      costoConsulta: 200,
    },
    {
      id: 7,
      especilidad: "Médico general",
      nombre: "Doc. Juan Arturo",
      costoConsulta: 200,
    },
    {
      id: 8,
      especilidad: "Psicología",
      nombre: "Doc. Juan Arturo",
      costoConsulta: 200,
    },
    {
      id: 9,
      especilidad: "Dentista",
      nombre: "Doc. Juan Arturo",
      costoConsulta: 200,
    },
    {
      id: 10,
      especilidad: "Médico general",
      nombre: "Doc. Juan Arturo",
      costoConsulta: 200,
    },
    {
      id: 11,
      especilidad: "Dentista",
      nombre: "Doc. Juan Arturo",
      costoConsulta: 200,
    },
    {
      id: 12,
      especilidad: "Médico general",
      nombre: "Doc. Juan Arturo",
      costoConsulta: 200,
    },
    {
      id: 13,
      especilidad: "Psicología",
      nombre: "Doc. Juan Arturo",
      costoConsulta: 200,
    }
  ];
  
  constructor(private _router: Router) { }

  onAgendarCita(especialistaID: number){
    this._router.navigate(['agendarCita/' + especialistaID]);
  }

  ngOnInit(): void {
  }

}
