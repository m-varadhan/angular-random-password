import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-random-password',
  templateUrl: './random-password.component.html',
  styleUrls: ['./random-password.component.css']
})
export class RandomPasswordComponent implements OnInit {
  mouseOut: string = "No Out";
  randomSeed: number = 0;
  randomString: string = '';
  randomNumber: number = 0;
  randomLength: number = 10;
  constructor() { }

  ngOnInit() {
  }

  getRandom() {
    this.randomString =  Math.random().toString((this.randomSeed%(36-this.randomLength))+this.randomLength).slice(-(this.randomLength)) ;
    this.randomNumber =  Math.ceil(Math.random() * Math.pow(10,this.randomLength) * this.randomSeed)%Math.pow(10,this.randomLength);
  }

  @HostListener('document:mousemove', ['$event']) 
  onMouseMove(e: MouseEvent) {
    if(e) {
      this.mouseOut = e.clientX + ":" + e.clientY + ":" + e.screenX + ":" + e.screenY;
      this.randomSeed += e.clientX + e.clientY +  e.screenX + e.screenY ;
    }
  }

}