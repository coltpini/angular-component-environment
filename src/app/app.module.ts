import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AliPillComponent } from './components/ali-pill/ali-pill.component';
import { AliIconComponent } from './components/ali-icon/ali-icon.component';
import { AliRevealingPanelComponent } from './components/ali-revealing-panel/ali-revealing-panel.component';
import { AliMultiselectComponent } from './components/ali-multiselect/ali-multiselect.component';
import { AliListItemComponent } from './components/ali-list-item/ali-list-item.component';



@NgModule({
  declarations: [
    AppComponent,
    AliPillComponent,
    AliIconComponent,
    AliRevealingPanelComponent,
    AliMultiselectComponent,
    AliListItemComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
