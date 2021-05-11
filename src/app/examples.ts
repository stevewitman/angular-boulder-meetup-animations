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

// Example 1
// Add a fade-in transition (from void to default)
trigger('fade', [
  transition('void => *', [
    style({ opacity: 0 }),
    animate(2000, style({ opacity: 1 })),
  ]),
]);

// Example 2
// Remove unnecessary default style
trigger('fade', [
  transition('void => *', [
    style({ opacity: 0 }),
    animate(2000 /*, style({ opacity: 1 })*/),
  ]),
]);

// Example 2
// Add easing function
trigger('fade', [
  transition('void => *', [
    style({ opacity: 0 }),
    animate('2000ms ease-in'), // put in single-quote, add time units, add function)
  ]),
]);

// Example 3
// Add a fade-out transition (from default to void)
trigger('fade', [
  transition('void => *', [style({ opacity: 0 }), animate('2000ms ease-in')]),
  transition('* => void', [
    style({ backgroundColor: 'orange' }),
    animate('2000ms ease-out', style({ opacity: 0 })),
  ]),
]);

// Example 4
// States
trigger('fade', [
  state('void', style({ opacity: 0 })),
  transition('void => *', [animate('2000ms ease-in')]),
  transition('* => void', [animate('2000ms ease-out')]),
]);

// Example 4
// Multiple state-change expressions
trigger('fade', [
  state('void', style({ opacity: 0 })),
  transition('void => *, * => void', [animate('2000ms ease')]),
]);

// Example 5
// Aliases
trigger('fade', [
  state('void', style({ opacity: 0 })),
  transition(':enter, :leave', [animate('2000ms ease')]),
]);

// Example 6
// Stagger
trigger('fade', [
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
              transform: 'translateY(-75px)',
              offset: 0,
            }),
            style({
              opacity: 0.5,
              transform: 'translateY(35px)',
              offset: 0.3,
            }),
            style({ opacity: 1, transform: 'translateY(0px)', offset: 1 }),
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
              transform: 'translateY(0px)',
              offset: 0,
            }),
            style({
              opacity: 0.5,
              transform: 'translateY(35px)',
              offset: 0.3,
            }),
            style({
              opacity: 0,
              transform: 'translateY(-75px)',
              offset: 1,
            }),
          ])
        ),
      ]),
      { optional: true }
    ),
  ]),
]),

  /*
IMPORTANT NOTE:
For best performance you should only animate transform & opacity properties.

possibly animate: color, border-style, vivibility, background, text-decoration, background-image, background-position, background-repeat, outline-color, outline, outline-style.

avoid animating: width, heigt, padding, margin, display, border-width, border, top, position, font-size, float.
*/

  // Example 6
  // Fly-in fly-out
  trigger('flyInOut', [
    transition(':enter', [
      style({ transform: 'translateX(-100%)' }),
      animate('500ms'),
    ]),
    transition(':leave', [
      animate('500ms', style({ transform: 'translateX(100%)' })),
    ]),
  ]);


