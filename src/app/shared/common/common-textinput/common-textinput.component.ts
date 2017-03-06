import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
 selector: 'textinput',
 templateUrl: './common-textinput.component.html',
 styleUrls: ['./common-textinput.component.scss']
})

export class TextInputComponent {

 constructor() {}
  @Input() id: string;
	@Input() name: string;
	@Input() label: string;
	@Input() value: string;
  @Input() placeholder: string;
  @Output() valueChanged: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
  }

  onInputChange($event){
    this.valueChanged.emit($event);
  }
}
