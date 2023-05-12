import {Component} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hi There';

  constructor(private snackBar: MatSnackBar) {
  }

  buttonClickHandler(): void {
    this.snackBar.open('Angular Material works');
  }
}
