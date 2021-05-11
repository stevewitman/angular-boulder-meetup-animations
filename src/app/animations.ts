import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export let flyInOut = trigger('flyInOut', [
  transition(':enter', [
    style({ transform: 'translateX(-100%)' }),
    animate('500ms'),
  ]),
  transition(':leave', [
    animate('500ms', style({ transform: 'translateX(100vw)' })),
  ]),
]);