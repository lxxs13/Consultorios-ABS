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
        confirmarAsistencia: undefined
    };
    misCitasList: CitasModel[] = [];

    constructor() {

    }

    getCitasList() {
        debugger
        return this.misCitasList;
    }

    postAgendarCita(cita: CitasModel, horasList: Horario[]) {
        debugger
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
                confirmarAsistencia: undefined
            }
            
            this.misCitas.doctor = cita.doctor;
            this.misCitas.especialidad = cita.especialidad;
            this.misCitas.fecha = cita.fecha;
            this.misCitas.hora = x;

            this.misCitasList.push(this.misCitas);
        });

    }
}