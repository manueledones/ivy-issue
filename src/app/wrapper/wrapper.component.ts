import { Component, OnInit, ContentChild, TemplateRef, ElementRef, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WrapperComponent implements OnInit {

  @ContentChild('myContent', { static: true }) contentTemplate: TemplateRef<ElementRef>;

  constructor() { }

  ngOnInit() {
  }

}
