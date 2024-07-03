import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  constructor(public user : UserService,
    private route : Router
  ){

  }
  ngOnInit(): void {
    console.log("KCh bhi")
  }

  routeToWallet(){
    this.user.balance = this.user.balance + 10;
    this.route.navigate(['/wallet'])

  }



}
