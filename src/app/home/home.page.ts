import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  count : number = 0;
  limit : number = 10;
  constructor() {}

  public increment() : void{
    if(this.count < this.limit)
    this.count++;
  }

  public decrement() : void{
    if(this.count > 0)
    this.count--;
  }
}
