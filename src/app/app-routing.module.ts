import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CreateCharacterComponent } from './create-character/create-character.component';
import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';

const routes = [
  { path: 'characters', component: TabsComponent, children: [
      { path: '', redirectTo: 'all', pathMatch: 'full' },
      { path: ':side', component: ListComponent }
    ] },
  { path: 'new', component: CreateCharacterComponent },
  { path: '**', redirectTo: 'characters'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
