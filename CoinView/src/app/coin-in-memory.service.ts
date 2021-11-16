import { Injectable } from '@angular/core';
import { Coin } from './model/Coin';

@Injectable({
  providedIn: 'root'
})
export class CoinInMemoryService {

  coins = [new Coin("Litecoin", "LTC", "Un litecoin", "wiki:litecoin"), new Coin("Ethereum", "ETH", "Un etherum", "wiki:etherum")]

  constructor() { }

  addCoin(coin:Coin){
    this.coins.push(coin)
  }

  getCoins() {
    return this.coins
  }
  
  removeCoin(selectedCoin:Coin){
    this.coins=this.coins.filter(item=>item!==selectedCoin)
  }
}
