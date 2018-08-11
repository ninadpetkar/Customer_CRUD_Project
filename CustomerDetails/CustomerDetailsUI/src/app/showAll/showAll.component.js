"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var ShowAll = (function () {
    function ShowAll() {
        this.selectedValue = '1';
        this.radioButtonChangedOutputEvent = new core_1.EventEmitter();
    }
    ShowAll.prototype.OnRadioButtonChange = function () {
        this.radioButtonChangedOutputEvent.emit(this.selectedValue);
    };
    return ShowAll;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], ShowAll.prototype, "radioButtonChangedOutputEvent", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], ShowAll.prototype, "all", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], ShowAll.prototype, "active", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], ShowAll.prototype, "deactive", void 0);
ShowAll = __decorate([
    core_1.Component({
        selector: 'ShowAll',
        templateUrl: 'app/ShowAll/showAll.component.html',
        styles: ['app/ShowAll/showAll.component.css']
    })
], ShowAll);
exports.ShowAll = ShowAll;
//# sourceMappingURL=showAll.component.js.map