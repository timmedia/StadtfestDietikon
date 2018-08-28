import { Component, OnInit, ViewChild } from '@angular/core';
import { GuestbookService,  } from '../guestbook.service';

@Component({
  selector: 'app-guestbook',
  templateUrl: './guestbook.component.html',
  styleUrls: ['./guestbook.component.scss']
})
export class GuestbookComponent implements OnInit {
  @ViewChild('name') name;
  @ViewChild('message') message;
  posts;

  constructor(private guestbookService: GuestbookService) { }

  ngOnInit() {
    this.posts = this.guestbookService.getPosts();
  }

  submitMessage() {
    this.guestbookService.submitMessage(this.name.nativeElement.value, this.message.nativeElement.value);
    this.name.nativeElement.value = '';
    this.message.nativeElement.value = '';
  }

}
