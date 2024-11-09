import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlideshowRoutingModule } from './slideshow-routing.module';
import { SlideshowComponent } from './slideshow.component';
import { MatCardModule } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    SlideshowComponent
  ],
  imports: [
    CommonModule,
    SlideshowRoutingModule,
    MatCardModule,
    MatButton,
    MatFormField,
    MatLabel,
    ReactiveFormsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatIconModule
  ]
})
export class SlideshowModule { }
