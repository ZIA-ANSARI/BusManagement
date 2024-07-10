import { RouterModule, Routes } from "@angular/router";
import { WalletComponent } from "./wallet/wallet.component";
import { LoginComponent } from "./login/login.component";
import { NgModule } from "@angular/core";

export const routes: Routes = [
  {path: 'wallet', component: WalletComponent},
  {path: '', component: LoginComponent}


];

@NgModule ({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule{}
