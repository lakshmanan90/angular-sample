import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [SearchPipe],
  imports: [
    CommonModule
  ],
  exports: [SearchPipe]
})
export class SharedModule { }
