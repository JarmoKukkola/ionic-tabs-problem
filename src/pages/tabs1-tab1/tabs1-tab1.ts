import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs1-tab1',
  templateUrl: 'tabs1-tab1.html',
})
export class Tabs1Tab1Page {

  nextPage='Tabs2Page';

  constructor(public navCtrl: NavController, public app:App) {
  }

  one(){
    this.navCtrl.push(this.nextPage);
  }

  two(){
    this.navCtrl.setRoot(this.nextPage);
  }

  three(){
    this.app.getRootNavs()[0].push(this.nextPage);
  }

  four(){
    this.app.getRootNavs()[0].setRoot(this.nextPage);
  }

  five(){
    this.app.getRootNav().push(this.nextPage);
  }
  
  six(){
    this.app.getRootNav().setRoot(this.nextPage);
  }

  seven(){
    this.app.getActiveNav().push(this.nextPage);
  }

  eight(){
    this.app.getActiveNav().setRoot(this.nextPage);
  }

  nine(){
    this.app.getActiveNavs()[0].push(this.nextPage);
  }

  ten(){
    this.app.getActiveNavs()[0].setRoot(this.nextPage);
  }
}
