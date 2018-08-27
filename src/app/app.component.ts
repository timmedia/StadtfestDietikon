import { Component, ViewChild, ElementRef } from '@angular/core';
import { PageService } from './page.service';
import { InputService } from './input.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('main') main: ElementRef;
  @ViewChild('side') side: ElementRef;
  @ViewChild('overlay') overlay: ElementRef;
  @ViewChild('modal') modal: ElementRef;

  title = 'app';
  sidePanelTitle = '';
  sidePanelPage = '';
  modalText = {
    title: 'Fehler',
    content: 'Diese Kombination ist leider ungültig.'
  }

  constructor(private pageService: PageService, private inputService: InputService) { }

  ngAfterContentInit() {
    this.pageService.getPage().subscribe(this.switchPage.bind(this));
    this.pageService.getTitle().subscribe((title: string) => { if (title) { this.sidePanelTitle = title; } } );
    this.inputService.getModal().subscribe(this.switchModal.bind(this));
  }

  switchPage(id: string) {
    this.sidePanelPage = id;
    if (id === 'home' || id === '') {
      this.side.nativeElement.style.transform = 'translate(-100%)';
    } else {
      this.side.nativeElement.style.transform = 'translate(0%)';
    }
  }

  closeSidebar() {
    this.pageService.setPage('', '');
  }

  switchModal(open: boolean) {
    if (open) {
      this.overlay.nativeElement.style.zIndex = '10';
      window.setTimeout(() => {
        this.overlay.nativeElement.classList.remove('overlay-hidden');
        this.modal.nativeElement.classList.remove('modal-hidden');
      }, 10);
    } else {
      this.overlay.nativeElement.classList.add('overlay-hidden');
      this.modal.nativeElement.classList.add('modal-hidden');
      window.setTimeout(() => this.overlay.nativeElement.style.zIndex = '-10', 500)
    }    
  }

}
