export class Rate {
    
    public currency: string;
    public value: number;

    constructor(currency: string, value: number){
        this.currency = currency;
        this.value = value;
    }
}