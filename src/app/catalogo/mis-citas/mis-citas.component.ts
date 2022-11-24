import { Component, EventEmitter, OnInit, Output, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CitasModel } from '../../models/citas.model';
import { CitasService } from '../../services/citas.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../dialog/dialog.component';

//cambiar idioma del paginador
const dutchRangeLabel = (page: number, pageSize: number, length: number) => {
  if (length == 0 || pageSize == 0) {
    return `0 de ${length}`;
  }

  length = Math.max(length, 0);

  const startIndex = page * pageSize;

  // If the start index exceeds the list length, do not try and fix the end index to the end.
  const endIndex =
    startIndex < length
      ? Math.min(startIndex + pageSize, length)
      : startIndex + pageSize;

  return `${startIndex + 1} - ${endIndex} de ${length}`;
};

@Component({
  selector: 'app-mis-citas',
  templateUrl: './mis-citas.component.html',
  styleUrls: ['./mis-citas.component.css']
})
export class MisCitasComponent extends MatPaginatorIntl implements OnInit, AfterViewInit {
  @Output() visibleMenu = new EventEmitter<boolean>();
  displayedColumns: string[] = ['nombre', 'especialidad', 'fecha', 'hora', 'confirmar', 'status']
  dataSource: CitasModel[] = [];
  hide: boolean = false;
  dataSourceCitas!: MatTableDataSource<CitasModel>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private _misCitas: CitasService, private _snackBar: MatSnackBar, public dialog: MatDialog) {
    super();
    //Traducción de las etiquetas del paginator
    this.nextPageLabel = 'Siguiente página';
    this.previousPageLabel = 'Página anterior';
    this.itemsPerPageLabel = 'Registros por pagina';
    this.firstPageLabel = 'Primera página';
    this.lastPageLabel = 'Última página';
    this.getRangeLabel = (page: number, pageSize: number, length: number) => {
      if (length === 0 || pageSize === 0) {
        return '0 de ' + length;
      }

      length = Math.max(length, 0);
      const startIndex = page * pageSize;
      const endIndex = startIndex < length ?
        Math.min(startIndex + pageSize, length) :
        startIndex + pageSize;
      return startIndex + 1 + ' - ' + endIndex + ' de ' + length;
    };
  }

  ngAfterViewInit(): void {
    this.dataSourceCitas.paginator = this.paginator;
    this.dataSourceCitas.sort = this.sort;
  }

  ngOnInit(): void {
    this.dataSource = this._misCitas.getCitasList();
    this.dataSourceCitas = new MatTableDataSource(this.dataSource);
  }

  setEstatus(data: CitasModel) {
    if (!data.confirmarAsistencia) {
      data.confirmarAsistencia = true;
      this.openSnackBar("Su cita con fecha " + (data.fecha?.getDay() + "/" + data.fecha?.getMonth() + "/" + data.fecha?.getFullYear()) + " a las " + data.hora?.hora + " horas ha sido confirmada. Será notificado a su doctor.");
    } else {
      this.openDialog(data);
    }
  }

  openSnackBar(msg: string) {
    this._snackBar.open(msg, undefined, {
      duration: 5000,
      panelClass: ['blue-snackbar']
    });
  }

  openDialog(data: CitasModel): void {
    let dialog = this.dialog.open(DialogComponent, {
      width: '500px',
    });

    dialog.afterClosed().subscribe(x => {
      if (x) {
        this.openSnackBar("Su cita con fecha " + (data.fecha?.getDay() + "/" + data.fecha?.getMonth() + "/" + data.fecha?.getFullYear()) + " a las " + data.hora?.hora + " horas ha sido cancelada. Será notificado a su doctor");
        data.confirmarAsistencia = false;

      }
    })

  }
}
