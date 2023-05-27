import {Component, DestroyRef, inject, Signal, ViewChild} from '@angular/core';
import {map, Observable} from 'rxjs';

import {SharedModule} from '../../../shared/shared.module';
import {CountiesApiService} from '@services/counties-api.service';
import {takeUntilDestroyed, toSignal} from '@angular/core/rxjs-interop';
import {MatTable} from '@angular/material/table';
import {ICountry} from '@models/countries.model';

export type CountryForList = ICountry<number>;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class ListComponent {
  private destroyRef = inject(DestroyRef);
  @ViewChild(MatTable) table: MatTable<ICountry[]>;
  countries: Signal<CountryForList[]>;

  displayedColumns: string[] = ['country', 'iso2', 'iso3', 'cities'];

  private countries$: Observable<CountryForList[]> = this.countriesApiService.getCountries().pipe(
    map((countries: ICountry[]): CountryForList[] =>
      countries.map(
        (country: ICountry): CountryForList => ({
          ...country,
          cities: country.cities?.length ?? 0
        })
      )
    ),
    takeUntilDestroyed(this.destroyRef)
  );

  constructor(private countriesApiService: CountiesApiService) {
    this.countries = toSignal(this.countries$, {initialValue: []});
  }
}
