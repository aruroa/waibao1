import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {PunchApiService} from "../../core/api/punch-api.service";
import {Observable} from "rxjs";
import {Punch} from "../../shared/model/punch";
declare var google: any;
@Component({
  selector: 'app-punch',
  templateUrl: './punch.component.html',
  styleUrls: ['./punch.component.css']
})
export class PunchComponent implements OnInit {
  userId :number;
  today:number;
  punch:Punch;
  use:number;


  constructor(private readonly httpClient: HttpClient,
              private readonly _punchService: PunchApiService,
              private router: Router) { }
  ngOnInit(): void {
    //userid不同地图
    this.userId=Number(localStorage.getItem('USERID'));
    console.log(document.getElementById("0"));
    // @ts-ignore
    document.getElementById("0").style.backgroundImage="url(../../../assets/photos/punch2.jpg)"
    if(this.userId==4001){
     // @ts-ignore
      document.getElementById("0").style.backgroundImage="url(../../../assets/photos/punch1.jpg)"
      this.use=1;
    }else if(this.userId==4002){
      // @ts-ignore
      document.getElementById("0").style.backgroundImage="url(../../../assets/photos/punch2.jpg)"
      this.use=2;
    }else if(this.userId==4003){
      // @ts-ignore
      document.getElementById("0").style.backgroundImage="url(../../../assets/photos/punch3.jpg)"
      this.use=3;
    }
    //未打卡insert0数据
    this.today=Number(this._punchService.count(this.userId));
    console.log("count "+this.today)
    if(isNaN(this.today)){
      console.log("jinru")
      this._punchService.addPunch(this.userId).subscribe();
    }
    //显示打卡图标暗亮
    this._punchService.getPunch(this.userId).subscribe(res => {
      this.punch = res;
    })
    if(this.punch.building1==1){
      // @ts-ignore
      document.getElementById(this.use+".1").style.backgroundImage="url(../../../assets/photos/punchicon2.jpg)"
    }else if(this.punch.building2==1){
      // @ts-ignore
      document.getElementById(this.use+".2").style.backgroundImage="url(../../../assets/photos/punchicon2.jpg)"
    }else if(this.punch.building3==1){
      // @ts-ignore
      document.getElementById(this.use+".3").style.backgroundImage="url(../../../assets/photos/punchicon2.jpg)"
    }else if(this.punch.building4==1){
      // @ts-ignore
      document.getElementById(this.use+".4").style.backgroundImage="url(../../../assets/photos/punchicon2.jpg)"
    }else if(this.punch.building5==1){
      // @ts-ignore
      document.getElementById(this.use+".5").style.backgroundImage="url(../../../assets/photos/punchicon2.jpg)"
    }else if(this.punch.lobby==1){
      // @ts-ignore
      document.getElementById(this.use+".0").style.backgroundImage="url(../../../assets/photos/punchicon2.jpg)"
    }
  }
change(res:number ){
 if(res=0){
   this._punchService.punchUp(this.userId,"lobby").subscribe()
   // @ts-ignore

 }else if(res=1){
   this._punchService.punchUp(this.userId,"building1").subscribe()
 }else if(res=2){
   this._punchService.punchUp(this.userId,"building2").subscribe()
 }else if(res=3){
   this._punchService.punchUp(this.userId,"building3").subscribe()
  }else if(res=4){
   this._punchService.punchUp(this.userId,"building4").subscribe()
  }else if(res=5){
   this._punchService.punchUp(this.userId,"building5").subscribe()
    }
  // @ts-ignore
  document.getElementById(this.use+"."+"res").style.backgroundImage="url(../../../assets/photos/punchicon2.jpg)"
}
}
