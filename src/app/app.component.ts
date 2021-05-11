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
import { Component } from '@angular/core';

// import { flyInOut } from './animations';
// import { staggerSlide } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(2000, style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class AppComponent {
  items = [];

  isVisible = false;

  constructor() {
    this.items = ['milk', 'bread', 'eggs', 'apples', 'bananas', 'oranges'];
  }

  placeInCart(item) {
    const index = this.items.indexOf(item);
    if (index > -1) {
      console.log('Removed:', item);
      this.items.splice(index, 1);
    }
  }

  toggleShowHide() {
    this.isVisible = !this.isVisible;
  }
}
