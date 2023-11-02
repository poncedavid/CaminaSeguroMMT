import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import{ HttpClient } from '@angular/common/http';
import{ map } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';




@Component({
  selector: 'app-sedes',
  templateUrl: './sedes.page.html',
  styleUrls: ['./sedes.page.scss'],
})
export class SedesPage implements OnInit {

  
  sedes: any = [];

  constructor(
    private router: Router,
    private http: HttpClient,
    public toastController: ToastController) { }

  ngOnInit() {
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

}

