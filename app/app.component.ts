import {Component} from 'angular2/core';
import {ZippyComponent} from './zippy.component';
import {TweetsService} from './tweets.service'
import {FormComponent} from './form.component';
import {Form2Component} from './form2.component';

//annotation which adds metadata about the class

@Component({
    selector: 'my-app',
    template: `
    <zippy title = "Who can see this?">
    <div class = "body">
    Whatsupppppppppppppppppppppppp
    </div>
    </zippy>

    <br><br>
    
    
    <form2></form2>
     `,
    //you need to add the following directives 
    //to tell angular which component is responsible for the authors and courses element above
    
    directives: [ZippyComponent, FormComponent, Form2Component]    
})
export class AppComponent { 
//to get default values from db/back-end api at the start - from like a service or something
post = {
	title: "Title",
	isFav: true
}
//to get default values from db/back-end api at the start - from like a service or something
tweet = {
	iLike : false,
	totalLikes : 10
}

vote = {
	isUpActive : false,
	isDownActive: false,
	title: 10
}

//to change stuff in the db/back-end api for good
onFavChange($event){
	console.log($event);
	this.post.isFav = !this.post.isFav;
}

}