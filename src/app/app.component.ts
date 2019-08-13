import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable, interval, timer, BehaviorSubject } from 'rxjs';
import { SimpleService } from './simple.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  constructor(public simpleService: SimpleService) {

  }
}
