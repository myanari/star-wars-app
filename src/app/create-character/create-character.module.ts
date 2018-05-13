import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ng2CompleterModule } from 'ng2-completer';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CreateCharacterComponent } from './create-character.component';
import { PreDefinedCharacterComponent} from './pre-defined-character/pre-defined-character.component';
import { UserDefinedCharacterComponent} from './user-defined-character/user-defined-character.component';
import { ListComponent} from '../list/list.component';
import { HeaderComponent} from '../header/header.component';
import { TabsComponent} from '../tabs/tabs.component';
import { ItemComponent} from '../item/item.component';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    TabsComponent,
    ListComponent,
    ItemComponent,
    HeaderComponent,
    UserDefinedCharacterComponent,
    PreDefinedCharacterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: CreateCharacterComponent }
    ]),
    HttpClientModule,
    Ng2CompleterModule,
    ReactiveFormsModule,
    FormGroup
  ],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FormGroup,
    Ng2CompleterModule
  ]
})
export class CreateCharacterModule {}
