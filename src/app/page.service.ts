import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class PageService {
  private page: BehaviorSubject<string>;
  private title: BehaviorSubject<string>;

  constructor() {
    this.page = new BehaviorSubject<string>('home');
    this.title = new BehaviorSubject<string>('');
  }

  public setPage(id: string, title: string): void {
    this.page.next(id);
    this.title.next(title);
  }

  public getPage(): Observable<string> {
    return this.page.asObservable();
  }

  public getTitle(): Observable<string> {
    return this.title.asObservable();
  }
}
