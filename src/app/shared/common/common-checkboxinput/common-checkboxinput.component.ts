import {Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'checkboxinput',
	templateUrl: './common-checkboxinput.component.html',
	styleUrls: ['./common-checkboxinput.component.css']
})

export class CheckboxInputComponent{

	constructor(){}
	@Input() name: string;
	@Input() checked: boolean;
  @Input() label: string;
  @Input() value: string;
	@Output() checkChanged: EventEmitter<any> = new EventEmitter();

	onHandleChange($event){
		this.checkChanged.emit($event);
	}
}
