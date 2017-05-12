import {Component, Input} from 'angular2/core';

@Component(
{
	selector: 'zippy',
	template: `

	<div class = "zippy-container">
		<div class = "zippy-title">
		{{title}}
		
		<i class = "glyphicon" 
		
		[ngClass] = "{
			'glyphicon-chevron-up' : isActive,
			'glyphicon-chevron-down' : !isActive

		}" 

		(click)=toggle()></i>
		
		</div>
		
		<div *ngIf = "isActive" class = "zippy-body">
		<ng-content select=".body"></ng-content>
		</div>

	</div>

	`

})

export class ZippyComponent{

	@Input() title;
	@Input() body;

	isActive = false;

	toggle(){
		this.isActive = !this.isActive;
	}

}