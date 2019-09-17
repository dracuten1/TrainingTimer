import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

import { Sound } from './tools/sound';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private nativeAudio: NativeAudio
  ) {
    this.initializeApp();
    this.nativeAudio.preloadSimple(Sound.SUCCESS, './assets/sound/sucess.wav').then(this.onSuccess, this.onError);
    this.nativeAudio.preloadSimple(Sound.CONTINUE, './assets/sound/continues.wav').then(this.onSuccess, this.onError);
    this.nativeAudio.preloadSimple(Sound.PAUSE, './assets/sound/pause.wav').then(this.onSuccess, this.onError);
    this.nativeAudio.preloadSimple(Sound.TICK, './assets/sound/tick.wav').then(this.onSuccess, this.onError);
  }
  onSuccess(e) {
    console.log(e);
  }
  onError(e) {
    console.log(e);
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
