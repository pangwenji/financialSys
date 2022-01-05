import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import * as echarts from 'echarts';
@Directive({
  selector: '[appEchartDir]'
})
export class EchartDirDirective implements OnInit {

  @Input('appEchartDir') appEchartDir: any;
  constructor(
    private el:ElementRef
  ) { }
  ngOnInit() {
    echarts.init(this.el.nativeElement).setOption(this.appEchartDir);
  }
}
