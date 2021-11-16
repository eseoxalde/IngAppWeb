import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoinInMemoryService } from '../coin-in-memory.service';
import { Coin } from '../model/Coin';

@Component({
  selector: 'app-new-coin',
  template: `
  <div class="container">
  <div [hidden]="submitted">
    <h1>Alta de Cripto</h1>
    <form (ngSubmit)="onSubmit()" #heroForm="ngForm">
      <div class="form-group">
        <label for="name">Nombre</label>
        <input type="text" class="form-control" id="name" required [(ngModel)]="model.name" name="name"  #name="ngModel">
        <div [hidden]="name.valid || name.pristine" class="alert alert-danger"> El nombre es obligatorio </div>
      </div>
      <div class="form-group">
        <label for="acronym">Acrónimo</label>
        <input type="text" class="form-control" id="acronym" required [(ngModel)]="model.acronym" name="acronym"  #acronym="ngModel">
        <div [hidden]="acronym.valid || acronym.pristine" class="alert alert-danger"> El acrónimo es obligatorio </div>
      </div>
      <div class="form-group">
        <label for="description">Descripción</label>
        <input type="text" class="form-control" id="description" [(ngModel)]="model.description" name="description"  #description="ngModel">
      </div>
      <div class="form-group">
        <label for="url">URL</label>
        <input type="text" class="form-control" id="url" [(ngModel)]="model.url" name="url"  #url="ngModel">
      </div>
      <button type="submit" class="btn btn-success" [disabled]="!heroForm.form.valid">Agregar</button>
      <button type="button" class="btn btn-default" (click)="newCoin(); heroForm.reset()">Clear</button>
    </form>
    <div class="row justify-content-md-center">
		<nav>
			<a routerLink="/home" class="pull-right btn btn-default" role="button">Volver</a>
		</nav>
	</div>
  </div>
 </div>
 
  `,
  styles: [
  ]
})
export class NewCoinComponent implements OnInit {

  model=new Coin("", "", "","");
  submitted=false;

  constructor(private service:CoinInMemoryService, private router:Router) { }

  ngOnInit(): void {
  }
  newCoin(){
    this.model=new Coin("", "", "","");
  }
  onSubmit(){
    this.service.addCoin(this.model)
    this.submitted=true
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    this.router.navigateByUrl('/home')
  }

}
