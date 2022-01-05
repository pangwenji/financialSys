import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subuser-management',
  templateUrl: './subuser-management.component.html',
  styleUrls: ['./subuser-management.component.less']
})
export class SubuserManagementComponent implements OnInit {

  public dataSet: Array<any> = [
    { num:1,userName:'十多个地方官'}
  ]
  constructor() { }

  ngOnInit(): void {
  }
}
