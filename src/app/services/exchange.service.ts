import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { URL_API } from "../app-api";
import { RateDetail } from "../models/rate-detail.model";
import { Rate } from "../models/rate.model";
import { ConversionDetail } from "../models/conversion-details.model";
import { Observable } from "rxjs";
import { catchError, delay, map, retry } from 'rxjs/operators';

@Injectable()
export class ExchangeService {

    constructor(private httpClient: HttpClient) { }

    public getRates(): Promise<Rate> {
        return this.httpClient.get(`${URL_API}/USD`).toPromise().then((response: any) => {
            return response.rates;
        });
    }

    public convertTo(amount: number, fromCurrency: string, toCurrency: string): Observable<ConversionDetail> {
        return this.httpClient.get(`${URL_API}/pair/${fromCurrency}/${toCurrency}/${amount}`)
        .pipe(retry(10))
            .pipe(map((response: any) => {
                let conversionDetail: ConversionDetail = new ConversionDetail();
                conversionDetail.result = response.result;
                conversionDetail.documentation = response.documentation;
                conversionDetail.terms_of_use = response.terms_of_use;
                conversionDetail.time_last_update_unix = response.time_last_update_unix;
                conversionDetail.time_last_update_utc = response.time_last_update_utc;
                conversionDetail.time_next_update_unix = response.time_next_update_unix;
                conversionDetail.time_next_update_utc = response.time_next_update_utc;
                conversionDetail.base_code = response.base_code;
                conversionDetail.target_code = response.target_code;
                conversionDetail.conversion_rate = response.conversion_rate;
                conversionDetail.conversion_result = response.conversion_result;
                return conversionDetail;
            }));
    }

    public getRatesWithDetailByCurrencyBase(currency: string): Promise<RateDetail> {
        return this.httpClient.get<RateDetail>(`${URL_API}/${currency}`).toPromise().then((response: any) => {
            let rateDetail: RateDetail = new RateDetail(
                response.result,
                response.provider,
                response.documentation,
                response.terms_of_use,
                response.time_last_update_unix,
                response.time_last_update_utc,
                response.time_next_update_unix,
                response.time_next_update_utc,
                response.time_eol_unix,
                response.base_code,
                response.rates);
            return rateDetail;
        });
    }
}