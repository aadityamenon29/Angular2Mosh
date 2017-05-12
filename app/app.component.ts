import {Component} from 'angular2/core';

import {CoursesComponent} from './courses.component';
import {ZippyComponent} from './zippy.component';
import {AuthorsComponent} from './authors.component';

import {FavComponent} from './fav.component';
import {LikeComponent} from './like.component';
import {VoteComponent} from './voter.component';
import {TweetComponent} from './tweet.component';
import {TweetsService} from './tweets.service'
import {FormComponent} from './form.component';


//annotation which adds metadata about the class

@Component({
    selector: 'my-app',
    template: `<h1>HELLO</h1>
    <courses></courses>
    <authors></authors>
    <fav [isActive] = "post.isFav" (change) = "onFavChange($event)"></fav>
    <like [iLike] = "tweet.iLike" [title] = "tweet.totalLikes"></like>
    <br>

    <vote [isUpActive]="vote.isUpActive" [isDownActive]="vote.isDownActive" [title]="vote.title"></vote>
    <br><br><br>
    <div *ngFor = "#tw of listOfTweets">
    <tweet [tweet] = "tw"></tweet><br>
    </div>

    <br><br><br>

    <zippy title = "Who can see this?">
    <div class = "body">
    Whatsupppppppppppppppppppppppp
    </div>
    </zippy>

    <br><br>
    <form></form>
     `,
    //you need to add the following directives 
    //to tell angular which component is responsible for the authors and courses element above
    
    directives: [CoursesComponent, AuthorsComponent, 
    FavComponent, LikeComponent, VoteComponent, TweetComponent, ZippyComponent, FormComponent],
    providers: [TweetsService]
})
export class AppComponent { 

    listOfTweets;
    constructor(tweetObj : TweetsService){
        this.listOfTweets = tweetObj.getTweets();
    }

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