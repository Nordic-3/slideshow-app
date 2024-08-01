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

  async imageNumber(): Promise<number> {
    let numberOfImages = 0;
    for (let i = 1; ; i++) {
      try {
        await this.storage.ref('images/' + i + '.jpg').getDownloadURL().toPromise();
        numberOfImages++;
      } catch (error) {
        break; 
      }
    }
    return numberOfImages;
  }
}
