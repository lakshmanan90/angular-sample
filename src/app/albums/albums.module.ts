import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumsRoutingModule } from './albums-routing.module';

import { AlbumListComponent } from './album-list/album-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ AlbumListComponent],
  imports: [
    CommonModule,
    AlbumsRoutingModule,
    HttpClientModule
  ]
})
export class AlbumsModule { }
