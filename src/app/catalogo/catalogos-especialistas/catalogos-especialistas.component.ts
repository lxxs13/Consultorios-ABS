import { Component, OnInit } from '@angular/core';
import { EspecialistaModel } from 'src/app/models/especialistas.model';

@Component({
  selector: 'app-catalogos-especialistas',
  templateUrl: './catalogos-especialistas.component.html',
  styleUrls: ['./catalogos-especialistas.component.css']
})
export class CatalogosEspecialistasComponent implements OnInit {
  visible: boolean = true;
  hideMenu: boolean = true;
  dataToSend!: EspecialistaModel;
  especialistas: EspecialistaModel[] = [
    {
      id: 1,
      especilidad: "Médico general",
      nombre: "Dr. Antonio Méndez Noble",
      costoConsulta: 200,
    },
    {
      id: 2,
      especilidad: "Psicología",
      nombre: "Dr. Darío Esaú Garín Zertuche",
      costoConsulta: 300,
    },
    {
      id: 3,
      especilidad: "Nutriólogo",
      nombre: "Dr. Abel de la Peña Salcedo",
      costoConsulta: 500,
    },
    {
      id: 4,
      especilidad: "Dentista",
      nombre: "Dr. Alejandro Lichtinger Dondish",
      costoConsulta: 250,
    },
    {
      id: 5,
      especilidad: "Médico general",
      nombre: "Dr. Alejandro Rossano García",
      costoConsulta: 200,
    },
    {
      id: 6,
      especilidad: "Dentista",
      nombre: "Dra. Alfonsina Ávila Romay",
      costoConsulta: 300,
    },
    {
      id: 7,
      especilidad: "Médico general",
      nombre: "Dr. Andrés Palomar Lever",
      costoConsulta: 250,
    },
    {
      id: 8,
      especilidad: "Psicología",
      nombre: "Dr. Antonio Rizzoli Córdoba",
      costoConsulta: 350,
    },
    {
      id: 9,
      especilidad: "Dentista",
      nombre: "Dr. Carlos Chan Núñez",
      costoConsulta: 200,
    },
    {
      id: 10,
      especilidad: "Médico general",
      nombre: "Dr. Carlos Vásquez Lastra",
      costoConsulta: 300,
    },
    {
      id: 11,
      especilidad: "Dentista",
      nombre: "Dr. César Decanini Terán",
      costoConsulta: 320,
    },
    {
      id: 12,
      especilidad: "Médico general",
      nombre: "Dr. Enrique Rodriguez Patiño",
      costoConsulta: 150,
    },
    {
      id: 13,
      especilidad: "Psicología",
      nombre: "Dr. Federico Graue Wiechers",
      costoConsulta: 500,
    },
    {
      id: 14,
      especilidad: "Dermatología",
      nombre: "Dr. Gerardo Castorena Rojí",
      costoConsulta: 250,
    },
    {
      id: 15,
      especilidad: "Dermatología",
      nombre: "Dra. Susana Mercedes Canalizo",
      costoConsulta: 400,
    }
  ];

  especialistasTemp: EspecialistaModel[] = []
  constructor() { }
  
  ngOnInit(): void {
    this.especialistasTemp = this.especialistas;
  }

  applyFilter(value: string) {
    this.especialistasTemp = this.especialistas.filter(x => x.nombre.toLowerCase().includes(value.toLowerCase()) || x.especilidad.toLowerCase().includes(value.toLowerCase()))
  }

  onAgendarCita(especialistaID: number){
    this.visible = !this.visible;
    
    let especialista = this.especialistas.find(x => x.id === especialistaID);
    if(especialista !== undefined){
      this.dataToSend = especialista;
    }

  }

}
