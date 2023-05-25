import {Component, DestroyRef, inject, OnInit, ViewChild} from '@angular/core';
import {map} from 'rxjs';

import {SharedModule} from '../../../shared/shared.module';
import {CountiesApiService} from '@services/counties-api.service';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
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
export class ListComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  @ViewChild(MatTable) table: MatTable<ICountry[]>;
  countries: CountryForList[] = [];

  displayedColumns: string[] = ['country', 'iso2', 'iso3', 'cities'];
  dataSource = this.countries;

  constructor(private countriesApiService: CountiesApiService) {
  }

  public ngOnInit(): void {
    this.countriesApiService
      .getCountries()
      .pipe(
        map((countries: ICountry[]): CountryForList[] =>
          countries.map(
            (country: ICountry): CountryForList => ({
              ...country,
              cities: country.cities?.length ?? 0
            })
          )
        ),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((countries: CountryForList[]) => {
        this.countries = countries;
        this.dataSource = this.countries;
      });
  }
}
