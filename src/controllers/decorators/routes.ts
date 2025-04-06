import 'reflect-metadata';

export function get(routePrefix: string) {
    return function(target: Function) {
        for (let key in target.prototype) {
           const routeHandler = target.prototype[key];

           const path = Reflect.getMetadata('path', target.prototype, key);
        }
    }
}