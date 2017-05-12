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
    var VoteComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            VoteComponent = (function () {
                function VoteComponent() {
                    this.vote = new core_1.EventEmitter();
                }
                VoteComponent.prototype.onUpClick = function () {
                    if (!this.isUpActive && !this.isDownActive) {
                        this.isUpActive = true;
                        this.title++;
                    }
                    if (this.isDownActive) {
                        this.title++;
                        this.isDownActive = false;
                    }
                };
                VoteComponent.prototype.onDownClick = function () {
                    if (!this.isUpActive && !this.isDownActive) {
                        this.isDownActive = true;
                        this.title--;
                    }
                    if (this.isUpActive) {
                        this.title--;
                        this.isUpActive = false;
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], VoteComponent.prototype, "isUpActive", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], VoteComponent.prototype, "isDownActive", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], VoteComponent.prototype, "title", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], VoteComponent.prototype, "vote", void 0);
                VoteComponent = __decorate([
                    core_1.Component({
                        selector: 'vote',
                        template: "<div style=\"width:20px;\">\n\t<i class = \"glyphicon glyphicon-menu-up\" [class.highlighted]=\"isUpActive\" on-click=\"onUpClick()\"></i>\n\t<span>{{title}}</span>\n\t<i class = \"glyphicon glyphicon-menu-down\" [class.highlighted]=\"isDownActive\" on-click=\"onDownClick()\"></i>\n\t</div>\n\t",
                        styles: ["\n\t.gylphicon-menu-up{\n\t\tcolor: #CCC,\n\t\tcursor: pointer,;\n\t}\n\n\t.gylphicon-menu-down{\n\t\tcolor: #CCC,\n\t\tcursor: pointer,;\n\t}\n\t.highlighted{\n\t\tcolor: orange;\n\t}\n\t"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], VoteComponent);
                return VoteComponent;
            }());
            exports_1("VoteComponent", VoteComponent);
        }
    }
});
//# sourceMappingURL=voter.component.js.map