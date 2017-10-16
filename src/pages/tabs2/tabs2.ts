import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs2',
  templateUrl: 'tabs2.html',
})
export class Tabs2Page {
  tab1Root = 'Tabs2Tab1Page';
  tab2Root = 'Tabs2Tab2Page';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
}
