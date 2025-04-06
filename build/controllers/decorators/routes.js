"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = get;
require("reflect-metadata");
function get(routePrefix) {
    return function (target) {
        for (let key in target.prototype) {
            const routeHandler = target.prototype[key];
            const path = Reflect.getMetadata('path', target.prototype, key);
        }
    };
}
