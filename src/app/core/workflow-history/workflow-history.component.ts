import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workflow-history',
  templateUrl: './workflow-history.component.html',
  styleUrls: ['./workflow-history.component.less']
})
export class WorkflowHistoryComponent implements OnInit {
  
  public dataSet: Array<any>= [];
  public colValue: number = 4;
  public colSpans: number = 2;
  public date: Date | any = null;
  constructor() { }

  ngOnInit(): void {
    this.initData();
  }
  public onChange(e:any) { }
  private initData() {
    this.dataSet = new Array(100).fill({}).map(res => {
      return {
        name:"fh",
        number:"fh",
        bianhao:"fh",
        user:"fh",
        person:"fh",
        fuheren:"fh",
        fuheTime:"fh",
        status:"fh"
      }
    })
  }
}
