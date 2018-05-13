import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ng2CompleterModule } from 'ng2-completer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CreateCharacterComponent } from './create-character.component';
import { UserDefinedCharacterComponent } from './user-defined-character/user-defined-character.component';
import { PreDefinedCharacterComponent } from './pre-defined-character/pre-defined-character.component';

@NgModule({
  declarations: [
    CreateCharacterComponent,
    UserDefinedCharacterComponent,
    PreDefinedCharacterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: CreateCharacterComponent }
    ]),
    HttpClientModule,
    Ng2CompleterModule,
    ReactiveFormsModule
  ]
})
export class CreateCharacterModule {}
