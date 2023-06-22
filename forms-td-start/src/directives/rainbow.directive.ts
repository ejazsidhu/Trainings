import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {

  colorsArray =[
    'darksalmon',
    'hotpink',
    'lightskyblue',
    'goldenrod',
    'peachpuff',
    'mediumspringgreen',
    'cornflowerblue',
    'blanchedalmond',
    'lightslategrey'
  ];

  @HostBinding('style.color') color!:string;
  @HostBinding('style.border-color') borderColor!:string;

  @HostListener('keyup') newColor(){
    const possibleColor = Math.floor(Math.random() * this.colorsArray.length);
    this.color = this.borderColor = this.colorsArray[possibleColor];
  }


}
