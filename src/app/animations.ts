import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export let fade1 = trigger('fade', [
  style({ backgroundColor: 'red'}),
  transition('void => *', [
    style({ opacity: 0 }),
    animate(2000), style({ opacity: 1 }) ]),
]);

export let fade2 = trigger('fade', [
  // style({ backgroundColor: 'red' }), <=== remove and use default
  transition('void => *', [
    style({ opacity: 0 }),
    animate(2000, style({ opacity: 1 }) ),
  ]),
]);

export let fade22 = trigger('fade', [
  // state('void', style({ opacity: 0 })),
  transition('void => *', [style({ opacity: 0 }), animate(2000)]),
  transition('* => void', [
    style({ backgroundColor: 'orange' }),
    animate(2000, style({ backgroundColor: 'orange', opacity: 0 })),
  ]),
]);

export let fade3 = trigger('fade', [
  // state('void', style({ opacity: 0 })),
  transition('void => *', [style({ opacity: 0 }), animate(2000)]),
  transition('* => void', [
    style({ backgroundColor: 'orange' }),
    animate(2000, style({ backgroundColor: 'orange', opacity: 0 })),
  ]),
]);
export let fade4 = trigger('fade', [
  // state('void', style({ opacity: 0 })),
  transition('void => *', [style({ opacity: 0 }), animate(2000)]),
  transition('* => void', [
    style({ backgroundColor: 'orange' }),
    animate(2000, style({ backgroundColor: 'orange', opacity: 0 })),
  ]),
]);
export let fade5 = trigger('fade', [
  // state('void', style({ opacity: 0 })),
  transition('void => *', [style({ opacity: 0 }), animate(2000)]),
  transition('* => void', [
    style({ backgroundColor: 'orange' }),
    animate(2000, style({ backgroundColor: 'orange', opacity: 0 })),
  ]),
]);
export let fade6 = trigger('fade', [
  // state('void', style({ opacity: 0 })),
  transition('void => *', [style({ opacity: 0 }), animate(2000)]),
  transition('* => void', [
    style({ backgroundColor: 'orange' }),
    animate(2000, style({ backgroundColor: 'orange', opacity: 0 })),
  ]),
]);
export let fade7 = trigger('fade', [
  // state('void', style({ opacity: 0 })),
  transition('void => *', [style({ opacity: 0 }), animate(2000)]),
  transition('* => void', [
    style({ backgroundColor: 'orange' }),
    animate(2000, style({ backgroundColor: 'orange', opacity: 0 })),
  ]),
]);
