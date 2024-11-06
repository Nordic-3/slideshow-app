import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogbodyComponent } from './dialogbody.component';
import { MatCardModule } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';




@NgModule({
  declarations: [
    DialogbodyComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButton,
    MatFormField,
    MatLabel,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class DialogbodyModule { }
