import {Component, DestroyRef, inject, Signal} from '@angular/core';
import {takeUntilDestroyed, toSignal} from '@angular/core/rxjs-interop';
import {CommonModule} from '@angular/common';
import {map, Observable} from 'rxjs';

import {SharedModule} from '../../../shared/shared.module';
import {ApisMainService} from '@services/apis-main.service';
import {IApiCountry, IApisMain} from '@models/apis.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  standalone: true,
  imports: [CommonModule, SharedModule],
  providers: [ApisMainService],
})
export class ListComponent {
  private destroyRef = inject(DestroyRef);

  private countries$: Observable<IApiCountry[]> = this.apisMainService.getApiEntries().pipe(
    map((apisMainData: IApisMain) => apisMainData?.data),
    takeUntilDestroyed(this.destroyRef),
  );

  public countries: Signal<IApiCountry[]> = toSignal(this.countries$);

  constructor(private apisMainService: ApisMainService) {
  }
}
