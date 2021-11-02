import { Component, OnInit } from '@angular/core';
import { CoinInMemoryService } from '../coin-in-memory.service';
import { Coin } from '../model/Coin';

@Component({
  selector: 'app-coin-list',
  template: `
  <div class="content">

	<!-- LIST OF ITEMS -->
	<div class="row justify-content-md-center">
		<ul class="list-group">
			<li class="list-group-item list-group-item-action" *ngFor="let item of coins()" >
				      <span>{{item.name}}</span>
				      <span class="badge">{{item.creationDate | date}}</span>
				      <div class="pull-right">
				          <button class="btn btn-primary btn-xs fa fa-pencil" (click)="onEdit(item)"></button>
				          <button class="btn btn-danger btn-xs fa fa-trash-o" (click)="onRemove(item)"></button>
				      </div>
			</li>
		</ul>
	</div>

	<!-- NEW ITEM -->
	<div class="row justify-content-md-center">
		<nav>
			<a routerLink="/new-coin" class="pull-right">New item</a>
		</nav>
	</div>
</div>

  `,
  styles: [
  ]
})
export class CoinListComponent implements OnInit {

  constructor(private service:CoinInMemoryService) { }

  coins(){
    return this.service.getCoins()
  }
  
  ngOnInit(): void {}

  onEdit(item:Coin){  }

  onRemove(selectedCoin:Coin){
    this.service.removeCoin(selectedCoin)
    }
}
