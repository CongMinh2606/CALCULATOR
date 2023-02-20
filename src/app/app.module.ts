import { CalculatorState } from './../state/calculator.state';
import { calculatorReducer,  } from './../reducers/calculator.reducer';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      calculator: calculatorReducer,

    }, {})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
