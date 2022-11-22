import { Component, EventEmitter, OnInit, Output, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CitasModel } from '../../models/citas.model';
import { CitasService } from '../../services/citas.service';

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
  displayedColumns: string[] = ['nombre', 'especialidad', 'fecha', 'hora']
  dataSource: CitasModel[] = [];
  hide: boolean = false;
  dataSourceCitas!: MatTableDataSource<CitasModel>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private _misCitas: CitasService) {
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
}
