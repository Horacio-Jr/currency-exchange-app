import { Injectable } from "@angular/core";
import { Currency } from "../models/currency.model";

@Injectable()
export class CurrencyService {
    constructor() { }

    public getAllCurrencies(): Array<any> {
        let currencies: Currency[] = [];
        currencies.push(new Currency("AED", "UAE Dirham", "United Arab Emirates"));
        currencies.push(new Currency("AFN", "Afghan Afghani", "Afghanistan"));
        currencies.push(new Currency("ALL", "Albanian Lek", "Albania"));
        currencies.push(new Currency("AMD", "Armenian Dram", "Armenia"));
        currencies.push(new Currency("ANG", "Netherlands Antillian Guilder", "Netherlands Antilles"));
        currencies.push(new Currency("AOA", "Angolan Kwanza", "Angola"));
        currencies.push(new Currency("ARS", "Argentine Peso", "Argentina"));
        currencies.push(new Currency("AUD", "Australian Dollar", "Australia"));
        currencies.push(new Currency("AWG", "Aruban Florin", "Aruba"));
        currencies.push(new Currency("AZN", "Azerbaijani Manat", "Azerbaijan"));
        currencies.push(new Currency("BAM", "Bosnia and Herzegovina Mark", "Bosnia and Herzegovina"));
        currencies.push(new Currency("BBD", "Barbados Dollar", "Barbados"));
        currencies.push(new Currency("BDT", "Bangladeshi Taka", "Bangladesh"));
        currencies.push(new Currency("BGN", "Bulgarian Lev", "Bulgaria"));
        currencies.push(new Currency("BHD", "Bahraini Dinar", "Bahrain"));
        currencies.push(new Currency("BIF", "Burundian Franc", "Burundi"));
        currencies.push(new Currency("BMD", "Bermudian Dollar", "Bermuda"));
        currencies.push(new Currency("BND", "Brunei Dollar", "Brunei"));
        currencies.push(new Currency("BOB", "Bolivian Boliviano", "Bolivia"));
        currencies.push(new Currency("BRL", "Brazilian Real", "Brazil"));
        currencies.push(new Currency("BSD", "Bahamian Dollar", "Bahamas"));
        currencies.push(new Currency("BTN", "Bhutanese Ngultrum", "Bhutan"));
        currencies.push(new Currency("BWP", "Botswana Pula", "Botswana"));
        currencies.push(new Currency("BYN", "Belarusian Ruble", "Belarus"));
        currencies.push(new Currency("BZD", "Belize Dollar", "Belize"));
        currencies.push(new Currency("CAD", "Canadian Dollar", "Canada"));
        currencies.push(new Currency("CDF", "Congolese Franc", "Democratic Republic of the Congo"));
        currencies.push(new Currency("CHF", "Swiss Franc", "Switzerland"));
        currencies.push(new Currency("CLP", "Chilean Peso", "Chile"));
        currencies.push(new Currency("CNY", "Chinese Renminbi", "China"));
        currencies.push(new Currency("COP", "Colombian Peso", "Colombia"));
        currencies.push(new Currency("CRC", "Costa Rican Colon", "Costa Rica"));
        currencies.push(new Currency("CUC", "Cuban Convertible Peso", "Cuba"));
        currencies.push(new Currency("CUP", "Cuban Peso", "Cuba"));
        currencies.push(new Currency("CVE", "Cape Verdean Escudo", "Cape Verde"));
        currencies.push(new Currency("CZK", "Czech Koruna", "Czech Republic"));
        currencies.push(new Currency("DJF", "Djiboutian Franc", "Djibouti"));
        currencies.push(new Currency("DKK", "Danish Krone", "Denmark"));
        currencies.push(new Currency("DOP", "Dominican Peso", "Dominican Republic"));
        currencies.push(new Currency("DZD", "Algerian Dinar", "Algeria"));
        currencies.push(new Currency("EGP", "Egyptian Pound", "Egypt"));
        currencies.push(new Currency("ERN", "Eritrean Nakfa", "Eritrea"));
        currencies.push(new Currency("ETB", "Ethiopian Birr", "Ethiopia"));
        currencies.push(new Currency("EUR", "Euro", "European Union"));
        currencies.push(new Currency("FJD", "Fiji Dollar", "Fiji"));
        currencies.push(new Currency("FKP", "Falkland Islands Pound", "Falkland Islands"));
        currencies.push(new Currency("FOK", "Faroese Kr??na", "Faroe Islands"));
        currencies.push(new Currency("GBP", "Pound Sterling", "United Kingdom"));
        currencies.push(new Currency("GEL", "Georgian Lari", "Georgia"));
        currencies.push(new Currency("GGP", "Guernsey Pound", "Guernsey"));
        currencies.push(new Currency("GHS", "Ghanaian Cedi", "Ghana"));
        currencies.push(new Currency("GIP", "Gibraltar Pound", "Gibraltar"));
        currencies.push(new Currency("GMD", "Gambian Dalasi", "The Gambia"));
        currencies.push(new Currency("GNF", "Guinean Franc", "Guinea"));
        currencies.push(new Currency("GTQ", "Guatemalan Quetzal", "Guatemala"));
        currencies.push(new Currency("GYD", "Guyanese Dollar", "Guyana"));
        currencies.push(new Currency("HKD", "Hong Kong Dollar", "Hong Kong"));
        currencies.push(new Currency("HNL", "Honduran Lempira", "Honduras"));
        currencies.push(new Currency("HRK", "Croatian Kuna", "Croatia"));
        currencies.push(new Currency("HTG", "Haitian Gourde", "Haiti"));
        currencies.push(new Currency("HUF", "Hungarian Forint", "Hungary"));
        currencies.push(new Currency("IDR", "Indonesian Rupiah", "Indonesia"));
        currencies.push(new Currency("ILS", "Israeli New Shekel", "Israel"));
        currencies.push(new Currency("IMP", "Manx Pound", "Isle of Man"));
        currencies.push(new Currency("INR", "Indian Rupee", "India"));
        currencies.push(new Currency("IQD", "Iraqi Dinar", "Iraq"));
        currencies.push(new Currency("IRR", "Iranian Rial", "Iran"));
        currencies.push(new Currency("ISK", "Icelandic Kr??na", "Iceland"));
        currencies.push(new Currency("JMD", "Jamaican Dollar", "Jamaica"));
        currencies.push(new Currency("JOD", "Jordanian Dinar", "Jordan"));
        currencies.push(new Currency("JPY", "Japanese Yen", "Japan"));
        currencies.push(new Currency("KES", "Kenyan Shilling", "Kenya"));
        currencies.push(new Currency("KGS", "Kyrgyzstani Som", "Kyrgyzstan"));
        currencies.push(new Currency("KHR", "Cambodian Riel", "Cambodia"));
        currencies.push(new Currency("KID", "Kiribati Dollar", "Kiribati"));
        currencies.push(new Currency("KMF", "Comorian Franc", "Comoros"));
        currencies.push(new Currency("KRW", "South Korean Won", "South Korea"));
        currencies.push(new Currency("KWD", "Kuwaiti Dinar", "Kuwait"));
        currencies.push(new Currency("KYD", "Cayman Islands Dollar", "Cayman Islands"));
        currencies.push(new Currency("KZT", "Kazakhstani Tenge", "Kazakhstan"));
        currencies.push(new Currency("LAK", "Lao Kip", "Laos"));
        currencies.push(new Currency("LBP", "Lebanese Pound", "Lebanon"));
        currencies.push(new Currency("LKR", "Sri Lanka Rupee", "Sri Lanka"));
        currencies.push(new Currency("LRD", "Liberian Dollar", "Liberia"));
        currencies.push(new Currency("LSL", "Lesotho Loti", "Lesotho"));
        currencies.push(new Currency("LYD", "Libyan Dinar", "Libya"));
        currencies.push(new Currency("MAD", "Moroccan Dirham", "Morocco"));
        currencies.push(new Currency("MDL", "Moldovan Leu", "Moldova"));
        currencies.push(new Currency("MGA", "Malagasy Ariary", "Madagascar"));
        currencies.push(new Currency("MKD", "Macedonian Denar", "North Macedonia"));
        currencies.push(new Currency("MMK", "Burmese Kyat", "Myanmar"));
        currencies.push(new Currency("MNT", "Mongolian T??gr??g", "Mongolia"));
        currencies.push(new Currency("MOP", "Macanese Pataca", "Macau"));
        currencies.push(new Currency("MRU", "Mauritanian Ouguiya", "Mauritania"));
        currencies.push(new Currency("MUR", "Mauritian Rupee", "Mauritius"));
        currencies.push(new Currency("MVR", "Maldivian Rufiyaa", "Maldives"));
        currencies.push(new Currency("MWK", "Malawian Kwacha", "Malawi"));
        currencies.push(new Currency("MXN", "Mexican Peso", "Mexico"));
        currencies.push(new Currency("MYR", "Malaysian Ringgit", "Malaysia"));
        currencies.push(new Currency("MZN", "Mozambican Metical", "Mozambique"));
        currencies.push(new Currency("NAD", "Namibian Dollar", "Namibia"));
        currencies.push(new Currency("NGN", "Nigerian Naira", "Nigeria"));
        currencies.push(new Currency("NIO", "Nicaraguan C??rdoba", "Nicaragua"));
        currencies.push(new Currency("NOK", "Norwegian Krone", "Norway"));
        currencies.push(new Currency("NPR", "Nepalese Rupee", "Nepal"));
        currencies.push(new Currency("NZD", "New Zealand Dollar", "New Zealand"));
        currencies.push(new Currency("OMR", "Omani Rial", "Oman"));
        currencies.push(new Currency("PAB", "Panamanian Balboa", "Panama"));
        currencies.push(new Currency("PEN", "Peruvian Sol", "Peru"));
        currencies.push(new Currency("PGK", "Papua New Guinean Kina", "Papua New Guinea"));
        currencies.push(new Currency("PHP", "Philippine Peso", "Philippines"));
        currencies.push(new Currency("PKR", "Pakistani Rupee", "Pakistan"));
        currencies.push(new Currency("PLN", "Polish Z??oty", "Poland"));
        currencies.push(new Currency("PYG", "Paraguayan Guaran??", "Paraguay"));
        currencies.push(new Currency("QAR", "Qatari Riyal", "Qatar"));
        currencies.push(new Currency("RON", "Romanian Leu", "Romania"));
        currencies.push(new Currency("RSD", "Serbian Dinar", "Serbia"));
        currencies.push(new Currency("RUB", "Russian Ruble", "Russia"));
        currencies.push(new Currency("RWF", "Rwandan Franc", "Rwanda"));
        currencies.push(new Currency("SAR", "Saudi Riyal", "Saudi Arabia"));
        currencies.push(new Currency("SBD", "Solomon Islands Dollar", "Solomon Islands"));
        currencies.push(new Currency("SCR", "Seychellois Rupee", "Seychelles"));
        currencies.push(new Currency("SDG", "Sudanese Pound", "Sudan"));
        currencies.push(new Currency("SEK", "Swedish Krona", "Sweden"));
        currencies.push(new Currency("SGD", "Singapore Dollar", "Singapore"));
        currencies.push(new Currency("SHP", "Saint Helena Pound", "Saint Helena"));
        currencies.push(new Currency("SLL", "Sierra Leonean Leone", "Sierra Leone"));
        currencies.push(new Currency("SOS", "Somali Shilling", "Somalia"));
        currencies.push(new Currency("SRD", "Surinamese Dollar", "Suriname"));
        currencies.push(new Currency("SSP", "South Sudanese Pound", "South Sudan"));
        currencies.push(new Currency("STN", "S??o Tom?? and Pr??ncipe Dobra", "S??o Tom?? and Pr??ncipe"));
        currencies.push(new Currency("SYP", "Syrian Pound", "Syria"));
        currencies.push(new Currency("SZL", "Eswatini Lilangeni", "Eswatini"));
        currencies.push(new Currency("THB", "Thai Baht", "Thailand"));
        currencies.push(new Currency("TJS", "Tajikistani Somoni", "Tajikistan"));
        currencies.push(new Currency("TMT", "Turkmenistan Manat", "Turkmenistan"));
        currencies.push(new Currency("TND", "Tunisian Dinar", "Tunisia"));
        currencies.push(new Currency("TOP", "Tongan Pa??anga", "Tonga"));
        currencies.push(new Currency("TRY", "Turkish Lira", "Turkey"));
        currencies.push(new Currency("TTD", "Trinidad and Tobago Dollar", "Trinidad and Tobago"));
        currencies.push(new Currency("TVD", "Tuvaluan Dollar", "Tuvalu"));
        currencies.push(new Currency("TWD", "New Taiwan Dollar", "Taiwan"));
        currencies.push(new Currency("TZS", "Tanzanian Shilling", "Tanzania"));
        currencies.push(new Currency("UAH", "Ukrainian Hryvnia", "Ukraine"));
        currencies.push(new Currency("UGX", "Ugandan Shilling", "Uganda"));
        currencies.push(new Currency("USD", "United States Dollar", "United States"));
        currencies.push(new Currency("UYU", "Uruguayan Peso", "Uruguay"));
        currencies.push(new Currency("UZS", "Uzbekistani So'm", "Uzbekistan"));
        currencies.push(new Currency("VES", "Venezuelan Bol??var Soberano", "Venezuela"));
        currencies.push(new Currency("VND", "Vietnamese ?????ng", "Vietnam"));
        currencies.push(new Currency("VUV", "Vanuatu Vatu", "Vanuatu"));
        currencies.push(new Currency("WST", "Samoan T??l??", "Samoa"));
        currencies.push(new Currency("XAF", "Central African CFA Franc", "CEMAC"));
        currencies.push(new Currency("XCD", "East Caribbean Dollar", "Organisation of Eastern Caribbean States"));
        currencies.push(new Currency("XDR", "Special Drawing Rights", "International Monetary Fund"));
        currencies.push(new Currency("XOF", "West African CFA franc", "CFA"));
        currencies.push(new Currency("XPF", "CFP Franc", "Collectivit??s d'Outre-Mer"));
        currencies.push(new Currency("YER", "Yemeni Rial", "Yemen"));
        currencies.push(new Currency("ZAR", "South African Rand", "South Africa"));
        currencies.push(new Currency("ZMW", "Zambian Kwacha", "Zambia"));

        return currencies;
    }
}