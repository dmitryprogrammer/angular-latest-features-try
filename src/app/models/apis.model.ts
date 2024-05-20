export interface IApisMain {
  error?: boolean;
  msg?: string;
  data: IApiCountry[];
}

export interface IApisEntry {
  API: string;
  Description: string;
  Auth: string;
  HTTPS: boolean;
  Cors: 'yes' | 'no';
  Link: string;
  Category: string;
}

export interface IApiCountry {
  cities: string[];
  country: string;
  iso2: string;
  iso3: string;
}
