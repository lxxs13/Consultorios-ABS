import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {
  hide = true;
  formGroupSignup: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    birthdate: new FormControl(''),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
  });

  constructor(private _auth: AuthService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  public errorHandling = (control: string, error: string) => {
    return this.formGroupSignup.controls[control].hasError(error);
  }

  openSnackBar(msg: string) {
    this._snackBar.open(msg, undefined, {
      duration: 5000,
      panelClass: ['blue-snackbar']
    });
  }

  onEnter() {
    if (!this.formGroupSignup.valid) {
      this.formGroupSignup.markAllAsTouched();
      return;
    }

    if(this.formGroupSignup.controls['password'].value !== this.formGroupSignup.controls['confirmPassword'].value ){
      this.openSnackBar("Las contraseñas no coinciden.");
      return;
    }

    let repetUser = this._auth.users.find(c => c.email === this.formGroupSignup.controls['email'].value);

    if(repetUser === this.formGroupSignup.value){
      this.openSnackBar("El correo electrónico ingresado ya se encuentra registrado.");
      return;
    }

    this._auth.register(this.formGroupSignup.value);
    this.openSnackBar("Usuario registrado éxitosamente.");
  }
}
