import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSendService {

  private sharedVariable = new BehaviorSubject<number>(5000);
  currentVariable = this.sharedVariable.asObservable();

  updateVariable(value: number) {
    this.sharedVariable.next(value);
  }
}
