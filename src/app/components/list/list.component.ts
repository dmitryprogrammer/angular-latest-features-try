import {Component} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  standalone: true
})
export class ListComponent {
  title = 'Hi There';

  constructor(private snackBar: MatSnackBar) {
  }

  buttonClickHandler(): void {
    this.snackBar.open('Angular Material works');
  }
}
