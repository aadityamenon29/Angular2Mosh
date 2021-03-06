System.register(['angular2/core', './zippy.component', './form.component', './form2.component'], function(exports_1, context_1) {
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
    var core_1, zippy_component_1, form_component_1, form2_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (zippy_component_1_1) {
                zippy_component_1 = zippy_component_1_1;
            },
            function (form_component_1_1) {
                form_component_1 = form_component_1_1;
            },
            function (form2_component_1_1) {
                form2_component_1 = form2_component_1_1;
            }],
        execute: function() {
            //annotation which adds metadata about the class
            AppComponent = (function () {
                function AppComponent() {
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
                }
                //to change stuff in the db/back-end api for good
                AppComponent.prototype.onFavChange = function ($event) {
                    console.log($event);
                    this.post.isFav = !this.post.isFav;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <zippy title = \"Who can see this?\">\n    <div class = \"body\">\n    Whatsupppppppppppppppppppppppp\n    </div>\n    </zippy>\n\n    <br><br>\n    \n    \n    <form2></form2>\n     ",
                        //you need to add the following directives 
                        //to tell angular which component is responsible for the authors and courses element above
                        directives: [zippy_component_1.ZippyComponent, form_component_1.FormComponent, form2_component_1.Form2Component]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map