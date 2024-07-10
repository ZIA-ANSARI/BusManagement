import { Component } from '@angular/core';
import {FormGroup,FormControl, ReactiveFormsModule, FormBuilder} from '@angular/forms'
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  myForm :FormGroup;

  constructor(private fb: FormBuilder,
    private userService: UserService
  ) {
    this.myForm = this.fb.group({
      email: [''],
      p: ['']
    });
  }

  login(event: any){
    console.log(this.myForm.value);
    this.userService.loginUser(this.myForm.value['email'], this.myForm.value['p']);

  }
}
