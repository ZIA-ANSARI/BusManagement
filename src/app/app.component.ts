import { Component } from '@angular/core';
import { UserService } from './user.service';
import {FormGroup,FormControl, ReactiveFormsModule, FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BusManagement';
  constructor(public user : UserService){
    console.log(user);

  }

  showBalance(){
    console.log(this.user.balance);

  }

}
