import { Component } from '@angular/core';
import { AlertController, NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

    constructor(public navCtrl: NavController, private alertCtrl: AlertController, private platform: Platform) {
 
    }
    
    async showPlatform() {
        let text = 'I run on: ' + this.platform.platforms();
        const alert = await this.alertCtrl.create({
            header: 'My Home',
            subHeader: text,
            // message: 'This is an alert message.',
            buttons: ['OK']
        });
        alert.present();
      }


}
