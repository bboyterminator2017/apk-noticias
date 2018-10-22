import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Noticia } from '../../model/noticia';

/**
 * Generated class for the NoticiaCompletaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-noticia-completa',
  templateUrl: 'noticia-completa.html',
})
export class NoticiaCompletaPage {

  noticia : Noticia;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoticiaCompletaPage');
  }

}
