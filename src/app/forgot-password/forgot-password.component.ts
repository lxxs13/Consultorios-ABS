import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  formGroupRecoverPassword: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
  });

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  public errorHandling = (control: string, error: string) => {
    return this.formGroupRecoverPassword.controls[control].hasError(error);
  }
  
  onEnter() {
    if (!this.formGroupRecoverPassword.valid) {
      this.formGroupRecoverPassword.markAllAsTouched();
      return;
    }

    this.openSnackBar("La contraseña fue enviada a su correo electrónico")

  }

  openSnackBar(msg: string) {
    this._snackBar.open(msg, undefined, {
      duration: 5000,
      panelClass: ['blue-snackbar']
    });
  }

}
