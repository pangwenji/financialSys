import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-major',
  templateUrl: './major.component.html',
  styleUrls: ['./major.component.less']
})
export class MajorComponent implements OnInit {

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
  
  public option = {
    tooltip: {
      trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    x: 400, // 'center' | 'left' | {number},
    y: 'center', // 'center' | 'bottom' | {number}
    icon: "circle",   // 类型包括 circle 圆
    itemWidth: 13,  // 设置宽度
    itemHeight: 13, // 设置高度
    itemGap: 13 // 设置间距，
  },
  series: [
      {
          name: '访问来源',
          type: 'pie',
          radius: ['30%', '40%'],
          avoidLabelOverlap: false,
          label: {
              show: false,
              position: 'center'
          },
          emphasis: {
              label: {
                  show: true,
                  fontSize: '30',
                  fontWeight: 'bold'
              }
          },
          labelLine: {
              show: false
          },
          data: [
              {value: 1048, name: '搜索引擎'},
              {value: 735, name: '直接访问'},
              {value: 580, name: '邮件营销'},
              {value: 484, name: '联盟广告'},
              {value: 300, name: '视频广告'}
          ]
      }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }
}
