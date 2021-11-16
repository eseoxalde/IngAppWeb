export class Coin {

	name: String;
	creationDate:number;
    acronym: String;
    description:String
    url: String
	constructor(name: String, acronym: String, description: string, url:String){
		this.name = name;
        this.acronym=acronym;
        this.description= description;
        this.url=url;
        this.creationDate=Date.now();
	}
}
