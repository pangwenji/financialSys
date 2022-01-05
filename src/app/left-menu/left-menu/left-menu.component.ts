import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.less']
})
export class LeftMenuComponent implements OnInit {
  public imageUrl:string= '../../../assets/logo maojin.png'
  public titleArrays: Array<any> = [
    // { title: "首页", subTilte: [ { title: "主页",router:'major' }] },
    {
      title: "订单管理",iconType:'audit', subTilte: [
        { title: "我的订单",router:'myorder' },
        { title: "订单模板" }
      ]
    },
    { title: "发票管理", subTilte: [{title:"发票",router:'myInvoice'}] ,iconType:'account-book' },
    {
      title: "贸易资料", subTilte: [
        { title: "附件发送",router:'dataTransmission',circle:false},
        { title: "关联资料"},
        { title: "附件接受"},
        
      ],
      iconType:'idcard'
    },
    {
      title: "融资管理", iconType: 'transaction', subTilte: [
        { title: ' 融资申请', router: 'financingApplication' },
        { title: ' 融资历史', router: 'financingHistory' }
      ]
    },
    // {
    //   title: "待办任务", subTilte: [
    //     { title: "工作流" },
    //     { title: "工作流历史" ,router:'workflowhistory'},
    //   ]
    // },
    {
      title: "合作商管理", subTilte: [
        { title:"合作商列表" ,router: 'ListOfPartners'},
        { title: "合作商查询",router: 'partnerQuery' }
      ]
      ,
      iconType:'share-alt'
    },
    {
      title: "用户设置", iconType:'setting',subTilte: [
        { title: "用户设置" ,router:'userSettings'},
        { title: "密码设置", router:'passwordSetting' },  
        { title: "子用户管理",router:'subuserManagement'},  
        { title: "两方协议" },  
        { title: "用户注销",router:'userLogout' },  
        { title: "权限管理" },  
      ]
    },
    {
      title: "付款通知", subTilte: [
      ]
    },
  ]
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  public changeRouter(router:String) {
    console.log(router)
    this.route.navigateByUrl(`${router}`)
  }
}
