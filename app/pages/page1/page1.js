import {Page, NavController} from 'ionic-angular';
import {Page3} from '../page3/page3';

@Page({
  templateUrl: 'build/pages/page1/page1.html',
})

export class Page1 {

  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
  }

  cardClick(e) {
    this.nav.push(Page3);
  }
}
