import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { SelectDeselectComponent } from './select-deselect/select-deselect.component';

import { ListdataService } from './listdata.service';


@NgModule({
  declarations: [
    AppComponent,
    SelectDeselectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ListdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
