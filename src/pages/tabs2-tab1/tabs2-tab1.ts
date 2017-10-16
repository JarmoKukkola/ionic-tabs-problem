import { Component } from '@angular/core';
import { IonicPage, NavController, App } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs2-tab1',
  templateUrl: 'tabs2-tab1.html',
})
export class Tabs2Tab1Page {

  previousPage='Tabs2Page';
  
    constructor(public navCtrl: NavController, public app:App) {
    }
  
    one(){
      this.navCtrl.pop();
    }
  
    two(){
      this.navCtrl.setRoot(this.previousPage);
    }
  
    three(){
      this.app.getRootNavs()[0].pop();
    }
  
    four(){
      this.app.getRootNavs()[0].setRoot(this.previousPage);
    }
  
    five(){
      this.app.getRootNav().pop();
    }
    
    six(){
      this.app.getRootNav().setRoot(this.previousPage);
    }
  
    seven(){
      this.app.getActiveNav().pop();
    }
  
    eight(){
      this.app.getActiveNav().setRoot(this.previousPage);
    }
  
    nine(){
      this.app.getActiveNavs()[0].pop()
    }
  
    ten(){
      this.app.getActiveNavs()[0].setRoot(this.previousPage);
    }
}
