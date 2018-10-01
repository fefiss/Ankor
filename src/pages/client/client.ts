import { Component, ViewChild } from '@angular/core';

import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Chart } from 'chart.js';
/**
 * Generated class for the ClientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-client',
  templateUrl: 'client.html',
})

export class ClientPage {

  clientName : string;

  clientData: object;

  @ViewChild('lineClientCanvas') lineClientCanvas;

  lineClient: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private loadingCtrl: LoadingController) {
    this.clientName = navParams.get('name');
    var clientid = navParams.get('id');
    this.clientData = {
      medioMensual : 'R$ 480 mil',
      mesActual : 'R$ 563 mil',
      tendencia : true
    };
  }

  ionViewWillEnter() {
    this.clientName = this.navParams.get('name');
    console.log(this.clientName);
    this.clientData = {
      medioMensual : 'R$ 480 mil',
      mesActual : 'R$ 563 mil',
      tendencia : false
    };

  }
  ionViewDidLoad() {
    this.presentLoadingDefault();
   

    
    setTimeout(() => {
      this.renderClientChart();

      for (var id in Chart.instances) {
        Chart.instances[id].resize()
      }

    }, 3000);
  }


  renderClientChart() {

    this.lineClient = new Chart(this.lineClientCanvas.nativeElement, {

      type: 'line',
      data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        datasets: [
          {
            strokeColor: "#FFFFFF",
            pointColor: "#FFFFFF",
            pointStrokeColor: "#FFFFFF",
            pointHighlightFill: "#FFFFFF",
            data: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          yAxes: [{
            display: false,
            gridLines: {
              drawBorder: false,
              display: false
            },
            
          }],
          xAxes: [{
            color : '#73A5B3',
            gridLines: {
              
              drawBorder: false,
              display: false
            },
            
          }]

        }
      },

    });
  }


  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 5000);
  }



  goToPrev(){
    this.navCtrl.pop();
  }
} 
