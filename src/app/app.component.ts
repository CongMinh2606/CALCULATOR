import { createAction } from '@ngrx/store';
import { CalculatorState } from '../state/calculator.state';
import { Component } from '@angular/core';
import { Store  } from '@ngrx/store';
import { Observable } from 'rxjs';
import*as CalculatorAction from '../actions/calculator.action';
import { calculatorReducer } from 'src/reducers/calculator.reducer';
// import { increment } from 'src/actions/calculator.action';
// import { Counter } from 'src/state/calculator.state';
import * as CounterActions from '../actions/calculator.action'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'newprojectng';
  currentNumber$: Observable<string>;
  // constructor(private store:Store<{count: Counter}>){
  //   this.count$ = this.store.select('count');
  // }
// increment()
// {
//   this.store.dispatch(CounterActions.increment());
// }
// decrement(){
//   this.store.dispatch(CounterActions.decrement());
// }
constructor(private store: Store<{ calculator: CalculatorState}>){
this.currentNumber$ = store.select((state) => state.calculator.currentNumber);
}
// increment()
// {
//   this.store.dispatch(CalculatorState.enterNumber());
// }
// decrement(){
//   this.store.dispatch(CalculatorState.decrement());
// }

enterNumber(Number: string){
 this.store.dispatch(CalculatorAction.enterNumber({Number: Number}))

};
enterOperator(Operator: string ){
  this.store.dispatch(CalculatorAction.enterOperator({Operator: Operator}))

};

}

