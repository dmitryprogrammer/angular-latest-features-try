import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  count = signal<number>(0);

  increaseCount(): void {
    this.count.update((countValue: number) => countValue + 1);
  }

  decreaseCount(): void {
    this.count.update((countValue: number) => countValue - 1);
  }
}
