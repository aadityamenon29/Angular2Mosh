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
    var FormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FormComponent = (function () {
                function FormComponent() {
                }
                FormComponent = __decorate([
                    core_1.Component({
                        selector: 'form',
                        template: "\n\n\t<form class=\"form-horizontal\">\n\t  <div class=\"form-group\">\n\t    <label class=\"control-label col-sm-2\" for=\"email\">Email:</label>\n\t    <div class=\"col-sm-10\">\n\t      <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Enter email\">\n\t    </div>\n\t  </div>\n\t  <div class=\"form-group\">\n\t    <label class=\"control-label col-sm-2\" for=\"pwd\">Password:</label>\n\t    <div class=\"col-sm-10\"> \n\t      <input type=\"password\" class=\"form-control\" id=\"pwd\" placeholder=\"Enter password\">\n\t    </div>\n\t  </div>\n\t  <div class=\"form-group\"> \n\t    <div class=\"col-sm-offset-2 col-sm-10\">\n\t      <div class=\"checkbox\">\n\t        <label><input type=\"checkbox\"> Remember me</label>\n\t      </div>\n\t    </div>\n\t  </div>\n\t  <div class=\"form-group\"> \n\t    <div class=\"col-sm-offset-2 col-sm-10\">\n\t      <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n\t    </div>\n\t  </div>\n\t</form>\n\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], FormComponent);
                return FormComponent;
            }());
            exports_1("FormComponent", FormComponent);
        }
    }
});
//# sourceMappingURL=form.component.js.map