import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.less']
})
export class UserSettingsComponent implements OnInit {

  public selectedValue: any = null;
  constructor() { }

  ngOnInit(): void {
  }

}
