import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroAntdModule } from '../ng-zorro-antd.module';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzTableModule } from 'ng-zorro-antd/table';
import { FormsModule } from '@angular/forms';
const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    BrowserAnimationsModule,
    NzDropDownModule,
    NzTableModule,
    FormsModule,
    NzIconModule.forRoot(icons)
  ],
  exports: [
    NgZorroAntdModule,
    BrowserAnimationsModule,
    CommonModule,
    NzDropDownModule,
    NzIconModule,
    FormsModule,
    NzTableModule
  ]
})
export class ShareModule { }
