import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SayfaBulunamadiComponent } from './sayfaBulunamadi.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    SayfaBulunamadiComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [SayfaBulunamadiComponent]
})
export class SayfaBulunamadiModule { }