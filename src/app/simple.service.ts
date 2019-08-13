import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SimpleService {

  private myObservable1: BehaviorSubject<number> = new BehaviorSubject(null);
  private myObservable2: BehaviorSubject<number> = new BehaviorSubject(null);
  public myObservable1$ = this.myObservable1.asObservable();
  public myObservable2$ = this.myObservable2.asObservable();

  constructor() {
    let i = 0;
    setInterval(() => {
      this.myObservable1.next(++i);
      this.myObservable2.next(++i);
    }, 1000);

  }
}
