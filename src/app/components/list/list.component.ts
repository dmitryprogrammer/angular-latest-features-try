import {Component, DestroyRef, inject, Signal} from '@angular/core';
import {takeUntilDestroyed, toSignal} from '@angular/core/rxjs-interop';
import {CommonModule} from '@angular/common';
import {Observable} from 'rxjs';

import {SharedModule} from '../../../shared/shared.module';
import {CountiesApiService} from "@services/counties-api.service";
import {ICountry} from "@models/countries.model";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  standalone: true,
  imports: [CommonModule, SharedModule],
  providers: [CountiesApiService],
})
export class ListComponent {
  private destroyRef = inject(DestroyRef);

  private countries$: Observable<ICountry[]> = this.countiesApiService.getCountries().pipe(
    takeUntilDestroyed(this.destroyRef),
  );

  public countries: Signal<ICountry[]> = toSignal(this.countries$);

  constructor(private countiesApiService: CountiesApiService) {
  }
}
