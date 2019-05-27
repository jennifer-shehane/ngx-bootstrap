import {
  animate,
  style,
  AnimationTriggerMetadata,
  state,
  transition,
  trigger
} from '@angular/animations';

export const TYPEAHEAD_ANIMATION_TIMING = '120ms cubic-bezier(0, 0, 0.2, 1)';

export const typeaheadAnimation: AnimationTriggerMetadata =
  trigger('typeaheadAnimation', [
    state('void', style({height: 0, overflow: 'hidden'})),
    state('animated', style({height: '*', overflow: 'hidden'})),
    transition('void => animated', animate(TYPEAHEAD_ANIMATION_TIMING)),
    transition('void => unanimated', animate('0s'))
  ]);
