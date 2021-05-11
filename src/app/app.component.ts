import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';

import { flyInOut } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', [animate('2000ms ease')]),
    ]),
    flyInOut,
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
      this.items.splice(index, 1);
    }
  }

  toggleShowHide() {
    this.isVisible = !this.isVisible;
  }
}
