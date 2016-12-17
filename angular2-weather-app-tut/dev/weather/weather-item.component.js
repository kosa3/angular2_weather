"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var WeatherItemComponent = (function () {
    function WeatherItemComponent() {
    }
    WeatherItemComponent = __decorate([
        core_1.Component({
            selector: 'weather-item',
            template: "\n        <article class=\"weather-element\">\n            <div class=\"col-1\">\n                <h3>Cityname</h3>\n                <p class=\"info\">CLOUDS</p>\n            </div>\n            <div class=\"col-2\">\n                <span class=\"temperature\">32\u00B0C</span>\n            </div>\n        </article>\n    ",
            styleUrls: ['src/css/weather-item.css']
        })
    ], WeatherItemComponent);
    return WeatherItemComponent;
}());
exports.WeatherItemComponent = WeatherItemComponent;
//# sourceMappingURL=weather-item.component.js.map