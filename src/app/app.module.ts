import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AliPillComponent } from './components/ali-pill/ali-pill.component';
import { AliIconComponent } from './components/ali-icon/ali-icon.component';

@NgModule({
  declarations: [AppComponent, AliPillComponent, AliIconComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
