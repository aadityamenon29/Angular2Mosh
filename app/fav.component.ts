import {Component, Input, EventEmitter, Output} from 'angular2/core';

@Component(
{
	selector: 'fav',
	template: `
	<i class = "glyphicon" [class.glyphicon-star]="isActive" [class.glyphicon-star-empty]="!isActive" on-click="onClick()"></i>
	{{title}}
	`
})

export class FavComponent{

	@Input() isActive ;

	@Output() change = new EventEmitter();

	onClick(){

		this.isActive=!this.isActive;
		this.change.emit({newValue: this.isActive});
	}
}