import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

import { AlertController,NavController } from '@ionic/angular';

@Component({
  selector: 'app-email',
  templateUrl: './email.page.html',
  styleUrls: ['./email.page.scss'],
})
export class EmailPage implements OnInit {

  formularioRegistro: FormGroup;
  
  constructor(
    public fb: FormBuilder,
    private router: Router,
    public alertController: AlertController,
    public navCtrl: NavController
  ) {
    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required),
      'confirmacionPassword': new FormControl("", Validators.required)
    });
  }

  ngOnInit() {
  }

  irTutorial() {
    this.router.navigate(['/home/tuto01'])
  }

  registroMail() {
    this.router.navigate(['/registro/email']);
  }

  async guardar() {
    var f = this.formularioRegistro.value;
    
    if (this.formularioRegistro.invalid) {
      const alert = await this.alertController.create({
        message: 'Debe completar todos los campos',
        buttons: ['Aceptar']
      });
      await alert.present();
      return;
    }
    var usuario = {
      nombre : f.nombre,
      password : f.password
  }

  localStorage.setItem('usuario', JSON.stringify(usuario));
  localStorage.setItem('ingreso', 'true');
  this.navCtrl.navigateRoot('home');
}
}