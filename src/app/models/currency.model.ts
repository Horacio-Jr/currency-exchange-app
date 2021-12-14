export class Currency{
    
    public code: string;
    public name: string;
    public country: string;

    constructor(code: string, name: string, country: string){
        this.code = code;
        this.name = name;
        this.country = country;
    }
}