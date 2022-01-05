import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-financing-application',
  templateUrl: './financing-application.component.html',
  styleUrls: ['./financing-application.component.less']
})
export class FinancingApplicationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
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
  public isShow: boolean = true;

  public createOrder() {
    this.isShow = !this.isShow;
    console.log("dhf")
  }
  
  public receiveOrder() {
    this.isShow = !this.isShow;
  }
}
