import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoinlistComponent } from './coinlist/coinlist.component';
import { NewCoinComponent } from './new-coin/new-coin.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: CoinlistComponent },
  { path: 'new-coin', component: NewCoinComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
