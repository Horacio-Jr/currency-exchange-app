import { Rate } from "./rate.model";

export class RateDetail {

    public result: string;
    public provider: string;
    public documentation: string;
    public terms_of_use: string;
    public time_last_update_unix: number;
    public time_last_update_utc: Date;
    public time_next_update_unix: number;
    public time_next_update_utc: Date;
    public time_eol_unix: number;
    public base_code: string;
    public rates: any;

    constructor(result: string, provider: string, documentation: string, terms_of_use: string, time_last_update_unix: number, time_last_update_utc: Date, 
        time_next_update_unix: number, time_next_update_utc: Date, time_eol_unix: number, base_code: string, rates: any) {
        this.result = result;
        this.provider = provider;
        this.documentation = documentation;
        this.terms_of_use = terms_of_use;
        this.time_last_update_unix = time_last_update_unix;
        this.time_last_update_utc = time_last_update_utc;
        this.time_next_update_unix = time_next_update_unix;
        this.time_next_update_utc = time_next_update_utc;
        this.time_eol_unix = time_eol_unix;
        this.base_code = base_code;
        this.rates = rates;
    }
}