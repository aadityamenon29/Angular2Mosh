import {Component} from 'angular2/core';

@Component(
{
	selector: 'form',
	templateUrl: 'app/form.component.html'	
})

export class FormComponent{
	
	onSubmit(form){

		console.log(form.value);
	}

}