import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  formGroupRecoverPassword: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
  });

  constructor() { }

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

  }

}
