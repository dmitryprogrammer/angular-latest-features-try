import {ChangeDetectionStrategy, Component, computed, DestroyRef, effect, inject, signal, Signal, WritableSignal} from '@angular/core';
import {takeUntilDestroyed, toSignal} from '@angular/core/rxjs-interop';
import {CommonModule} from '@angular/common';
import {Observable} from 'rxjs';

import {  SharedModule } from '../../../shared/shared.module';
import { CountiesApiService  } from '@services/counties-api.service';
import {ICountry} from '@models/countries.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  standalone: true,
  imports: [CommonModule, SharedModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CountiesApiService],
})
export class ListComponent {
  private destroyRef = inject(DestroyRef);

  private countries$: Observable<ICountry[]> = this.countiesApiService.getCountries().pipe(takeUntilDestroyed(this.destroyRef));

  public countries: Signal<ICountry[]> = toSignal(this.countries$);

  public counter: WritableSignal<number> = signal(0);
  public title: Signal<string> = signal('Hello There');

  constructor(private countiesApiService: CountiesApiService) {
    effect(() => {
      console.log(this.counter());
    });
  }

  public counterIncrement(): void {
    this.counter.update((counter) => counter + 1);
  }
}
