import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CreateCharacterComponent } from './create-character.component';

@NgModule({
  declarations: [
    CreateCharacterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: CreateCharacterComponent }
    ])
  ]
})
export class CreateCharacterModule {}
