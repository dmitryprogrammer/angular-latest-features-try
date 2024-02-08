import {Component, DestroyRef, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {CommonModule} from '@angular/common';
import {map, Observable} from 'rxjs';

import {SharedModule} from '../../../shared/shared.module';
import {ApisMainService} from '@services/apis-main.service';
import {IApisEntry, IApisMain} from '@models/apis.model';

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

  public countries$: Observable<IApisEntry[]> = this.apisMainService.getApiEntries().pipe(
    map((apisMainData: IApisMain) => apisMainData?.entries),
    takeUntilDestroyed(this.destroyRef),
  );

  constructor(private apisMainService: ApisMainService) {}
}
