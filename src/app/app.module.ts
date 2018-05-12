import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2CompleterModule } from 'ng2-completer';


import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { StarWarsService } from './star-wars.service';
import { LoggerService } from './logger.service';
import { HeaderComponent } from './header/header.component';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { UserDefinedCharacterComponent } from './create-character/user-defined-character/user-defined-character.component';
import { PreDefinedCharacterComponent } from './create-character/pre-defined-character/pre-defined-character.component';

const routes = [
  { path: 'characters', component: TabsComponent, children: [
      { path: '', redirectTo: 'all', pathMatch: 'full' },
      { path: ':side', component: ListComponent }
    ] },
  { path: 'new', component: CreateCharacterComponent },
  { path: '**', redirectTo: '/'}
];

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ListComponent,
    ItemComponent,
    CreateCharacterComponent,
    HeaderComponent,
    UserDefinedCharacterComponent,
    PreDefinedCharacterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    Ng2CompleterModule
  ],
  providers: [StarWarsService, LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
