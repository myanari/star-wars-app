import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Ng2CompleterModule } from 'ng2-completer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CreateCharacterComponent } from './create-character.component';
import { UserDefinedCharacterComponent } from './user-defined-character/user-defined-character.component';
import { PreDefinedCharacterComponent } from './pre-defined-character/pre-defined-character.component';
import { ItemComponent } from '../item/item.component';

import { StarWarsService } from '../star-wars.service';
import { LoggerService } from '../logger.service';

@NgModule({
  declarations: [
    CreateCharacterComponent,
    UserDefinedCharacterComponent,
    PreDefinedCharacterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: CreateCharacterComponent }
    ]),
    Ng2CompleterModule
  ]
})
export class CreateCharacterModule {}
