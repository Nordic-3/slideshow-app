import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private storage : AngularFireStorage, private afs : AngularFirestore) { }

  collectionName = 'images';

  loadImage(name : string): Observable<string> {
    return this.storage.ref(name).getDownloadURL();
  }

   imageNumber(): Observable<number[]> {
    return this.afs.collection<{ imageNumber : number }>(this.collectionName, ref => ref.where('id', '==', 'Ta2iWGJUrKrZ6iylAp24'))
    .valueChanges().pipe(map(docs => docs.map(doc => doc.imageNumber)));
  }
}
