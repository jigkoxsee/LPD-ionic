import {Page, Searchbar} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/page2/page2.html'
})
export class Page2 {
  constructor() {
    this.searchQuery = '';
  }

  initializeItems() {
    this.items = [
      'Angular 1.x',
      'Angular 2',
      'ReactJS',
      'EmberJS',
      'Meteor',
      'Typescript',
      'Dart',
      'CoffeeScript'
    ];
  }

  searchBoxClear(e) {
    this.items = [];
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
