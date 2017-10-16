import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs1',
  templateUrl: 'tabs1.html',
})
export class Tabs1Page {

  tab1Root='Tabs1Tab1Page';
  tab2Root='Tabs1Tab2Page';
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
}
