import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table'
import { Horario } from '../models/agendar-cita.model';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EspecialistaModel } from '../models/especialistas.model';
import { CitasService } from '../services/citas.service';
import { CitasModel } from '../models/citas.model';
import { of } from 'rxjs';
@Component({
  selector: 'app-agendar-cita',
  templateUrl: './agendar-cita.component.html',
  styleUrls: ['./agendar-cita.component.css']
})
export class AgendarCitaComponent implements OnInit, AfterViewInit {
  @Input() dataEspecialista!: EspecialistaModel;

  selectedDate: Date | undefined = new Date;
  horariosSeleccionados: Horario[] = [];
  todayDate: Date = new Date();
  showHorarios: Horario[] = [];
  currentDate = new Date();
  currentDateString = this.currentDate.getHours() + ':' + this.currentDate.getMinutes();
  citas: CitasModel = {
    doctor: '',
    especialidad: '',
    fecha: new Date(),
    hora: undefined,
    confirmarAsistencia: false
  };
  hide: boolean = false;
  horarios: Horario[] = [
    { hora: '08:00' },
    { hora: '09:00' },
    { hora: '10:00' },
    { hora: '11:00' },
    { hora: '12:00' },
    { hora: '13:00' },
    { hora: '14:00' },
    { hora: '15:00' },
    { hora: '16:00' },
    { hora: '17:00' },
    { hora: '18:00' },
    { hora: '19:00' },
    { hora: '20:00' },
  ];

  constructor(private _router: Router, private _snackBar: MatSnackBar, private _citasService: CitasService) { }
  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
    if (this.currentDate.toDateString() == this.selectedDate?.toDateString()) {
      this.showHorarios = this.horarios.filter(x => x.hora > this.currentDateString);
    }
  }

  displayedColumns: string[] = ['select', 'hora'];
  dataSource = new MatTableDataSource<Horario>(this.showHorarios);
  selection = new SelectionModel<Horario>(true, []);

  returnDashboard() {
    this._router.navigate(['dashboard']);
  }

  addData(row: Horario, selected?: MatCheckbox) {
    if (selected === undefined) {
      return;
    }

    if (!selected.checked)
      this.horariosSeleccionados.push(row);
    else {
      let indexHour = this.horariosSeleccionados.indexOf(row);
      if (indexHour !== -1) {
        this.horariosSeleccionados.splice(indexHour, 1);
      }
    }
  }

  openSnackBar(msg: string) {
    this._snackBar.open(msg, undefined, {
      duration: 5000,
      panelClass: ['blue-snackbar']
    });
  }

  addAllData(data: MatCheckbox) {
    if (!data.checked)
      this.horariosSeleccionados = this.showHorarios;
    else
      this.horariosSeleccionados = [];
  }

  agendarCita() {
    if (this.horariosSeleccionados.length === 0) {
      this.openSnackBar("No se ha seleccionado un horario para agendar la cita.");
      return;
    }

    if (this.selectedDate == undefined) {
      this.openSnackBar("No se ha seleccionado una fecha para agendar la cita");
      return;
    }

    this.citas.doctor = this.dataEspecialista.nombre;
    this.citas.especialidad = this.dataEspecialista.especilidad;
    this.citas.fecha = this.selectedDate;

    this._citasService.postAgendarCita(this.citas, this.horariosSeleccionados);
    this.horariosSeleccionados.forEach((element) => {
      let index = this.showHorarios.indexOf(element);
      if(index !== -1){
        this.showHorarios.splice(index, 1);
        this.showHorarios = [...this.showHorarios];
      }
    });

    this.openSnackBar("Su cita se ha agendado con éxito.");
    this.horariosSeleccionados = [];
  }

  validateDates() {
    if (this.currentDate.toDateString() == this.selectedDate?.toDateString()) {
      this.showHorarios = this.horarios.filter(x => x.hora > this.currentDateString);
    } else {
      this.showHorarios = this.horarios;
    }
  }
}
