
//each file is a module, 
//each module, you export stuff
//so that it is avaiable to other modules
//you can import it there

// how does angular know this is a component?
// add an annotation (decorator), indicating component as shown below

import {CourseService} from './course.service'

import {Component} from 'angular2/core'

import {AutoGrowDirective} from './auto-grow.directive'

//decorators are functoins, all need to be prefixed with an @ sign

@Component({
	selector: 'courses',
	template: `
	<h2>Coursssses</h2>
	{{title}}
	<input type="text" autogrow />
	<ul>
	<li	*ngFor = "#course of courses">	
	{{course}}
	</li>
	</ul>
	<ul>
	<li *ngFor = "#arrE of arr">{{arrE}}</li>
	</ul>
	`,

	//to teach angular2 how to create new instance
	//of CourseService for the dependency injectoin happening below in the long comment
	providers: [CourseService],
	directives: [AutoGrowDirective]

})
export class CoursesComponent{

	title: string = "The title of courses page!!";
	courses; 


	//the following is an example of dependency injection
	//you'd think that this constructor would need to be passed
	//a CourseService object, but this doesn't need to be done
	//instead angular2's dependency injection framework will look at the 
	//constructor and see that it is DEPENDENT on the CourseService
	//therefore, it'll first create an object of it and inject it in the constructor


	constructor(courseService: CourseService){
		this.courses = courseService.getCourses();
	}
	arr: number[] = [1,2,322];
}

