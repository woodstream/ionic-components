import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the IndexListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-index-list",
  templateUrl: "index-list.html"
})
export class IndexListPage {
  vm: {
    selectedValue: any;
    groups: any[];
  } = {
    selectedValue: '',
    groups: []
  };
  keys: any[] = ["D", "E", "F", "G", "H"];
  currentKeyIndex: number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.vm.groups = [
      {
        key: "A",
        items: [{ name: "Ada", value: "Ada" }, { name: "Adam", value: "Adam" }]
      },
      {
        key: "B",
        items: [
          { name: "Bily", value: "Bily" },
          { name: "Bety", value: "Bety" }
        ]
      },
      {
        key: "C",
        items: [{ name: "Candy", value: "Candy" }]
      }
    ];
  }

  ionViewDidLoad() {

  }

  onChangeSource(){
    if(this.currentKeyIndex < this.keys.length){
      this.vm.groups.push({
        key: this.keys[this.currentKeyIndex],
        items: [{ name: "Demo", value: "Demo" }]
      });
      this.currentKeyIndex++;
    }else{
      alert('到头了');
    }
  }
}
