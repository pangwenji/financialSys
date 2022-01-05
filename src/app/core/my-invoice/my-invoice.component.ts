import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-invoice',
  templateUrl: './my-invoice.component.html',
  styleUrls: ['./my-invoice.component.less']
})
export class MyInvoiceComponent implements OnInit {

  public tiemArray: Array<any> = [
    { label:"最近一年内",value:"最近一年内" },
    { label:"最近一个月内",value:"最近一个月内" },
    { label:"最近三个月内",value:"最近三个月内"},
  ]
  public statusArray: Array<any> = [
    {label:"全部发票",value:"全部发票"},
    {label:"未确认",value:"未确认"},
    {label:"已确认",value:"已确认"},
    {label:"已拒绝",value:"已拒绝"}
  ]
  public time: string = "最近一年内"
  public status:string = "全部发票"
  public listOfData: Array<any> = [];
  
  public isShow: boolean = false;
  
  public list: Array<any> = [
    {
      time: "2021-09-21",
      no: "W9999999",
      buyerNamer:"万达公司",
      data: [
        {time:"2021-08-23",invoiceNo:"46567568686868",acount:"USD",settlementAmount:"576683",paymentDueDate:"2021-12-12",status:0,action:""},
        {time:"2021-08-23",invoiceNo:"46567568686868",acount:"USD",settlementAmount:"576683",paymentDueDate:"2021-12-12",status:0,action:""},
        {time:"2021-08-23",invoiceNo:"46567568686868",acount:"USD",settlementAmount:"576683",paymentDueDate:"2021-12-12",status:0,action:""},
        {time:"2021-08-23",invoiceNo:"46567568686868",acount:"USD",settlementAmount:"576683",paymentDueDate:"2021-12-12",status:0,action:""},
        {time:"2021-08-23",invoiceNo:"46567568686868",acount:"USD",settlementAmount:"576683",paymentDueDate:"2021-12-12",status:0,action:""},
        {time:"2021-08-23",invoiceNo:"46567568686868",acount:"USD",settlementAmount:"576683",paymentDueDate:"2021-12-12",status:0,action:""},
        {time:"2021-08-23",invoiceNo:"46567568686868",acount:"USD",settlementAmount:"576683",paymentDueDate:"2021-12-12",status:0,action:""}
      ]
    },
    {
      time: "2021-10-21",
      no: "W999999900",
      buyerNamer:"庞子杰公司",
      data: [
        {time:"2021-08-23",invoiceNo:"46567568686868",acount:"USD",settlementAmount:"576683",paymentDueDate:"2021-12-12",status:0,action:""},
        {time:"2021-08-23",invoiceNo:"46567568686868",acount:"USD",settlementAmount:"576683",paymentDueDate:"2021-12-12",status:0,action:""},
        {time:"2021-08-23",invoiceNo:"46567568686868",acount:"USD",settlementAmount:"576683",paymentDueDate:"2021-12-12",status:0,action:""},
        {time:"2021-08-23",invoiceNo:"46567568686868",acount:"USD",settlementAmount:"576683",paymentDueDate:"2021-12-12",status:0,action:""},
        {time:"2021-08-23",invoiceNo:"46567568686868",acount:"USD",settlementAmount:"576683",paymentDueDate:"2021-12-12",status:0,action:""},
        {time:"2021-08-23",invoiceNo:"46567568686868",acount:"USD",settlementAmount:"576683",paymentDueDate:"2021-12-12",status:0,action:""},
        {time:"2021-08-23",invoiceNo:"46567568686868",acount:"USD",settlementAmount:"576683",paymentDueDate:"2021-12-12",status:0,action:""}
      ]
    },
    {
      time: "2021-12-21",
      no: "W11111111111",
      buyerNamer:"宇宙公司",
      data: [
        {time:"2021-08-23",invoiceNo:"46567568686868",acount:"USD",settlementAmount:"576683",paymentDueDate:"2021-12-12",status:0,action:""},
        {time:"2021-08-23",invoiceNo:"46567568686868",acount:"USD",settlementAmount:"576683",paymentDueDate:"2021-12-12",status:0,action:""},
        {time:"2021-08-23",invoiceNo:"46567568686868",acount:"USD",settlementAmount:"576683",paymentDueDate:"2021-12-12",status:0,action:""},
        {time:"2021-08-23",invoiceNo:"46567568686868",acount:"USD",settlementAmount:"576683",paymentDueDate:"2021-12-12",status:0,action:""},
        {time:"2021-08-23",invoiceNo:"46567568686868",acount:"USD",settlementAmount:"576683",paymentDueDate:"2021-12-12",status:0,action:""},
        {time:"2021-08-23",invoiceNo:"46567568686868",acount:"USD",settlementAmount:"576683",paymentDueDate:"2021-12-12",status:0,action:""},
        {time:"2021-08-23",invoiceNo:"46567568686868",acount:"USD",settlementAmount:"576683",paymentDueDate:"2021-12-12",status:0,action:""}
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }
  public createOrder(): void {
    
  }
  public receiveOrder(): void {
    
  }
}
