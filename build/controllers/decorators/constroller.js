"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = controller;
function controller(p0) {
    return function (target, key, desc) {
        Reflect.defineMetadata('path', path, target, key);
    };
}
