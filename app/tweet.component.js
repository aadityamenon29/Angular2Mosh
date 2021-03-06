System.register(['angular2/core', './like.component'], function(exports_1, context_1) {
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
    var core_1, like_component_1;
    var TweetComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (like_component_1_1) {
                like_component_1 = like_component_1_1;
            }],
        execute: function() {
            TweetComponent = (function () {
                function TweetComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], TweetComponent.prototype, "tweet", void 0);
                TweetComponent = __decorate([
                    core_1.Component({
                        selector: 'tweet',
                        template: "\n\t\n\t<div class=\"media\">\n\t  <div class=\"media-left media-middle\">\n\t      <img class=\"media-object\" [src]=\"tweet.imageUrl\">\n\t  </div>\n\t  <div class=\"media-body\">\n\t    <h4 class=\"media-heading\">\n\t    {{tweet.author}} \n\t    <span class=\"handle\">{{tweet.handle}}</span>\n\t    </h4>\n\t    {{tweet.body}}\n\t    <div>\n\t    \t<like [iLike] = \"tweet.iLike\" [title] = \"tweet.totalLikes\"></like>\n\t    </div>\n\t  </div>\n\t</div>\n\n\t",
                        styles: ["\n        .handle {\n            color: #ccc;\n        }\n\n        .media {\n           padding: 15px;\n        }\n        .media-object {\n            border-radius: 10px;\n        }\n        "],
                        directives: [like_component_1.LikeComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TweetComponent);
                return TweetComponent;
            }());
            exports_1("TweetComponent", TweetComponent);
        }
    }
});
//# sourceMappingURL=tweet.component.js.map