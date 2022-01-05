import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.less']
})
export class MyOrderComponent implements OnInit {

  public title:String = "我的订单"
  public  listOfData: Array<any> = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      status:0
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      status:0
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      status:0
    }
  ];
  public status: string = "全部状态";
  public time: string = "一年内";
  public isShowCreate: boolean = true;
  public isShowReceive: boolean = false;
  public isShowSave: boolean = false;
  constructor() {
   }

  ngOnInit(): void {
  }
  public createOrder() {
    this.setColor(false,true,false)
  }
  public receiveOrder() {
    this.setColor(false,false,true)
  }
  public tempateSave() {
    this.setColor(true,false,false)
  }
  private setColor(btn1:boolean,btn2:boolean,btn3:boolean) {
    this.isShowSave = btn1;
    this.isShowCreate = btn2;
    this.isShowReceive = btn3;
  }
}
