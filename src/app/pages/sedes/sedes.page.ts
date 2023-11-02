import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import{ HttpClient } from '@angular/common/http';
import{ map } from 'rxjs/operators';
import { AlertController, ToastController } from '@ionic/angular';




@Component({
  selector: 'app-sedes',
  templateUrl: './sedes.page.html',
  styleUrls: ['./sedes.page.scss'],
})
export class SedesPage implements OnInit {


  token = localStorage.getItem('token');
  sedes: any = [];

  constructor(
    private router: Router,
    private http: HttpClient,
    public toastController: ToastController,
    public alertController: AlertController  ) { }

  ngOnInit() {

    console.log('token', this.token);
    //localStorage.removeItem('token');
    localStorage.clear();
    this.getSedes().subscribe(res =>{
      console.log('Res',res)
      this.sedes = res;
    });
  }

  getSedes(){
    return this.http
    .get("../../../assets/files/sedes.json")
    .pipe(
      map((res:any) => {
        return res.data;
      })
    )
  }
  async presentToast1() {
    const toast = await this.toastController.create({
      message: 'Seleccionaste la sede.',
      duration: 500,
      position: "middle",
    });
    toast.present();
  }
  async presentAlert1() {
    const alert = await this.alertController.create({
      header: 'Borrar Sede',
      message: 'Se borrará la sede seleccionada',
      buttons: ['Cancelar', 'Borrar'],
      
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);


}
  async presentAlert2() {
    const alert = await this.alertController.create({
      header: 'Borrar Sede',
      message: '¿Está seguro que desea borrar la sede seleccionada?',
      buttons: 
      [{
        text: 'no',
        handler: () => {
          console.log('click en no');
        }
        
      },
      {
        text: 'si',
        handler: () => {
        console.log('click en si');
      }
      }],
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);


}

}