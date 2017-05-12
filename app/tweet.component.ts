import {Component, Input, EventEmitter, Output} from 'angular2/core';
import {LikeComponent} from './like.component';

@Component(
{
	selector: 'tweet',
	template: `
	
	<div class="media">
	  <div class="media-left media-middle">
	      <img class="media-object" [src]="tweet.imageUrl">
	  </div>
	  <div class="media-body">
	    <h4 class="media-heading">
	    {{tweet.author}} 
	    <span class="handle">{{tweet.handle}}</span>
	    </h4>
	    {{tweet.body}}
	    <div>
	    	<like [iLike] = "tweet.iLike" [title] = "tweet.totalLikes"></like>
	    </div>
	  </div>
	</div>

	`,
	styles: [`
        .handle {
            color: #ccc;
        }

        .media {
           padding: 15px;
        }
        .media-object {
            border-radius: 10px;
        }
        `],

	directives: [LikeComponent]
})

export class TweetComponent{
	@Input() tweet;

}




