import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WatchRoutingModule } from './watch-routing.module';
import { WatchComponent } from './watch.component';
import { MatCardModule } from '@angular/material/card';
import { MatButton } from '@angular/material/button';


@NgModule({
  declarations: [
    WatchComponent
  ],
  imports: [
    CommonModule,
    WatchRoutingModule,
    MatCardModule,
    MatButton
  ]
})
export class WatchModule { }
