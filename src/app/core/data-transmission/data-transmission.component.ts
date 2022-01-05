import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-transmission',
  templateUrl: './data-transmission.component.html',
  styleUrls: ['./data-transmission.component.less']
})
export class DataTransmissionComponent implements OnInit {

  // public isShowOneMoth: boolean = false;
  // public isShowThreeMoth: boolean = true;
  // public isShowOneYear: boolean = true;
  // public isShowOneYearBerfore: boolean = true;
  // public checkValue:boolean = true;
  // public dataSet: any[] = [
  //   {
  //     key: '1',
  //     name: 'John Brown',
  //     age: 32,
  //     address: 'New York No. 1 Lake Park'
  //   },
  //   {
  //     key: '2',
  //     name: 'Jim Green',
  //     age: 42,
  //     address: 'London No. 1 Lake Park'
  //   },
  //   {
  //     key: '3',
  //     name: 'Joe Black',
  //     age: 32,
  //     address: 'Sidney No. 1 Lake Park'
  //   }
  // ];
  public time: string = "一年内";
  public isShow: boolean = true;
  public checked: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  public underOrder() { }
  public underInvoice() { }

}
