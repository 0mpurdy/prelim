import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShortDatePipe } from './short-date.pipe';
import { ShortNamePipe } from './short-name.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ShortDatePipe,
    ShortNamePipe
  ],
  exports: [
    ShortDatePipe,
    ShortNamePipe
  ]
})
export class PipesModule { }
