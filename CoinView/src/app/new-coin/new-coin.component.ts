import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoinInMemoryService } from '../coin-in-memory.service';
import { Coin } from '../model/Coin';

@Component({
  selector: 'app-new-coin',
  template: `
  <div class="container">
  <div [hidden]="submitted">
    <h1>New coin</h1>
    <form (ngSubmit)="onSubmit()" #heroForm="ngForm">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" required [(ngModel)]="model.name" name="name"  #name="ngModel">
        <div [hidden]="name.valid || name.pristine" class="alert alert-danger"> Name is required </div>
      </div>
      <button type="submit" class="btn btn-success" [disabled]="!heroForm.form.valid">Submit</button>
      <button type="button" class="btn btn-default" (click)="newCoin(); heroForm.reset()">Clear</button>
    </form>
  </div>
  <div [hidden]="!submitted">
    <h2>You submitted the following:</h2>
    <div class="row">
      <div class="col-xs-3">Name</div>
      <div class="col-xs-9">{{ model.name }}</div>
    </div>
    <a routerLink="/" > List of coins</a>
    <br>
    <button class="btn btn-primary" (click)="submitted=false">Edit</button>
  </div>
 </div>
 
  `,
  styles: [
  ]
})
export class NewCoinComponent implements OnInit {

  model= new Coin("")
  submitted=false

  constructor(private service: CoinInMemoryService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service.addCoin(this.model)
    this.submitted=true
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    this.router.navigateByUrl('/home')
  }

  newCoin(){
    this.model=new Coin("")
  }
}
