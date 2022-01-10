/**
 * @file An auto-register of page routes, This will compile all `routes.js` and
 * output a single array of routes.
 */

const routes = [];

(function mergeRoutes() {
    const routers = import.meta.globEager('../pages/**/routes.js');

    for (const key in routers) {
        routes.push(...routers[key].default);
    }
})();

export default routes;
