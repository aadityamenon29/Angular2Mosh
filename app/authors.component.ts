
import {Component} from 'angular2/core'
import {AuthorsService} from './authors.service'
@Component({
	selector: 'authors',
	template: `
	<h2>Authors</h2>
	{{titleAuthors}}
	<ul>
	<li *ngFor = "#author of listOfAuthors">{{author}}</li>
	</ul>
	`,
	providers: [AuthorsService]
})
export class AuthorsComponent{

	titleAuthors: string = "Title for Authors div";

	listOfAuthors;

	constructor(authorsObj : AuthorsService){

		this.listOfAuthors = authorsObj.getAuthors();

	}

}