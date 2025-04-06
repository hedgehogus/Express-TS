import { Router } from 'express';
export const router = Router();
import 'reflect-metadata';

export function controller(routePrefix: string) {
    return function (target: Function) {
        for (let key of Object.getOwnPropertyNames(target.prototype)) {
            const routeHandler = target.prototype[key];

            const path = Reflect.getMetadata('path', target.prototype, key);

            if (path) {
                router.get(`${routePrefix}${path}`, routeHandler);
            }
        }
    }
}