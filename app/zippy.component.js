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
    var ZippyComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ZippyComponent = (function () {
                function ZippyComponent() {
                    this.isActive = false;
                }
                ZippyComponent.prototype.toggle = function () {
                    this.isActive = !this.isActive;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ZippyComponent.prototype, "title", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ZippyComponent.prototype, "body", void 0);
                ZippyComponent = __decorate([
                    core_1.Component({
                        selector: 'zippy',
                        template: "\n\n\t<div class = \"zippy-container\">\n\t\t<div class = \"zippy-title\">\n\t\t{{title}}\n\t\t\n\t\t<i class = \"glyphicon\" \n\t\t\n\t\t[ngClass] = \"{\n\t\t\t'glyphicon-chevron-up' : isActive,\n\t\t\t'glyphicon-chevron-down' : !isActive\n\n\t\t}\" \n\n\t\t(click)=toggle()></i>\n\t\t\n\t\t</div>\n\t\t\n\t\t<div *ngIf = \"isActive\" class = \"zippy-body\">\n\t\t<ng-content select=\".body\"></ng-content>\n\t\t</div>\n\n\t</div>\n\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], ZippyComponent);
                return ZippyComponent;
            }());
            exports_1("ZippyComponent", ZippyComponent);
        }
    }
});
//# sourceMappingURL=zippy.component.js.map