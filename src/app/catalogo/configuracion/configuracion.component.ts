import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent implements OnInit {
  formGroupDatosEspecialista!: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // this.formGroupDatosEspecialista = this._formBuilder.group({
    //   nombre: ['', Validators.compose([])],
    //   especialidad: ['', Validators.compose([])],
    //   descripcion: ['', Validators.compose([])],
    //   email: ['', Validators.compose([Validators.email])],
    // });
  }

  public errorHandling = (control: string, error: string) => {
    return this.formGroupDatosEspecialista.controls[control].hasError(error);
  }

}
