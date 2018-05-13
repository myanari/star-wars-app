import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { Ng2CompleterModule } from 'ng2-completer';

import { StarWarsService } from './star-wars.service';
import { LoggerService } from './logger.service';

import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { HeaderComponent } from './header/header.component';
import { UserDefinedCharacterComponent } from './create-character/user-defined-character/user-defined-character.component';
import { PreDefinedCharacterComponent } from './create-character/pre-defined-character/pre-defined-character.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ListComponent,
    ItemComponent,
    HeaderComponent,
    UserDefinedCharacterComponent,
    PreDefinedCharacterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    Ng2CompleterModule,
    AppRoutingModule
  ],
  providers: [StarWarsService, LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
