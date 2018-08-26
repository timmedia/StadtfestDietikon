import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Codes, Locations } from './locations';
import { PageService } from './page.service';

@Injectable()
export class InputService {
  private keyPress: BehaviorSubject<number>;
  private activateReset: BehaviorSubject<boolean>;
  private modal: BehaviorSubject<boolean>;

  constructor(private pageService: PageService) {
    this.keyPress = new BehaviorSubject<number>(null);
    this.activateReset = new BehaviorSubject<boolean>(false);
    this.modal = new BehaviorSubject<boolean>(false);
  }

  public validateInput(code: string) {
      window.setTimeout(() => this.setReset(true), 250);
      if (Codes.indexOf(code) > -1) {
        this.pageService.setPage('video', 'Video');
      } else {
        this.openModal();
      };
  }

  public pressKey(key: number): void {
    this.keyPress.next(key);
  }

  public getKeyPresses(): Observable<number> {
    return this.keyPress.asObservable();
  }

  public setReset(type: boolean): void {
    this.activateReset.next(type);
  }

  public getReset(): Observable<boolean> {
    return this.activateReset.asObservable();
  }

  public openModal(): void {
    this.modal.next(true);
  }

  public closeModal(): void {
    this.modal.next(false);
  }

  public getModal(): Observable<boolean> {
    return this.modal.asObservable();
  }

}
