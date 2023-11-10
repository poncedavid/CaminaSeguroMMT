import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { AlertController } from '@ionic/angular'; // import AlertController


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;

  constructor(
    public fb: FormBuilder,
    public alertController: AlertController) {
    this.formularioRegistro = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmacionPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  ngOnInit() {
  }




  async guardar(){

    var f = this.formularioRegistro.value;
    if (this.formularioRegistro.valid) {
      const alert = await this.alertController.create({
        header : 'Datos incompletos',
        message: 'Por favor ingrese todos los datos',
        buttons: ['Aceptar']
  });


  await alert.present();
  return;
}


var usuario = {
  email: f.email,
  password: f.password
}

localStorage.setItem('usuario', JSON.stringify(usuario));
}
}