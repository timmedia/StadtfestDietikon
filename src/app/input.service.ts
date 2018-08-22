import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class InputService {
  private keyPress: BehaviorSubject<number>;
  private activateReset: BehaviorSubject<boolean>;

  constructor() {
    this.keyPress = new BehaviorSubject<number>(null);
    this.activateReset = new BehaviorSubject<boolean>(false);
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

}
