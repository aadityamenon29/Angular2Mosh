import {Component, Input, EventEmitter, Output} from 'angular2/core';

@Component(
{
	selector: 'vote',
	template: `<div style="width:20px;">
	<i class = "glyphicon glyphicon-menu-up" [class.highlighted]="isUpActive" on-click="onUpClick()"></i>
	<span>{{title}}</span>
	<i class = "glyphicon glyphicon-menu-down" [class.highlighted]="isDownActive" on-click="onDownClick()"></i>
	</div>
	`,
	styles: [`
	.gylphicon-menu-up{
		color: #CCC,
		cursor: pointer,;
	}

	.gylphicon-menu-down{
		color: #CCC,
		cursor: pointer,;
	}
	.highlighted{
		color: orange;
	}
	`]
})

export class VoteComponent{

	@Input() isUpActive;
	@Input() isDownActive;
	@Input() title;


	@Output() vote = new EventEmitter();
	onUpClick(){

		if(!this.isUpActive && !this.isDownActive){
			this.isUpActive = true;
			this.title++;
		}

		if(this.isDownActive){
			this.title++;
			this.isDownActive = false;

		}

	}

	onDownClick(){
		if(!this.isUpActive && !this.isDownActive){
			this.isDownActive = true;
			this.title--;
		}

		if(this.isUpActive){
			this.title--;
			this.isUpActive = false;
			
		}

	}
}