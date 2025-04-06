"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
exports.controller = controller;
const express_1 = require("express");
exports.router = (0, express_1.Router)();
require("reflect-metadata");
function controller(routePrefix) {
    return function (target) {
        for (let key of Object.getOwnPropertyNames(target.prototype)) {
            const routeHandler = target.prototype[key];
            const path = Reflect.getMetadata('path', target.prototype, key);
            if (path) {
                exports.router.get(`${routePrefix}${path}`, routeHandler);
            }
        }
    };
}
