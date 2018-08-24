import { Component, OnInit } from '@angular/core';
import { InputService } from '../input.service';
import { PageService } from '../page.service';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {

  constructor(private inputService: InputService, private pageService: PageService) { }

  ngOnInit() {
  }

  enterKey(key: number) {
    this.inputService.pressKey(key);
  }

  resetCode() {
    this.inputService.setReset(true);
  }

  setPage(id: string, title: string) {
    this.pageService.setPage(id, title);
  }

}
