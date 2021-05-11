import {
  animate,
  keyframes,
  query,
  stagger,
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

// Also add [@staggerSlide]="items.length" to container
export let staggerSlide = trigger('staggerSlide', [
  transition('* => *', [
    query(':enter', style({ opacity: 0 }), { optional: true }),
    query(
      ':enter',
      stagger('300ms', [
        animate(
          '1s ease-in',
          keyframes([
            style({
              opacity: 0,
              transform: 'translateX(-300px)',
              offset: 0,
            }),
            style({
              opacity: 0.5,
              transform: 'translateX(10px)',
              offset: 0.3,
            }),
            style({
              opacity: 1,
              transform: 'translateY(0px)',
              offset: 1,
            }),
          ])
        ),
      ]),
      { optional: true }
    ),
    query(
      ':leave',
      stagger('300ms', [
        animate(
          '1s ease-in',
          keyframes([
            style({
              opacity: 1,
              transform: 'translateX(0px)',
              offset: 0,
            }),
            style({
              opacity: 0.5,
              transform: 'translateX(10px)',
              offset: 0.3,
            }),
            style({
              opacity: 0,
              transform: 'translateX(-300px)',
              offset: 1,
            }),
          ])
        ),
      ]),
      { optional: true }
    ),
  ]),
]);
