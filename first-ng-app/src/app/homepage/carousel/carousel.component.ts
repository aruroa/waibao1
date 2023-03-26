import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Message} from "primeng/api";
import {HttpClient} from "@angular/common/http";
import {Route, Router} from "@angular/router";
import {trigger, style, transition, query, animate, group} from '@angular/animations';

interface OnDestroy {
}

@Component({

    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.css']

})
export class CarouselComponent {
  title = 'untitled2905';
  timer: any;
  imgList = [
    {
      icon: 'https://p1.itc.cn/images01/20220407/8333254753684f5f86700466da150504.jpeg',
      text: '社区风采1',
    },
    {
      icon: 'https://img.dz19.net/forum/201307/10/114313yjjww26wgw2gjmm1.jpg',
      text: '社区风采2',
    }, {
      icon: 'https://img2.baidu.com/it/u=1481024364,91457243&fm=253&fmt=auto&app=120&f=JPEG?w=967&h=448',
      text: '防疫',
    }
  ]; // 图片数组
  img = ''; // 图片路径
  text = ''; // 图片路径
  id = 0; // 默认id 从零开始

  ngOnInit() {
    this.gif();
  }

  gif() {
    // 页面显示 加载默认图片
    this.img = this.imgList[this.id].icon;
    // 设置一个定时器，达到动画切换效果
    this.timer = setInterval(() => {
      // 如果当前图片是最后一张就把id清零 从第一张开始
      if (this.id === this.imgList.length - 1) {
        this.id = 0;
        this.img = this.imgList[this.id].icon;
        this.text = this.imgList[this.id].text;
      } else {
        // 如果当前不是最后一张 就切换下一张
        this.id += 1;
        this.img = this.imgList[this.id].icon;
        this.text = this.imgList[this.id].text;
      }
    }, 1500)
  }

  getData(url:string){
    console.log(url);
  }
}

