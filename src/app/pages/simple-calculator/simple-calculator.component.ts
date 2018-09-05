import { Component, OnInit } from '@angular/core';
import { Models } from '../../models/simple-calculation';

@Component({
  selector: 'app-simple-calculator',
  templateUrl: './simple-calculator.component.html',
  styleUrls: ['./simple-calculator.component.css']
})
export class SimpleCalculatorComponent implements OnInit {
  public calculationData: Models.SimpleCalculation;

  constructor() { }

  ngOnInit() {
    // todo write factory
    this.calculationData = {
      income: 2000,
      savings: 500,
      result: null,
      onChange: this.onCalculate
    };
  }

  /**
   * Run calculation on input
   */
  public onCalculate(): void {

  }

}
