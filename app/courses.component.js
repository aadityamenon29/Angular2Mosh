//each file is a module, 
//each module, you export stuff
//so that it is avaiable to other modules
//you can import it there
System.register(['./course.service', 'angular2/core', './auto-grow.directive'], function(exports_1, context_1) {
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
    var course_service_1, core_1, auto_grow_directive_1;
    var CoursesComponent;
    return {
        setters:[
            function (course_service_1_1) {
                course_service_1 = course_service_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (auto_grow_directive_1_1) {
                auto_grow_directive_1 = auto_grow_directive_1_1;
            }],
        execute: function() {
            //decorators are functoins, all need to be prefixed with an @ sign
            CoursesComponent = (function () {
                //the following is an example of dependency injection
                //you'd think that this constructor would need to be passed
                //a CourseService object, but this doesn't need to be done
                //instead angular2's dependency injection framework will look at the 
                //constructor and see that it is DEPENDENT on the CourseService
                //therefore, it'll first create an object of it and inject it in the constructor
                function CoursesComponent(courseService) {
                    this.title = "The title of courses page!!";
                    this.arr = [1, 2, 322];
                    this.courses = courseService.getCourses();
                }
                CoursesComponent = __decorate([
                    core_1.Component({
                        selector: 'courses',
                        template: "\n\t<h2>Coursssses</h2>\n\t{{title}}\n\t<input type=\"text\" autogrow />\n\t<ul>\n\t<li\t*ngFor = \"#course of courses\">\t\n\t{{course}}\n\t</li>\n\t</ul>\n\t<ul>\n\t<li *ngFor = \"#arrE of arr\">{{arrE}}</li>\n\t</ul>\n\t",
                        //to teach angular2 how to create new instance
                        //of CourseService for the dependency injectoin happening below in the long comment
                        providers: [course_service_1.CourseService],
                        directives: [auto_grow_directive_1.AutoGrowDirective]
                    }), 
                    __metadata('design:paramtypes', [course_service_1.CourseService])
                ], CoursesComponent);
                return CoursesComponent;
            }());
            exports_1("CoursesComponent", CoursesComponent);
        }
    }
});
//# sourceMappingURL=courses.component.js.map