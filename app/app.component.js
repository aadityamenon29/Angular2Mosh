System.register(['angular2/core', './courses.component', './zippy.component', './authors.component', './fav.component', './like.component', './voter.component', './tweet.component', './tweets.service', './form.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, courses_component_1, zippy_component_1, authors_component_1, fav_component_1, like_component_1, voter_component_1, tweet_component_1, tweets_service_1, form_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (zippy_component_1_1) {
                zippy_component_1 = zippy_component_1_1;
            },
            function (authors_component_1_1) {
                authors_component_1 = authors_component_1_1;
            },
            function (fav_component_1_1) {
                fav_component_1 = fav_component_1_1;
            },
            function (like_component_1_1) {
                like_component_1 = like_component_1_1;
            },
            function (voter_component_1_1) {
                voter_component_1 = voter_component_1_1;
            },
            function (tweet_component_1_1) {
                tweet_component_1 = tweet_component_1_1;
            },
            function (tweets_service_1_1) {
                tweets_service_1 = tweets_service_1_1;
            },
            function (form_component_1_1) {
                form_component_1 = form_component_1_1;
            }],
        execute: function() {
            //annotation which adds metadata about the class
            AppComponent = (function () {
                function AppComponent(tweetObj) {
                    //to get default values from db/back-end api at the start - from like a service or something
                    this.post = {
                        title: "Title",
                        isFav: true
                    };
                    //to get default values from db/back-end api at the start - from like a service or something
                    this.tweet = {
                        iLike: false,
                        totalLikes: 10
                    };
                    this.vote = {
                        isUpActive: false,
                        isDownActive: false,
                        title: 10
                    };
                    this.listOfTweets = tweetObj.getTweets();
                }
                //to change stuff in the db/back-end api for good
                AppComponent.prototype.onFavChange = function ($event) {
                    console.log($event);
                    this.post.isFav = !this.post.isFav;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "<h1>HELLO</h1>\n    <courses></courses>\n    <authors></authors>\n    <fav [isActive] = \"post.isFav\" (change) = \"onFavChange($event)\"></fav>\n    <like [iLike] = \"tweet.iLike\" [title] = \"tweet.totalLikes\"></like>\n    <br>\n\n    <vote [isUpActive]=\"vote.isUpActive\" [isDownActive]=\"vote.isDownActive\" [title]=\"vote.title\"></vote>\n    <br><br><br>\n    <div *ngFor = \"#tw of listOfTweets\">\n    <tweet [tweet] = \"tw\"></tweet><br>\n    </div>\n\n    <br><br><br>\n\n    <zippy title = \"Who can see this?\">\n    <div class = \"body\">\n    Whatsupppppppppppppppppppppppp\n    </div>\n    </zippy>\n\n    <br><br>\n    <form></form>\n     ",
                        //you need to add the following directives 
                        //to tell angular which component is responsible for the authors and courses element above
                        directives: [courses_component_1.CoursesComponent, authors_component_1.AuthorsComponent,
                            fav_component_1.FavComponent, like_component_1.LikeComponent, voter_component_1.VoteComponent, tweet_component_1.TweetComponent, zippy_component_1.ZippyComponent, form_component_1.FormComponent],
                        providers: [tweets_service_1.TweetsService]
                    }), 
                    __metadata('design:paramtypes', [tweets_service_1.TweetsService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map