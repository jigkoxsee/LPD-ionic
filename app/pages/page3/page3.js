import {Page,Alert,NavController,NavParams} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/page3/page3.html'
})

export class Page3 {
static get parameters() {
    return [[NavController],[NavParams]];
  }
  constructor(nav,navParams) {
    this.nav=nav;
    this.navParams=navParams;
    let place = this.navParams.get('item');
    console.log("Place : "+place);
    if (place){
      this.items = [
        { name: place, desc: "รายละเอียดสถานที่ท่องเที่ยว", time: "1" }
      ];
    }else{
      this.items = [
        { name: "เขื่อนรัชประภา", desc: "", time: "24" },
        { name: "น้ำตกตายาย", desc: "", time: "1" },
        { name: "อนุสรณ์ซึนามิ", desc: "", time: "1" },
        { name: "น้ำพุร้อนบ่อดาน", desc: "", time: "1" },
        { name: "อุทยานสิรินาถ", desc: "", time: "2" },
        { name: "เดรี่ฮัทฟาร์ม", desc: "", time: "2" },
      ];
    }
  }

  deletePlace(item) {
    console.log("Delete"+item);
    let alert = Alert.create({
      title: 'Remove?',
      message: 'Remove '+item.name+' from trip?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.items.splice(this.items.indexOf(item), 1);
          }
        }
      ]
    });

    this.nav.present(alert);
    

  }
  
  doPrompt(item) {
    let alert = Alert.create({
      title: 'Login',
      message: "Enter a name for this new album you're so keen on adding",
      inputs: [
        {
          name: 'time',
          placeholder: 'Stop by time'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log(data);
            this.items[this.items.indexOf(item)].time=data.time;
          }
        }
      ]
    });

    this.nav.present(alert);
  }
}
