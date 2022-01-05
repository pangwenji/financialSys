import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BilateralAgreementComponent } from './bilateral-agreement/bilateral-agreement.component';
import { DataTransmissionComponent } from './data-transmission/data-transmission.component';
import { FinancingApplicationComponent } from './financing-application/financing-application.component';
import { FinancingHistoryComponent } from './financing-history/financing-history.component';
import { HomeComponent } from './home/home.component';
import { MajorComponent } from './major/major.component';
import { MyInvoiceComponent } from './my-invoice/my-invoice.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { PartnerListComponent } from './partner/partner-list/partner-list.component';
import { PartnerQueryComponent } from './partner/partner-query/partner-query.component';
import { PasswordSettingComponent } from './password-setting/password-setting.component';
import { SubuserManagementComponent } from './subuser-management/subuser-management.component';
import { UserLogoutComponent } from './user-logout/user-logout.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { WorkflowHistoryComponent } from './workflow-history/workflow-history.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'major', pathMatch: 'full' },
      { path: 'major', component: MajorComponent },
      { path: 'myorder', component: MyOrderComponent },
      { path: 'myInvoice', component: MyInvoiceComponent },
      { path: 'dataTransmission', component: DataTransmissionComponent },
      { path: 'financingHistory', component: FinancingHistoryComponent },
      { path: 'workflowhistory', component: WorkflowHistoryComponent },
      { path: 'userSettings', component: UserSettingsComponent },
      { path: 'passwordSetting', component: PasswordSettingComponent },
      { path: 'subuserManagement', component: SubuserManagementComponent },
      { path: 'userLogout', component: UserLogoutComponent },
      { path: 'bilateralAgreement', component: BilateralAgreementComponent },
      { path: 'financingApplication', component: FinancingApplicationComponent },
      { path: 'ListOfPartners', component:PartnerListComponent },
      { path: 'partnerQuery', component:PartnerQueryComponent }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
