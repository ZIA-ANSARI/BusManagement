import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  displayName: string = "John Doe";
  balance: number = 10;
  constructor() { }
}
