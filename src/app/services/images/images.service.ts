import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private afs : AngularFirestore) { }

  collectionName = 'images';

     imageNumber(): Observable<number[]> {
    return this.afs.collection<{ imageNumber : number }>(this.collectionName, ref => ref.where('id', '==', 'Ta2iWGJUrKrZ6iylAp24'))
    .valueChanges().pipe(map(docs => docs.map(doc => doc.imageNumber)));
  }
}
