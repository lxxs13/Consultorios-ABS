import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  formGroupSignin: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required])
  });
  constructor(private _router: Router, private _auth: AuthService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  public errorHandling = (control: string, error: string) => {
    return this.formGroupSignin.controls[control].hasError(error);
  }

  openSnackBar(msg: string) {
    this._snackBar.open(msg, undefined, {
      duration: 5000,
      panelClass: ['blue-snackbar']
    });
  }

  onEnter() {
    if (!this.formGroupSignin.valid) {
      this.formGroupSignin.markAllAsTouched();
      return;
    }

    let user = this._auth.users.find(c => c.email.toLowerCase() === this.formGroupSignin.controls['email'].value)

    if(user === undefined){
      this.openSnackBar("El correo electrónico ingresado no se encuentra registrado.");
      return;
    }

    this._router.navigate(['dashboard']);
  }
}
