import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

interface Post {
  name: string,
  message: string,
  time: Date
}

@Injectable({
  providedIn: 'root'
})
export class GuestbookService {
  postsCollection: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>;

  constructor(private afs: AngularFirestore) {
    this.postsCollection = this.afs.collection('guestbook', ref => ref.orderBy('time', 'desc'));
    this.posts = this.postsCollection.valueChanges();
  }

  public getPosts(): Observable<Post[]> {
    return this.posts;
  }

  public submitMessage(name: string, message: string): void {
    const time = new Date();
    this.postsCollection.add({
      name: name,
      message: message,
      time: time
    })
  }
}
