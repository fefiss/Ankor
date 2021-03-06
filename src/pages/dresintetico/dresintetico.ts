import {Component} from '@angular/core';
import {IonicPage} from "ionic-angular";
import {NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the DresinteticoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@IonicPage()
@Component({
  selector: 'dresintetico',
  templateUrl: 'dresintetico.html'
})
export class DresinteticoComponent {

  text: string;
  months: Array<{ month: string, year: number, actMonth: boolean }>;
  loadProgress: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.loadProgress = 46;
  }

  goBack() {
    this.navCtrl.setRoot('DashboardPage');
  }

  ionViewWillEnter() {
    var date = new Date();
    var monthIndex = date.getMonth();
    this.months = [];
    const meses = [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro'];

    const year = date.getFullYear();
    var actualMonth = meses[monthIndex]; //meses[monthIndex - 1]

    for (let p = 0; p < meses.length; p++) {
      this.months.push({
        month: meses[p],
        year: year,
        actMonth: actualMonth == meses[p]
      });
    }
  }

}

