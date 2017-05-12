

//ElementRef gets you access to the host element with auto grow attached to it, render - a service which helps you make changes to it
import {Directive, ElementRef, Renderer} from 'angular2/core'

@Directive(
{
	selector : '[autogrow]',
	host: {
		'(focus)': 'onFocus()',
		'(blur)' : 'onBlur()'
	}
})

export class AutoGrowDirective{

	constructor(private _el: ElementRef,private _ren: Renderer){

	}

	onFocus(){

	this._ren.setElementStyle(this._el.nativeElement, 'width', '200');


	}

	onBlur(){


			this._ren.setElementStyle(this._el.nativeElement, 'width', '120');
	
	}

}