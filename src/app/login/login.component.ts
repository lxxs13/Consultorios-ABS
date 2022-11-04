import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  public errorHandling = (control: string, error: string) => {
    return this.formGroupSignin.controls[control].hasError(error);
  }

  onEnter() {
    if (!this.formGroupSignin.valid) {
      this.formGroupSignin.markAllAsTouched();
      //return;
    }

    this._router.navigate(['dashboard']);

  }

}
