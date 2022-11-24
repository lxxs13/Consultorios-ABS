import { Horario } from './agendar-cita.model';
export interface CitasModel{
    doctor: string;
    especialidad: string;
    fecha: Date | undefined;
    hora: Horario | undefined;
    confirmarAsistencia: boolean;
}