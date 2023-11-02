import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-sede',
  templateUrl: './sede.page.html',
  styleUrls: ['./sede.page.scss'],
})
export class SedePage implements OnInit {

  id: any;
  finalId: any;
  sedes: any = [];
  name: any;
  image: any;
  desc: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient

  ) { }

  ngOnInit() {

    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.finalId = this.id - 1;
    console.log(this.id);

    this.getSedes().subscribe(res =>{
      console.log('Res',res)
      this.sedes = res;
      this.name = this.sedes[this.finalId].name;
      console.log(this.name);
      this.image = this.sedes[this.finalId].image;
      this.desc = this.sedes[this.finalId].desc;
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

}
