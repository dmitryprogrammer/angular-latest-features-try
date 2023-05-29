import {Component, DestroyRef, inject, Signal, ViewChild} from '@angular/core';
import {MatTable} from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';
import {map, Observable} from 'rxjs';

import {SharedModule} from '../../../shared/shared.module';
import {CountiesApiService} from '@services/counties-api.service';
import {takeUntilDestroyed, toSignal} from '@angular/core/rxjs-interop';
import {ICountry} from '@models/countries.model';
import {CommonModule} from '@angular/common';

export type CountryForList = ICountry<number>;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  standalone: true,
  imports: [CommonModule, SharedModule]
})
export class ListComponent {
  private destroyRef = inject(DestroyRef);
  @ViewChild(MatTable) table: MatTable<ICountry[]>;
  @ViewChild(MatSort) sort: MatSort;

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

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    console.log(sortState);
  }
}
