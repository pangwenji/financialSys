import { Component, OnInit } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-financing-history',
  templateUrl: './financing-history.component.html',
  styleUrls: ['./financing-history.component.less']
})
export class FinancingHistoryComponent implements OnInit {
  public selectedValue: any = 'jack';
  public isShow: boolean = false;
  public dataSet: any[] = [
   
  ];
  constructor() { }

  ngOnInit(): void {
  }

  public onChange() { }
}
