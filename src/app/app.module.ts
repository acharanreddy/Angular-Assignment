import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';
import {NotFoundComponent} from './not-found/not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'add',
        component:AddComponent
      },{
        path:'list',
        component:ListComponent
      },
      {
        path:'**',
        component:NotFoundComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
