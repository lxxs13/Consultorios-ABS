import { Injectable } from '@angular/core';
import { UserModel } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users: UserModel[] = [
    {
      name: 'Luis Quiroz Schlemm',
      email: 'luis.quiroz90@gmail.com',
      password: 'abc',
      passwordConfirmation: 'abc',
      birthDate: new Date(),
    },
  ];
  constructor() { }

  login(data: UserModel){
  }

  register(data: UserModel){
    this.users.push(data);
  }
}
