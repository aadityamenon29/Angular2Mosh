import {Component, Input, EventEmitter, Output} from 'angular2/core';

@Component(
{
	selector: 'like',
	template: `
	<i class = "glyphicon glyphicon-heart" [class.highlighted]="iLike" on-click="onClick()"></i>
	<span>{{title}}</span>
	`,
	styles: [`
	.gylphicon-heart{
		color: #CCC,
		cursor: pointer,;
	}
	.highlighted{
		color: deeppink;
	}
	`]
})

export class LikeComponent{

	@Input() iLike = false;
	@Input() title = 10;

	onClick(){
		this.iLike = !this.iLike; 
		this.title += this.iLike? +1 : -1;
	}
}