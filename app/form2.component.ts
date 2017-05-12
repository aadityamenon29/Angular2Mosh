import {Component} from 'angular2/core';

@Component(
{
	selector: 'form2',
	templateUrl: 'app/form2.component.html'	
})

export class Form2Component{
	
	onSubmit(form){

		console.log(form.value);
	}

}