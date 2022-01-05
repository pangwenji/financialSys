import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bilateral-agreement',
  templateUrl: './bilateral-agreement.component.html',
  styleUrls: ['./bilateral-agreement.component.less']
})
export class BilateralAgreementComponent implements OnInit {

  public checkValue: boolean = true;
  public listOfData: Array<any> = [
    {
      dingDanTime: "2021-09-12 17:09:08",
      dingDanNumber: "wx0000000000",
      userName:"张珊1",
      dataList: [
        { number: 1, time: new Date().toLocaleDateString(), invoidNumber: "GN7391900", USD: "USD", money: "99", endTime: "2021-09-21", status: "状态", },
        { number:2,time:new Date().toLocaleDateString(),invoidNumber:"GN7391900",USD:"USD",money:"99",endTime:"2021-09-21",status:"状态"},
        { number:3,time:new Date().toLocaleDateString(),invoidNumber:"GN7391900",USD:"USD",money:"99",endTime:"2021-09-21",status:"状态"},
        { number:4,time:new Date().toLocaleDateString(),invoidNumber:"GN7391900",USD:"USD",money:"99",endTime:"2021-09-21",status:"状态"},
        { number:5,time:new Date().toLocaleDateString(),invoidNumber:"GN7391900",USD:"USD",money:"99",endTime:"2021-09-21",status:"状态"},
        { number:6,time:new Date().toLocaleDateString(),invoidNumber:"GN7391900",USD:"USD",money:"99",endTime:"2021-09-21",status:"状态"},
        { number:7,time:new Date().toLocaleDateString(),invoidNumber:"GN7391900",USD:"USD",money:"99",endTime:"2021-09-21",status:"状态"},
      ]
    },
    {
      dingDanTime: "2021-09-12 17:09:08",
      dingDanNumber: "wx0000000000",
      userName:"张珊2",
      dataList: [
        { number: 1, time: new Date().toLocaleDateString(), invoidNumber: "GN7391900", USD: "USD", money: "99", endTime: "2021-09-21", status: "状态", },
        { number:2,time:new Date().toLocaleDateString(),invoidNumber:"GN7391900",USD:"USD",money:"99",endTime:"2021-09-21",status:"状态"},
        { number:3,time:new Date().toLocaleDateString(),invoidNumber:"GN7391900",USD:"USD",money:"99",endTime:"2021-09-21",status:"状态"},
        { number:4,time:new Date().toLocaleDateString(),invoidNumber:"GN7391900",USD:"USD",money:"99",endTime:"2021-09-21",status:"状态"},
        { number:5,time:new Date().toLocaleDateString(),invoidNumber:"GN7391900",USD:"USD",money:"99",endTime:"2021-09-21",status:"状态"},
        { number:6,time:new Date().toLocaleDateString(),invoidNumber:"GN7391900",USD:"USD",money:"99",endTime:"2021-09-21",status:"状态"},
        { number:7,time:new Date().toLocaleDateString(),invoidNumber:"GN7391900",USD:"USD",money:"99",endTime:"2021-09-21",status:"状态"},
      ]
    }
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
