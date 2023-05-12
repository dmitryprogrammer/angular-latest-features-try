import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';

const MATERIAL_MODULES = [MatButtonModule, MatSnackBarModule];

@NgModule({
  imports: [...MATERIAL_MODULES],
  exports: [...MATERIAL_MODULES]
})
export class SharedModule {
}
