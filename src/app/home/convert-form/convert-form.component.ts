import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ConversionDetail } from 'src/app/models/conversion-details.model';
import { Currency } from 'src/app/models/currency.model';
import { CurrencyService } from 'src/app/services/currency.service';
import { ExchangeService } from 'src/app/services/exchange.service';

@Component({
  selector: 'app-convert-form',
  templateUrl: './convert-form.component.html',
  styleUrls: ['./convert-form.component.css'],
  providers: [CurrencyService, ExchangeService]
})
export class ConvertFormComponent implements OnInit {
  /**
   *  array para o preenchimento das comboboxs das moedas
   *  */
  public currencies: Currency[] = [];
  /**
   *  objecto responsavel pela a resposta da conversão
   *  */
  public conversion!: Observable<ConversionDetail>;
  /** 
   * objecto controlador do formulario (reactive forms) 
   * */
  public conversionForm: FormGroup = new FormGroup({
    'from': new FormControl(null),
    'to': new FormControl(null),
    'rawValue': new FormControl(null),
    'resultValue': new FormControl(null)
  });

  constructor(private currencyService: CurrencyService,
    private exchangeService: ExchangeService) { }

  ngOnInit(): void {
    this.fillCurrenciesCbx();
    this.conversionFormInitData();
  }

  /** 
   * método para o preenchimento 
   * dos arrays comboboxs das moedas
   *  */
  private fillCurrenciesCbx(): void {
    for (let currency of this.currencyService.getAllCurrencies()) {
      this.currencies.push(currency);
    }
  }

  /** 
   * metodo inicializa os campos do formulario
   * com valores iniciais
   *  */
  private conversionFormInitData(): void {
    this.conversionForm.get('from')?.setValue(this.currencies[99].code); /** inicializa a dropdown "from" com a moeda MZN */
    this.conversionForm.get('to')?.setValue(this.currencies[145].code); /** inicializa a dropdown "to" com a moeda USD */
    this.conversionForm.get('rawValue')?.setValue(1); /** inicializa o campo "Raw Value" com o valor 1 */

    var amount = this.conversionForm.get('rawValue')?.value;
    var fromCurrency = this.conversionForm.get('from')?.value;
    var toCurrency = this.conversionForm.get('to')?.value;

    this.conversion = this.exchangeService.convertTo(amount, fromCurrency, toCurrency);

    this.conversion.subscribe((result: ConversionDetail) => {
      this.conversionForm.get('resultValue')?.setValue(result.conversion_result);
    }, (erro: any) => {
      console.log("Sorry we have some error => code:", erro.status);
    });
  }

  /** 
   * método que faz a chamada 
   * ao serviço de conversão
   * */
  public convertValue(valueToConvert: string, fromCurrency: string, toCurreny: string): void {
    this.conversion = this.exchangeService.convertTo(Number(valueToConvert), fromCurrency, toCurreny);
    this.conversion.subscribe(
      (result: ConversionDetail) => {
        this.conversionForm.get('resultValue')?.setValue(result.conversion_result);
      },
      (erro: any) => {
        console.log("Sorry we have some error => code:", erro.status);
      }
    );
  }
}
