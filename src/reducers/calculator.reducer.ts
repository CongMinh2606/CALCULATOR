
import { CalculatorState } from '../state/calculator.state';
import*as CalculatorAction from '../actions/calculator.action';
import { createReducer, on } from "@ngrx/store";
// import{increment,decrement} from "src/actions/calculator.action"

// export const initialState = 0;
//  export const counterReducer = createReducer(initialState,
//     on(increment, state => state + 1),
//   on(decrement, state => state - 1),
//   );
export const initialState: CalculatorState = {
  currentNumber: '0',
  perviousNumber : '0',
  operator: ''
};



export const calculatorReducer = createReducer(
  initialState,
  on(CalculatorAction.enterNumber ,
    (state,action) => {
    let newState ={...state};
    if(action.Number == ','){
      if(state.currentNumber.includes(',')){
        newState.currentNumber = state.currentNumber + ",";

      }
      return newState;
    }
    if(state.currentNumber == '0'){
      newState.currentNumber = action.Number;
    }else{
      newState.currentNumber= state.currentNumber + action.Number;
    }
    return newState;
  }
  ),
  on(CalculatorAction.enterOperator,
    (state,action) => {
      if(action.Operator == '+/-'){
        return{
          ...state,
          currentNumber: (parseFloat(state.currentNumber)* -1).toString()
        }
      }
      if(action.Operator == '%'){
          return{
            ...state,
            currentNumber: (parseFloat(state.currentNumber)/100).toString()
          }
      }
      if (action.Operator == 'C'){
        return{
          ...state,
          currentNumber: '0',
          perviousNumber: '0',
          operator:''
        }
      }
      if(action.Operator == 'DEL'){
        return{
          ...state,
          currentNumber: state.currentNumber.slice(0,state.currentNumber.length-1)
        }
      }
      if(action.Operator == '='){
        let result= 0;
        if(state.operator == '+'){
          result = parseFloat(state.perviousNumber) + parseFloat(state.currentNumber);
        }else if(state.operator == '-'){
          result = parseFloat(state.perviousNumber) - parseFloat(state.currentNumber);
        }else if(state.operator == '*'){
          result = parseFloat(state.perviousNumber) * parseFloat(state.currentNumber);
        }else if(state.operator == '/'){
          result = parseFloat(state.perviousNumber) / parseFloat(state.currentNumber);
        }
        return {
          ...state,
          currentNumber: result?.toString()
        }
      }else{
        return{
          ...state,
          perviousNumber: state.currentNumber,
          currentNumber: '0',
          operator: action.Operator
        }
      }

    }
    )
);


