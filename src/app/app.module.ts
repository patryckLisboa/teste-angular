import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftSideBarComponent } from './components/teste-tela/left-sidebar.component';
import { NoSideBarComponent } from './components/teste-tela/no-sidebar.component';
import { RightSideBarComponent } from './components/teste-tela/right-sidebar.component';
import { TesteTelaComponent } from './components/teste-tela/teste-tela.component';

@NgModule({
  declarations: [
    AppComponent,
    TesteTelaComponent,
    LeftSideBarComponent,
    RightSideBarComponent,
    NoSideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: "", component: TesteTelaComponent},
      {path: "left_bar", component: LeftSideBarComponent},
      {path: "right_bar", component: RightSideBarComponent},
      {path: "noside_bar", component: NoSideBarComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
