import {Page, Searchbar,NavController,NavParams} from 'ionic-angular';
import {Page3} from '../page3/page3';

@Page({
  templateUrl: 'build/pages/page2/page2.html'
})
export class Page2 {
  static get parameters() {
    return [[NavController]];
  }
  constructor(nav) {
    this.nav=nav;
    this.searchQuery = '';
  }

  initializeItems() {
    this.items = [
      'Ratchaprapha dam',
      'Mae yai water fall',
      'Tsunami monument',
      'Dairy hut farm',
      'Sirinat',
      'Laem prom tep',
      'Laem hin',
      'Pa tong beach'
    ];
  }

  searchBoxClear() {
    this.items = [];
  }
  
  searchClick(item){
    this.nav.push(Page3,{ item: item });
  }

  getItems(searchbar) {
    // set q to the value of the searchbar
    var q = searchbar.value;

    // if the value is an empty string don't filter the items
    if (q.trim() == '') {
      return;
    }
    // Reset items back to all of the items
    this.initializeItems();
    this.items = this.items.filter((v) => {
      if (v.toLowerCase().indexOf(q.toLowerCase()) > -1) {
        return true;
      }
      return false;
    });
  }

  

}
