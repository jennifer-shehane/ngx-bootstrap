import {
  animate,
  style,
  AnimationTriggerMetadata,
  state,
  transition,
  trigger
} from '@angular/animations';

export const DATEPICKER_ANIMATION_TIMING = '220ms cubic-bezier(0, 0, 0.2, 1)';

export const datepickerAnimation: AnimationTriggerMetadata =
  trigger('datepickerAnimation', [
    state('void', style({height: 0, overflow: 'hidden'})),
    state('animated', style({height: '*', overflow: 'hidden'})),
    transition('void => animated', animate(DATEPICKER_ANIMATION_TIMING)),
    transition('void => unanimated', animate('0s'))
  ]);
