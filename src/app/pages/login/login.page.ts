import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'; // import Validators
import { AlertController } from '@ionic/angular'; // import AlertController



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // token ="CLAVE_TOKEN";
  formularioLogin: FormGroup; // declare formGroup

  constructor(
    private router: Router,
    public fb: FormBuilder, // inject FormBuilder
    public alertController: AlertController
  ) {
    this.formularioLogin = this.fb.group({ // create a formGroup 
      email: new FormControl('', [Validators.required, Validators.email]), // declare email field
      password: new FormControl('', [Validators.required, Validators.minLength(6)]) // declare password field
    });
  }

  ngOnInit() {
  }


  irRegistro() {
    this.router.navigate(['/registro'])
  }


  // async ingresar() {

  //   var f = this.formularioLogin.value;

  //   var usuario = JSON.parse(localStorage.getItem('usuario'));

  //   if (usuario.email == f.email && usuario.password == f.password) {
  //     console.log("Usuario correcto");
  //   } else {
  //     const alert = await this.alertController.create({
  //       header: 'Datos incorrectos',
  //       message: 'Los datos que ingresastes son incorrectos',
  //       buttons: ['Aceptar']
  //     });
  //     await alert.present();
  //   }



  // }

  
}





// login(){
//   localStorage.setItem('token', this.token);
//   this.router.navigate(['/home']);
// }
