import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FirstComponent } from './components/first/first-component';
import { SecondComponent } from './components/second/second.component';
import { DataBindingComponent } from './components/databinding/data-binding.component';
import { DetailsComponent } from './components/directives/details.component';
import { InputOutComponent } from './components/InputOutput/inputoutput.component';
import { GameControlComponent } from './components/gamecontrol/gamecontrol.component';
// import { EvenComponentManual } from './components/even/evenmanual.component';
// import { OddManualComponent } from './components/odd/oddmanual.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    DataBindingComponent,
    DetailsComponent,
    InputOutComponent,
    GameControlComponent,
    // EvenComponentManual,
    // OddManualComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
