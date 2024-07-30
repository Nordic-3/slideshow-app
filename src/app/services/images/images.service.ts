import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private storage : AngularFireStorage) { }

  loadImage(name : string): Observable<string> {
    return this.storage.ref(name).getDownloadURL();
  }
}