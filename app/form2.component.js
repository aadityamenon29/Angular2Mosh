System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var Form2Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Form2Component = (function () {
                function Form2Component() {
                }
                Form2Component.prototype.onSubmit = function (form) {
                    console.log(form.value);
                };
                Form2Component = __decorate([
                    core_1.Component({
                        selector: 'form2',
                        templateUrl: 'app/form2.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], Form2Component);
                return Form2Component;
            }());
            exports_1("Form2Component", Form2Component);
        }
    }
});
//# sourceMappingURL=form2.component.js.map