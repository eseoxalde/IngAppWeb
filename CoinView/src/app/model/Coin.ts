export class Coin {
    name: String
    creationDate:number
    constructor(name:String){
        this.name=name;
        this.creationDate=Date.now();
    }
}