import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  numberOne:number=0;
  numberTwo:number=0;
  result:number=0;

  constructor() { }

  ngOnInit(): void {
  }

  Suma():void{
    this.numberOne = +(<HTMLInputElement>document.getElementById('InumberOne')).value
    this.numberTwo = +(<HTMLInputElement>document.getElementById('InumberTwo')).value
    this.result = this.numberOne + this.numberTwo;
  }
  Resta():void{
    this.InitializeNumbers();    
    this.result = this.numberOne - this.numberTwo;
  }
  Division():void{    
    this.InitializeNumbers();
    this.result = this.numberTwo > 0 ? this.numberOne / this.numberTwo : 0;
  }
  Multiplicacion():void{    
    this.InitializeNumbers();
    this.result = this.numberOne * this.numberTwo;
  }

  InitializeNumbers():void{
    this.numberOne = +(<HTMLInputElement>document.getElementById('InumberOne')).value
    this.numberTwo = +(<HTMLInputElement>document.getElementById('InumberTwo')).value
  }

}
