import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { InputService } from '../input.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @ViewChildren('shape1') shape1;
  charMap = ['square', 'hexagon', 'rectangle', 'triangle', 'parallelogram'];
  colourMap = ['#f50057', '#d500f9', '#00e676', '#ffe81d', '#ff9800']
  code: string = '';
  

  constructor(private inputService: InputService) {
  }

  ngOnInit() {

  }

  ngAfterContentInit() {
    this.changeView.bind(this);
    this.inputService.getKeyPresses().subscribe(this.changeView.bind(this));
    this.inputService.getReset().subscribe(this.resetCode.bind(this));
  }

  changeView(index: number) {
    if (index != null) {
      const pos = this.code.length;
      this.code += `${index}`;
      const element = this.shape1._results[pos].nativeElement;
      element.style.fill = this.colourMap[index]
      element.children[this.charMap[index]].beginElement();
    }
  }

  resetCode(type: boolean) {
    if (type) {
      console.log(this.code)
      let len = this.code.length;
      for (let index = 0; index < len; index++) {
        const element = this.shape1._results[index].nativeElement;
        element.style.fill = '#222';
        element.children[0].beginElement();
      }
      this.code = '';
      this.inputService.setReset(false);
    }
  }

}
