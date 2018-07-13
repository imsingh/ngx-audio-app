import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { FormatTimePipe } from "./formatTime.pipe";

@NgModule({
  declarations: [
    AppComponent,
    FormatTimePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [ FormatTimePipe ],
  bootstrap: [AppComponent]
})
export class AppModule { }
