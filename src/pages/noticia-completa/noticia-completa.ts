import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Noticia } from '../../model/noticia';
import { NOTICIAS, NOTICIASC } from '../../config/api.config';


@IonicPage()
@Component({
  selector: 'page-noticia-completa',
  templateUrl: 'noticia-completa.html',
})
export class NoticiaCompletaPage {

  noticia-completa : NoticiaCompleta[] = NOTICIASC;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  

}
