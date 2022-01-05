import { NgModule, SkipSelf } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { Optional } from '@angular/core';
import { LeftMenuComponent } from '../left-menu/left-menu/left-menu.component';
import { ShareModule } from '../share/share.module';
import { HomeComponent } from './home/home.component';
import { CoreRoutingModule } from './core-routing.module';
import { MajorComponent } from './major/major.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { EchartDirDirective } from '../direct/echart-dir.directive';
import { MyInvoiceComponent } from './my-invoice/my-invoice.component';
import { DataTransmissionComponent } from './data-transmission/data-transmission.component';
import { FinancingHistoryComponent } from './financing-history/financing-history.component';
import { WorkflowHistoryComponent } from './workflow-history/workflow-history.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { PasswordSettingComponent } from './password-setting/password-setting.component';
import { SubuserManagementComponent } from './subuser-management/subuser-management.component';
import { BilateralAgreementComponent } from './bilateral-agreement/bilateral-agreement.component';
import { UserLogoutComponent } from './user-logout/user-logout.component';
import { PaymentInformationComponent } from './payment-information/payment-information.component';
import { FinancingApplicationComponent } from './financing-application/financing-application.component';
import { MajorBottomComponent } from './component/major-bottom/major-bottom.component';
import { MajorTopComponent } from './component/major-top/major-top.component';
import { PartnerListComponent } from './partner/partner-list/partner-list.component';
import { PartnerQueryComponent } from './partner/partner-query/partner-query.component';
import { CommonHeaderComponent } from './component/common-header/common-header.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LeftMenuComponent,
    HomeComponent,
    MajorComponent,
    MyOrderComponent,
    EchartDirDirective,
    MyInvoiceComponent,
    DataTransmissionComponent,
    FinancingHistoryComponent,
    WorkflowHistoryComponent,
    UserSettingsComponent,
    PasswordSettingComponent,
    SubuserManagementComponent,
    BilateralAgreementComponent,
    UserLogoutComponent,
    PaymentInformationComponent,
    FinancingApplicationComponent,
    MajorBottomComponent,
    MajorTopComponent,
    PartnerListComponent,
    PartnerQueryComponent,
    CommonHeaderComponent
  ],
  imports: [
    ShareModule,
    CoreRoutingModule
  ],
  exports: [
    ShareModule,
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parent: CoreModule) {
    if (parent) {
       throw new Error('核心模块，只能加载一次！')
    }
   }
 }
