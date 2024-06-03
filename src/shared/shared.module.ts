import {NgModule} from '@angular/core';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {CdkTableModule} from '@angular/cdk/table';
import {MatNativeDateModule} from '@angular/material/core';
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';

const MATERIAL_MODULES = [MatSortModule, CdkTableModule, MatTableModule, MatNativeDateModule];

@NgModule({
  exports: [...MATERIAL_MODULES],
  imports: [...MATERIAL_MODULES],
  providers: [provideHttpClient(withInterceptorsFromDi())],
})
export class SharedModule {}
