import {NgModule} from '@angular/core';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {CdkTableModule} from '@angular/cdk/table';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';

const MATERIAL_MODULES = [MatSortModule, CdkTableModule, MatTableModule, MatNativeDateModule];

@NgModule({
  imports: [HttpClientModule, ...MATERIAL_MODULES],
  exports: [...MATERIAL_MODULES],
})
export class SharedModule {
}
