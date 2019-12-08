import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DateAgoPipe } from './pipe/date-ago.pipe';
import { FilterCharacterPipe } from './pipe/filter-character.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DateAgoPipe,
    FilterCharacterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
