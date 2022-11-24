import { Injectable } from "@angular/core";
import { CitasModel } from '../models/citas.model';
import { Horario } from '../models/agendar-cita.model';

@Injectable({
    providedIn: 'root'
})
export class CitasService {
    misCitas: CitasModel = {
        doctor: "",
        especialidad: "",
        fecha: undefined,
        hora: undefined,
        confirmarAsistencia: false
    };
    misCitasList: CitasModel[] = [];

    constructor() {

    }

    getCitasList() {
        return this.misCitasList;
    }

    postAgendarCita(cita: CitasModel, horasList: Horario[]) {
        if (cita == undefined)
            return;

        if (horasList == undefined)
            return;

        horasList.forEach(x => {
            this.misCitas = {
                doctor: "",
                especialidad: "",
                fecha: undefined,
                hora: undefined,
                confirmarAsistencia: false
            }
            
            this.misCitas.doctor = cita.doctor;
            this.misCitas.especialidad = cita.especialidad;
            this.misCitas.fecha = cita.fecha;
            this.misCitas.hora = x;

            this.misCitasList.push(this.misCitas);
        });

    }
}