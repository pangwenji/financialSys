import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-header',
  templateUrl: './common-header.component.html',
  styleUrls: ['./common-header.component.less']
})
export class CommonHeaderComponent implements OnInit {
  public imageUrl: String = "../../../../assets/major/bg-top nav.png";
  @Input() title!: String ;
  constructor() {
    console.log(this.title)
   }

  ngOnInit(): void {
  }

}
