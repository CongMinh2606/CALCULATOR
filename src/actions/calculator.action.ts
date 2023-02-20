
import { createAction, props } from '@ngrx/store';
// import { createAction } from "@ngrx/store";

// export const increment =createAction('[Counter component] increment');
// export const decrement =createAction('[Counter component] decrement');
export  const enterNumber = createAction
(
  '[calculator] enter number',
  props<{Number: string}>()
);
export  const  enterOperator = createAction
(
  '[calculator] operator number',
  props<{Operator: string}>()
);
