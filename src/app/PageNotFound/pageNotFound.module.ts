import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './pageNotFound.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [PageNotFoundComponent]
})
export class PageNotFoundModule { }