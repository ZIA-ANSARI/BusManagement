import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-wallet',
  standalone: true,
  imports: [],
  templateUrl: './wallet.component.html',
  styleUrl: './wallet.component.css'
})
export class WalletComponent {

  constructor(public user: UserService){

  }

}
