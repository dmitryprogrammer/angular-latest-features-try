export interface ICountriesModel<CountriesData = any> {
  error: boolean;
  msg: string;
  data: CountriesData[];
}

export interface ICountry<City = string[]> {
  iso2: string;
  iso3: string;
  country: string;
  cities: City;
}

export type Countries = ICountriesModel<ICountry>;
