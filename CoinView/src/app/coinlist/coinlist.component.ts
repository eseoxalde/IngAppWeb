import { Component, OnInit } from '@angular/core';
import { CoinInMemoryService } from '../coin-in-memory.service';
import { Coin } from '../model/Coin';

@Component({
  selector: 'app-coinlist',
  template: `
  <div class="content">

  <h1>Lista de Criptos</h1>
  <!-- tabla de items -->
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">Fecha de creación</th>
          <th scope="col">Nombre</th>
          <th scope="col">Acrónimo</th>
          <th scope="col">Descripción</th>
          <th scope="col">URL</th>
          <th scope="col"> </th>
        </tr>
      </thead>
      <tbody *ngFor="let item of coins()">
        <tr>
          <td><span>{{item.creationDate | date}}</span></td>
          <td><span>{{item.name}}</span></td>
          <td><span>{{item.acronym}}</span></td>
          <td><span>{{item.description}}</span></td>
          <td><span>{{item.url}}</span></td>
          <td>
            <button class="btn btn-primary btn-xs fa fa-pencil" (click)="onEdit(item)"></button>
            <button class="btn btn-danger btn-xs fa fa-trash-o" (click)="onRemove(item)"></button>
          </td>
        </tr>
      </tbody>
   </table>

	<!-- NEW ITEM -->
	<div class="row justify-content-md-center">
		<nav>
			<a routerLink="/new-coin" class="pull-right btn btn-info" role="button">Nuevo Cripto</a>
		</nav>
	</div>
</div>

  `,
  styles: [
  ]
})
export class CoinlistComponent implements OnInit {

  constructor(private service:CoinInMemoryService) { }

  coins(){
    return this.service.getCoins()
  }
  ngOnInit(): void {
  }

  onEdit(selectedCoin: Coin){}

  onRemove(selectedCoin:Coin){
    this.service.removeCoin(selectedCoin)
  }

}
