import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// import { AppComponent } from './app.component';
import { WordComponent } from './word.component';
// import { WordComponent } from './word/WordComponent.component';


@NgModule({
  declarations: [
    // AppComponent,
    WordComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  // bootstrap: [AppComponent]
  bootstrap: [WordComponent]
})
export class AppModule { }
