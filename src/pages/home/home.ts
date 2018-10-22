import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Noticia } from '../../model/noticia';
import { NOTICIAS } from '../../config/api.config';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  noticias : Noticia[] = NOTICIAS;

  constructor(public navCtrl: NavController) {

  }

  navNoticiaCompleta(noticia : Noticia){ 
    this.navCtrl.push("NoticiaCompletaPage",{noticia : noticia});
  }



}
