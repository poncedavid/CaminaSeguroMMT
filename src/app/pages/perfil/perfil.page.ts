import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  users: any = [];
  permission: boolean = true;

  constructor(
    private router: Router,
    private http: HttpClient) { }

  ngOnInit() {

    this.permission;


    this.getUsers().subscribe(res =>{
      this.users = res;
    });
  }

  irInicio(){
    this.router.navigate(['/home'])
  }

  getUsers(){
    return this.http
    .get("../../../assets/files/perfiles.json")
    .pipe(
      map((res:any) => {
        return res.data;
      })
    )
  }

}
