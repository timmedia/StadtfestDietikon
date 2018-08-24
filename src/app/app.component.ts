import { Component, ViewChild, ElementRef } from '@angular/core';
import { PageService } from './page.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('main') main: ElementRef;
  @ViewChild('side') side: ElementRef;
  title = 'app';
  sidePanelTitle = '';
  sidePanelPage = '';

  constructor(private pageService: PageService) { }

  ngAfterContentInit() {
    this.pageService.getPage().subscribe(this.switchPage.bind(this));
    this.pageService.getTitle().subscribe((title: string) => { if (title) { this.sidePanelTitle = title; } } );
  }

  switchPage(id: string) {
    this.sidePanelPage = id;
    switch (id) {
      case 'map':
        this.main.nativeElement.style.transform = 'translate(-100%)';
        this.side.nativeElement.style.transform = 'translate(0%)';
        break;
      case 'help':
        this.main.nativeElement.style.transform = 'translate(-100%)';
        this.side.nativeElement.style.transform = 'translate(0%)';
        break;
      default:
        this.main.nativeElement.style.transform = 'translate(0%)';
        this.side.nativeElement.style.transform = 'translate(100%)';
        break;
    }
  }

  closeSidebar() {
    this.pageService.setPage('', '');
  }

}
