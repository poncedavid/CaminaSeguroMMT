import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import{ HttpClient } from '@angular/common/http';
import{ map } from 'rxjs/operators';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {

  users: any = [];
  permission: boolean = true;

  searchedUser: any;

  constructor(
    private router: Router,
    private http: HttpClient) { }

  ngOnInit() {

    this.permission;

    this.getUsers().subscribe(res =>{
      this.users = res;
      this.searchedUser = this.users;

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



  searchCustomer(event:any){
    const text = event.target.value;
    this.searchedUser = this.users;

    if(text && text.trim() !== ''){
      this.searchedUser = this.searchedUser.filter((user:any) => {
        return user.name.toLowerCase().indexOf(text.trim().toLowerCase()) > -1;
      });
    }
  }

  doRefresh(event:any){

    this.getUsers();
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }

}
