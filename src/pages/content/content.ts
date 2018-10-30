import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Gyroscope, GyroscopeOrientation } from '@ionic-native/gyroscope';

@IonicPage()
@Component({
  selector: 'page-content',
  templateUrl: 'content.html'
})
export class ContentPage {

  result: String;

  constructor(public navCtrl: NavController,
  public gyroscope: Gyroscope) {
    this.result = "han";

    this.gyroscope.watch()
   .subscribe((orientation: GyroscopeOrientation) => {
      this.result = orientation.x + " " + orientation.y + " " + orientation.z;
   });
   }

  

}
