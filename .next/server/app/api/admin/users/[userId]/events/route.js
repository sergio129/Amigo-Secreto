"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/admin/users/[userId]/events/route";
exports.ids = ["app/api/admin/users/[userId]/events/route"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Fusers%2F%5BuserId%5D%2Fevents%2Froute&page=%2Fapi%2Fadmin%2Fusers%2F%5BuserId%5D%2Fevents%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fusers%2F%5BuserId%5D%2Fevents%2Froute.ts&appDir=E%3A%5CProyectos%5CAmigo%20Secreto%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CProyectos%5CAmigo%20Secreto&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Fusers%2F%5BuserId%5D%2Fevents%2Froute&page=%2Fapi%2Fadmin%2Fusers%2F%5BuserId%5D%2Fevents%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fusers%2F%5BuserId%5D%2Fevents%2Froute.ts&appDir=E%3A%5CProyectos%5CAmigo%20Secreto%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CProyectos%5CAmigo%20Secreto&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var E_Proyectos_Amigo_Secreto_app_api_admin_users_userId_events_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/admin/users/[userId]/events/route.ts */ \"(rsc)/./app/api/admin/users/[userId]/events/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/admin/users/[userId]/events/route\",\n        pathname: \"/api/admin/users/[userId]/events\",\n        filename: \"route\",\n        bundlePath: \"app/api/admin/users/[userId]/events/route\"\n    },\n    resolvedPagePath: \"E:\\\\Proyectos\\\\Amigo Secreto\\\\app\\\\api\\\\admin\\\\users\\\\[userId]\\\\events\\\\route.ts\",\n    nextConfigOutput,\n    userland: E_Proyectos_Amigo_Secreto_app_api_admin_users_userId_events_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/admin/users/[userId]/events/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhZG1pbiUyRnVzZXJzJTJGJTVCdXNlcklkJTVEJTJGZXZlbnRzJTJGcm91dGUmcGFnZT0lMkZhcGklMkZhZG1pbiUyRnVzZXJzJTJGJTVCdXNlcklkJTVEJTJGZXZlbnRzJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGYWRtaW4lMkZ1c2VycyUyRiU1QnVzZXJJZCU1RCUyRmV2ZW50cyUyRnJvdXRlLnRzJmFwcERpcj1FJTNBJTVDUHJveWVjdG9zJTVDQW1pZ28lMjBTZWNyZXRvJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1FJTNBJTVDUHJveWVjdG9zJTVDQW1pZ28lMjBTZWNyZXRvJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNnQztBQUM3RztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL2FtaWdvLXNlY3JldG8vPzIxNTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiRTpcXFxcUHJveWVjdG9zXFxcXEFtaWdvIFNlY3JldG9cXFxcYXBwXFxcXGFwaVxcXFxhZG1pblxcXFx1c2Vyc1xcXFxbdXNlcklkXVxcXFxldmVudHNcXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2FkbWluL3VzZXJzL1t1c2VySWRdL2V2ZW50cy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2FkbWluL3VzZXJzL1t1c2VySWRdL2V2ZW50c1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYWRtaW4vdXNlcnMvW3VzZXJJZF0vZXZlbnRzL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiRTpcXFxcUHJveWVjdG9zXFxcXEFtaWdvIFNlY3JldG9cXFxcYXBwXFxcXGFwaVxcXFxhZG1pblxcXFx1c2Vyc1xcXFxbdXNlcklkXVxcXFxldmVudHNcXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2FkbWluL3VzZXJzL1t1c2VySWRdL2V2ZW50cy9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Fusers%2F%5BuserId%5D%2Fevents%2Froute&page=%2Fapi%2Fadmin%2Fusers%2F%5BuserId%5D%2Fevents%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fusers%2F%5BuserId%5D%2Fevents%2Froute.ts&appDir=E%3A%5CProyectos%5CAmigo%20Secreto%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CProyectos%5CAmigo%20Secreto&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/admin/users/[userId]/events/route.ts":
/*!******************************************************!*\
  !*** ./app/api/admin/users/[userId]/events/route.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_auth_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/auth-utils */ \"(rsc)/./lib/auth-utils.ts\");\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/mongodb */ \"(rsc)/./lib/mongodb.ts\");\n\n\n\n\nasync function GET(request, { params }) {\n    try {\n        const user = await (0,_lib_auth_utils__WEBPACK_IMPORTED_MODULE_2__.getUserFromSession)();\n        const authError = (0,_lib_auth_utils__WEBPACK_IMPORTED_MODULE_2__.requireAdmin)(user);\n        if (authError) return authError;\n        const { userId } = params;\n        const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\n        const db = client.db(\"SaludDirecta\");\n        // Obtener el usuario para verificar que existe\n        const targetUser = await db.collection(\"amigo_secreto_users\").findOne({\n            _id: new mongodb__WEBPACK_IMPORTED_MODULE_1__.ObjectId(userId)\n        });\n        if (!targetUser) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Usuario no encontrado\"\n            }, {\n                status: 404\n            });\n        }\n        // Obtener eventos creados por este usuario\n        const events = await db.collection(\"amigo_secreto_events\").find({\n            createdBy: targetUser.email\n        }).toArray();\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(events);\n    } catch (error) {\n        console.error(\"Error fetching user events:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Error interno del servidor\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2FkbWluL3VzZXJzL1t1c2VySWRdL2V2ZW50cy9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBdUQ7QUFDckI7QUFDaUM7QUFDMUI7QUFFbEMsZUFBZUssSUFDcEJDLE9BQW9CLEVBQ3BCLEVBQUVDLE1BQU0sRUFBa0M7SUFFMUMsSUFBSTtRQUNGLE1BQU1DLE9BQU8sTUFBTU4sbUVBQWtCQTtRQUNyQyxNQUFNTyxZQUFZTiw2REFBWUEsQ0FBQ0s7UUFDL0IsSUFBSUMsV0FBVyxPQUFPQTtRQUV0QixNQUFNLEVBQUVDLE1BQU0sRUFBRSxHQUFHSDtRQUVuQixNQUFNSSxTQUFTLE1BQU1QLG9EQUFhQTtRQUNsQyxNQUFNUSxLQUFLRCxPQUFPQyxFQUFFLENBQUM7UUFFckIsK0NBQStDO1FBQy9DLE1BQU1DLGFBQWEsTUFBTUQsR0FBR0UsVUFBVSxDQUFDLHVCQUF1QkMsT0FBTyxDQUFDO1lBQ3BFQyxLQUFLLElBQUlmLDZDQUFRQSxDQUFDUztRQUNwQjtRQUVBLElBQUksQ0FBQ0csWUFBWTtZQUNmLE9BQU9iLHFEQUFZQSxDQUFDaUIsSUFBSSxDQUFDO2dCQUFFQyxPQUFPO1lBQXdCLEdBQUc7Z0JBQUVDLFFBQVE7WUFBSTtRQUM3RTtRQUVBLDJDQUEyQztRQUMzQyxNQUFNQyxTQUFTLE1BQU1SLEdBQUdFLFVBQVUsQ0FBQyx3QkFBd0JPLElBQUksQ0FBQztZQUM5REMsV0FBV1QsV0FBV1UsS0FBSztRQUM3QixHQUFHQyxPQUFPO1FBRVYsT0FBT3hCLHFEQUFZQSxDQUFDaUIsSUFBSSxDQUFDRztJQUMzQixFQUFFLE9BQU9GLE9BQU87UUFDZE8sUUFBUVAsS0FBSyxDQUFDLCtCQUErQkE7UUFDN0MsT0FBT2xCLHFEQUFZQSxDQUFDaUIsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBNkIsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDbEY7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2FtaWdvLXNlY3JldG8vLi9hcHAvYXBpL2FkbWluL3VzZXJzL1t1c2VySWRdL2V2ZW50cy9yb3V0ZS50cz8yY2ZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcidcclxuaW1wb3J0IHsgT2JqZWN0SWQgfSBmcm9tICdtb25nb2RiJ1xyXG5pbXBvcnQgeyBnZXRVc2VyRnJvbVNlc3Npb24sIHJlcXVpcmVBZG1pbiB9IGZyb20gJ0AvbGliL2F1dGgtdXRpbHMnXHJcbmltcG9ydCBjbGllbnRQcm9taXNlIGZyb20gJ0AvbGliL21vbmdvZGInXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKFxyXG4gIHJlcXVlc3Q6IE5leHRSZXF1ZXN0LFxyXG4gIHsgcGFyYW1zIH06IHsgcGFyYW1zOiB7IHVzZXJJZDogc3RyaW5nIH0gfVxyXG4pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGdldFVzZXJGcm9tU2Vzc2lvbigpXHJcbiAgICBjb25zdCBhdXRoRXJyb3IgPSByZXF1aXJlQWRtaW4odXNlcilcclxuICAgIGlmIChhdXRoRXJyb3IpIHJldHVybiBhdXRoRXJyb3JcclxuXHJcbiAgICBjb25zdCB7IHVzZXJJZCB9ID0gcGFyYW1zXHJcblxyXG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgY2xpZW50UHJvbWlzZVxyXG4gICAgY29uc3QgZGIgPSBjbGllbnQuZGIoJ1NhbHVkRGlyZWN0YScpXHJcblxyXG4gICAgLy8gT2J0ZW5lciBlbCB1c3VhcmlvIHBhcmEgdmVyaWZpY2FyIHF1ZSBleGlzdGVcclxuICAgIGNvbnN0IHRhcmdldFVzZXIgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCdhbWlnb19zZWNyZXRvX3VzZXJzJykuZmluZE9uZSh7XHJcbiAgICAgIF9pZDogbmV3IE9iamVjdElkKHVzZXJJZClcclxuICAgIH0pXHJcblxyXG4gICAgaWYgKCF0YXJnZXRVc2VyKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnVXN1YXJpbyBubyBlbmNvbnRyYWRvJyB9LCB7IHN0YXR1czogNDA0IH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gT2J0ZW5lciBldmVudG9zIGNyZWFkb3MgcG9yIGVzdGUgdXN1YXJpb1xyXG4gICAgY29uc3QgZXZlbnRzID0gYXdhaXQgZGIuY29sbGVjdGlvbignYW1pZ29fc2VjcmV0b19ldmVudHMnKS5maW5kKHtcclxuICAgICAgY3JlYXRlZEJ5OiB0YXJnZXRVc2VyLmVtYWlsXHJcbiAgICB9KS50b0FycmF5KClcclxuXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oZXZlbnRzKVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB1c2VyIGV2ZW50czonLCBlcnJvcilcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnRXJyb3IgaW50ZXJubyBkZWwgc2Vydmlkb3InIH0sIHsgc3RhdHVzOiA1MDAgfSlcclxuICB9XHJcbn0iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiT2JqZWN0SWQiLCJnZXRVc2VyRnJvbVNlc3Npb24iLCJyZXF1aXJlQWRtaW4iLCJjbGllbnRQcm9taXNlIiwiR0VUIiwicmVxdWVzdCIsInBhcmFtcyIsInVzZXIiLCJhdXRoRXJyb3IiLCJ1c2VySWQiLCJjbGllbnQiLCJkYiIsInRhcmdldFVzZXIiLCJjb2xsZWN0aW9uIiwiZmluZE9uZSIsIl9pZCIsImpzb24iLCJlcnJvciIsInN0YXR1cyIsImV2ZW50cyIsImZpbmQiLCJjcmVhdGVkQnkiLCJlbWFpbCIsInRvQXJyYXkiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/admin/users/[userId]/events/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/auth-utils.ts":
/*!***************************!*\
  !*** ./lib/auth-utils.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getUserFromSession: () => (/* binding */ getUserFromSession),\n/* harmony export */   requireAdmin: () => (/* binding */ requireAdmin),\n/* harmony export */   requireAuth: () => (/* binding */ requireAuth),\n/* harmony export */   requireOwnershipOrAdmin: () => (/* binding */ requireOwnershipOrAdmin)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./lib/auth.ts\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\n\nasync function getUserFromSession() {\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_0__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_1__.authOptions);\n    if (!session?.user) return null;\n    return session.user;\n}\nfunction requireAuth(user) {\n    if (!user) {\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            error: \"No autorizado\"\n        }, {\n            status: 401\n        });\n    }\n    return null;\n}\nfunction requireAdmin(user) {\n    const authError = requireAuth(user);\n    if (authError) return authError;\n    if (user.role !== \"admin\") {\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            error: \"Acceso denegado. Se requiere rol de administrador\"\n        }, {\n            status: 403\n        });\n    }\n    return null;\n}\nfunction requireOwnershipOrAdmin(user, ownerEmail) {\n    const authError = requireAuth(user);\n    if (authError) return authError;\n    if (user.role !== \"admin\" && user.email !== ownerEmail) {\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            error: \"Acceso denegado. Solo puedes acceder a tus propios eventos\"\n        }, {\n            status: 403\n        });\n    }\n    return null;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvYXV0aC11dGlscy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE0QztBQUNKO0FBQ0U7QUFFbkMsZUFBZUc7SUFDcEIsTUFBTUMsVUFBVSxNQUFNSiwyREFBZ0JBLENBQUNDLGtEQUFXQTtJQUNsRCxJQUFJLENBQUNHLFNBQVNDLE1BQU0sT0FBTztJQUUzQixPQUFPRCxRQUFRQyxJQUFJO0FBQ3JCO0FBRU8sU0FBU0MsWUFBWUQsSUFBUztJQUNuQyxJQUFJLENBQUNBLE1BQU07UUFDVCxPQUFPSCxxREFBWUEsQ0FBQ0ssSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBZ0IsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDckU7SUFDQSxPQUFPO0FBQ1Q7QUFFTyxTQUFTQyxhQUFhTCxJQUFTO0lBQ3BDLE1BQU1NLFlBQVlMLFlBQVlEO0lBQzlCLElBQUlNLFdBQVcsT0FBT0E7SUFFdEIsSUFBSU4sS0FBS08sSUFBSSxLQUFLLFNBQVM7UUFDekIsT0FBT1YscURBQVlBLENBQUNLLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQW9ELEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQ3pHO0lBQ0EsT0FBTztBQUNUO0FBRU8sU0FBU0ksd0JBQXdCUixJQUFTLEVBQUVTLFVBQWtCO0lBQ25FLE1BQU1ILFlBQVlMLFlBQVlEO0lBQzlCLElBQUlNLFdBQVcsT0FBT0E7SUFFdEIsSUFBSU4sS0FBS08sSUFBSSxLQUFLLFdBQVdQLEtBQUtVLEtBQUssS0FBS0QsWUFBWTtRQUN0RCxPQUFPWixxREFBWUEsQ0FBQ0ssSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBNkQsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDbEg7SUFDQSxPQUFPO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbWlnby1zZWNyZXRvLy4vbGliL2F1dGgtdXRpbHMudHM/MzgxMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTZXJ2ZXJTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoJ1xyXG5pbXBvcnQgeyBhdXRoT3B0aW9ucyB9IGZyb20gJ0AvbGliL2F1dGgnXHJcbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJ1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJGcm9tU2Vzc2lvbigpIHtcclxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucylcclxuICBpZiAoIXNlc3Npb24/LnVzZXIpIHJldHVybiBudWxsXHJcblxyXG4gIHJldHVybiBzZXNzaW9uLnVzZXJcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlcXVpcmVBdXRoKHVzZXI6IGFueSk6IE5leHRSZXNwb25zZSB8IG51bGwge1xyXG4gIGlmICghdXNlcikge1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdObyBhdXRvcml6YWRvJyB9LCB7IHN0YXR1czogNDAxIH0pXHJcbiAgfVxyXG4gIHJldHVybiBudWxsXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXF1aXJlQWRtaW4odXNlcjogYW55KTogTmV4dFJlc3BvbnNlIHwgbnVsbCB7XHJcbiAgY29uc3QgYXV0aEVycm9yID0gcmVxdWlyZUF1dGgodXNlcilcclxuICBpZiAoYXV0aEVycm9yKSByZXR1cm4gYXV0aEVycm9yXHJcblxyXG4gIGlmICh1c2VyLnJvbGUgIT09ICdhZG1pbicpIHtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnQWNjZXNvIGRlbmVnYWRvLiBTZSByZXF1aWVyZSByb2wgZGUgYWRtaW5pc3RyYWRvcicgfSwgeyBzdGF0dXM6IDQwMyB9KVxyXG4gIH1cclxuICByZXR1cm4gbnVsbFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVxdWlyZU93bmVyc2hpcE9yQWRtaW4odXNlcjogYW55LCBvd25lckVtYWlsOiBzdHJpbmcpOiBOZXh0UmVzcG9uc2UgfCBudWxsIHtcclxuICBjb25zdCBhdXRoRXJyb3IgPSByZXF1aXJlQXV0aCh1c2VyKVxyXG4gIGlmIChhdXRoRXJyb3IpIHJldHVybiBhdXRoRXJyb3JcclxuXHJcbiAgaWYgKHVzZXIucm9sZSAhPT0gJ2FkbWluJyAmJiB1c2VyLmVtYWlsICE9PSBvd25lckVtYWlsKSB7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0FjY2VzbyBkZW5lZ2Fkby4gU29sbyBwdWVkZXMgYWNjZWRlciBhIHR1cyBwcm9waW9zIGV2ZW50b3MnIH0sIHsgc3RhdHVzOiA0MDMgfSlcclxuICB9XHJcbiAgcmV0dXJuIG51bGxcclxufSJdLCJuYW1lcyI6WyJnZXRTZXJ2ZXJTZXNzaW9uIiwiYXV0aE9wdGlvbnMiLCJOZXh0UmVzcG9uc2UiLCJnZXRVc2VyRnJvbVNlc3Npb24iLCJzZXNzaW9uIiwidXNlciIsInJlcXVpcmVBdXRoIiwianNvbiIsImVycm9yIiwic3RhdHVzIiwicmVxdWlyZUFkbWluIiwiYXV0aEVycm9yIiwicm9sZSIsInJlcXVpcmVPd25lcnNoaXBPckFkbWluIiwib3duZXJFbWFpbCIsImVtYWlsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/auth-utils.ts\n");

/***/ }),

/***/ "(rsc)/./lib/auth.ts":
/*!*********************!*\
  !*** ./lib/auth.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/mongodb */ \"(rsc)/./lib/mongodb.ts\");\n\n\n\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            name: \"credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.email || !credentials?.password) {\n                    return null;\n                }\n                try {\n                    const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n                    const db = client.db(\"SaludDirecta\");\n                    // Buscar solo en la tabla amigo_secreto_users\n                    const user = await db.collection(\"amigo_secreto_users\").findOne({\n                        email: credentials.email\n                    });\n                    if (!user) {\n                        console.log(`Usuario no encontrado: ${credentials.email}`);\n                        return null;\n                    }\n                    const isPasswordValid = await bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().compare(credentials.password, user.password);\n                    if (!isPasswordValid) {\n                        console.log(`Contraseña inválida para: ${credentials.email}`);\n                        return null;\n                    }\n                    console.log(`Login exitoso para: ${credentials.email} (rol: ${user.role})`);\n                    return {\n                        id: user._id.toString(),\n                        email: user.email,\n                        name: user.name,\n                        role: user.role,\n                        maxEvents: user.maxEvents\n                    };\n                } catch (error) {\n                    console.error(\"Error durante la autenticaci\\xf3n:\", error);\n                    return null;\n                }\n            }\n        })\n    ],\n    session: {\n        strategy: \"jwt\"\n    },\n    pages: {\n        signIn: \"/admin/login\"\n    },\n    callbacks: {\n        async jwt ({ token, user }) {\n            if (user) {\n                token.id = user.id;\n                token.role = user.role;\n                token.maxEvents = user.maxEvents;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            if (token && session.user) {\n                session.user.id = token.id;\n                session.user.role = token.role;\n                session.user.maxEvents = token.maxEvents;\n            }\n            return session;\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvYXV0aC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNpRTtBQUNwQztBQUNZO0FBWWxDLE1BQU1HLGNBQStCO0lBQzFDQyxXQUFXO1FBQ1RKLDJFQUFtQkEsQ0FBQztZQUNsQkssTUFBTTtZQUNOQyxhQUFhO2dCQUNYQyxPQUFPO29CQUFFQyxPQUFPO29CQUFTQyxNQUFNO2dCQUFRO2dCQUN2Q0MsVUFBVTtvQkFBRUYsT0FBTztvQkFBWUMsTUFBTTtnQkFBVztZQUNsRDtZQUNBLE1BQU1FLFdBQVVMLFdBQVc7Z0JBQ3pCLElBQUksQ0FBQ0EsYUFBYUMsU0FBUyxDQUFDRCxhQUFhSSxVQUFVO29CQUNqRCxPQUFPO2dCQUNUO2dCQUVBLElBQUk7b0JBQ0YsTUFBTUUsU0FBUyxNQUFNVixvREFBYUE7b0JBQ2xDLE1BQU1XLEtBQUtELE9BQU9DLEVBQUUsQ0FBQztvQkFFckIsOENBQThDO29CQUM5QyxNQUFNQyxPQUFPLE1BQU1ELEdBQUdFLFVBQVUsQ0FBQyx1QkFBdUJDLE9BQU8sQ0FBQzt3QkFDOURULE9BQU9ELFlBQVlDLEtBQUs7b0JBQzFCO29CQUVBLElBQUksQ0FBQ08sTUFBTTt3QkFDVEcsUUFBUUMsR0FBRyxDQUFDLENBQUMsdUJBQXVCLEVBQUVaLFlBQVlDLEtBQUssQ0FBQyxDQUFDO3dCQUN6RCxPQUFPO29CQUNUO29CQUVBLE1BQU1ZLGtCQUFrQixNQUFNbEIsdURBQWMsQ0FBQ0ssWUFBWUksUUFBUSxFQUFFSSxLQUFLSixRQUFRO29CQUVoRixJQUFJLENBQUNTLGlCQUFpQjt3QkFDcEJGLFFBQVFDLEdBQUcsQ0FBQyxDQUFDLDBCQUEwQixFQUFFWixZQUFZQyxLQUFLLENBQUMsQ0FBQzt3QkFDNUQsT0FBTztvQkFDVDtvQkFFQVUsUUFBUUMsR0FBRyxDQUFDLENBQUMsb0JBQW9CLEVBQUVaLFlBQVlDLEtBQUssQ0FBQyxPQUFPLEVBQUVPLEtBQUtPLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBRTFFLE9BQU87d0JBQ0xDLElBQUlSLEtBQUtTLEdBQUcsQ0FBQ0MsUUFBUTt3QkFDckJqQixPQUFPTyxLQUFLUCxLQUFLO3dCQUNqQkYsTUFBTVMsS0FBS1QsSUFBSTt3QkFDZmdCLE1BQU1QLEtBQUtPLElBQUk7d0JBQ2ZJLFdBQVdYLEtBQUtXLFNBQVM7b0JBQzNCO2dCQUNGLEVBQUUsT0FBT0MsT0FBTztvQkFDZFQsUUFBUVMsS0FBSyxDQUFDLHNDQUFtQ0E7b0JBQ2pELE9BQU87Z0JBQ1Q7WUFDRjtRQUNGO0tBQ0Q7SUFDREMsU0FBUztRQUNQQyxVQUFVO0lBQ1o7SUFDQUMsT0FBTztRQUNMQyxRQUFRO0lBQ1Y7SUFDQUMsV0FBVztRQUNULE1BQU1DLEtBQUksRUFBRUMsS0FBSyxFQUFFbkIsSUFBSSxFQUFFO1lBQ3ZCLElBQUlBLE1BQU07Z0JBQ1JtQixNQUFNWCxFQUFFLEdBQUdSLEtBQUtRLEVBQUU7Z0JBQ2xCVyxNQUFNWixJQUFJLEdBQUcsS0FBY0EsSUFBSTtnQkFDL0JZLE1BQU1SLFNBQVMsR0FBRyxLQUFjQSxTQUFTO1lBQzNDO1lBQ0EsT0FBT1E7UUFDVDtRQUNBLE1BQU1OLFNBQVEsRUFBRUEsT0FBTyxFQUFFTSxLQUFLLEVBQUU7WUFDOUIsSUFBSUEsU0FBU04sUUFBUWIsSUFBSSxFQUFFO2dCQUN4QmEsUUFBUWIsSUFBSSxDQUFTUSxFQUFFLEdBQUdXLE1BQU1YLEVBQUU7Z0JBQ2xDSyxRQUFRYixJQUFJLENBQVNPLElBQUksR0FBR1ksTUFBTVosSUFBSTtnQkFDdENNLFFBQVFiLElBQUksQ0FBU1csU0FBUyxHQUFHUSxNQUFNUixTQUFTO1lBQ25EO1lBQ0EsT0FBT0U7UUFDVDtJQUNGO0FBQ0YsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FtaWdvLXNlY3JldG8vLi9saWIvYXV0aC50cz9iZjdlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBdXRoT3B0aW9ucyB9IGZyb20gJ25leHQtYXV0aCdcclxuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFscydcclxuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHRqcydcclxuaW1wb3J0IGNsaWVudFByb21pc2UgZnJvbSAnQC9saWIvbW9uZ29kYidcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVXNlciB7XHJcbiAgX2lkOiBzdHJpbmdcclxuICBlbWFpbDogc3RyaW5nXHJcbiAgbmFtZTogc3RyaW5nXHJcbiAgcm9sZTogJ2FkbWluJyB8ICdndWVzdCdcclxuICBtYXhFdmVudHM/OiBudW1iZXIgLy8gU29sbyBwYXJhIHVzdWFyaW9zIGd1ZXN0XHJcbiAgY3JlYXRlZEF0OiBEYXRlXHJcbiAgdXBkYXRlZEF0PzogRGF0ZVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnM6IE5leHRBdXRoT3B0aW9ucyA9IHtcclxuICBwcm92aWRlcnM6IFtcclxuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xyXG4gICAgICBuYW1lOiAnY3JlZGVudGlhbHMnLFxyXG4gICAgICBjcmVkZW50aWFsczoge1xyXG4gICAgICAgIGVtYWlsOiB7IGxhYmVsOiAnRW1haWwnLCB0eXBlOiAnZW1haWwnIH0sXHJcbiAgICAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6ICdQYXNzd29yZCcsIHR5cGU6ICdwYXNzd29yZCcgfVxyXG4gICAgICB9LFxyXG4gICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMpIHtcclxuICAgICAgICBpZiAoIWNyZWRlbnRpYWxzPy5lbWFpbCB8fCAhY3JlZGVudGlhbHM/LnBhc3N3b3JkKSB7XHJcbiAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNsaWVudFByb21pc2VcclxuICAgICAgICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCdTYWx1ZERpcmVjdGEnKVxyXG5cclxuICAgICAgICAgIC8vIEJ1c2NhciBzb2xvIGVuIGxhIHRhYmxhIGFtaWdvX3NlY3JldG9fdXNlcnNcclxuICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCdhbWlnb19zZWNyZXRvX3VzZXJzJykuZmluZE9uZSh7XHJcbiAgICAgICAgICAgIGVtYWlsOiBjcmVkZW50aWFscy5lbWFpbFxyXG4gICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYFVzdWFyaW8gbm8gZW5jb250cmFkbzogJHtjcmVkZW50aWFscy5lbWFpbH1gKVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGNvbnN0IGlzUGFzc3dvcmRWYWxpZCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKGNyZWRlbnRpYWxzLnBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKVxyXG5cclxuICAgICAgICAgIGlmICghaXNQYXNzd29yZFZhbGlkKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBDb250cmFzZcOxYSBpbnbDoWxpZGEgcGFyYTogJHtjcmVkZW50aWFscy5lbWFpbH1gKVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGNvbnNvbGUubG9nKGBMb2dpbiBleGl0b3NvIHBhcmE6ICR7Y3JlZGVudGlhbHMuZW1haWx9IChyb2w6ICR7dXNlci5yb2xlfSlgKVxyXG5cclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiB1c2VyLl9pZC50b1N0cmluZygpLFxyXG4gICAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcclxuICAgICAgICAgICAgbmFtZTogdXNlci5uYW1lLFxyXG4gICAgICAgICAgICByb2xlOiB1c2VyLnJvbGUsXHJcbiAgICAgICAgICAgIG1heEV2ZW50czogdXNlci5tYXhFdmVudHNcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZHVyYW50ZSBsYSBhdXRlbnRpY2FjacOzbjonLCBlcnJvcilcclxuICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIF0sXHJcbiAgc2Vzc2lvbjoge1xyXG4gICAgc3RyYXRlZ3k6ICdqd3QnXHJcbiAgfSxcclxuICBwYWdlczoge1xyXG4gICAgc2lnbkluOiAnL2FkbWluL2xvZ2luJ1xyXG4gIH0sXHJcbiAgY2FsbGJhY2tzOiB7XHJcbiAgICBhc3luYyBqd3QoeyB0b2tlbiwgdXNlciB9KSB7XHJcbiAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgdG9rZW4uaWQgPSB1c2VyLmlkXHJcbiAgICAgICAgdG9rZW4ucm9sZSA9ICh1c2VyIGFzIGFueSkucm9sZVxyXG4gICAgICAgIHRva2VuLm1heEV2ZW50cyA9ICh1c2VyIGFzIGFueSkubWF4RXZlbnRzXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRva2VuXHJcbiAgICB9LFxyXG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuIH0pIHtcclxuICAgICAgaWYgKHRva2VuICYmIHNlc3Npb24udXNlcikge1xyXG4gICAgICAgIChzZXNzaW9uLnVzZXIgYXMgYW55KS5pZCA9IHRva2VuLmlkIGFzIHN0cmluZ1xyXG4gICAgICAgIChzZXNzaW9uLnVzZXIgYXMgYW55KS5yb2xlID0gdG9rZW4ucm9sZSBhcyBzdHJpbmdcclxuICAgICAgICAoc2Vzc2lvbi51c2VyIGFzIGFueSkubWF4RXZlbnRzID0gdG9rZW4ubWF4RXZlbnRzIGFzIG51bWJlclxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBzZXNzaW9uXHJcbiAgICB9XHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJiY3J5cHQiLCJjbGllbnRQcm9taXNlIiwiYXV0aE9wdGlvbnMiLCJwcm92aWRlcnMiLCJuYW1lIiwiY3JlZGVudGlhbHMiLCJlbWFpbCIsImxhYmVsIiwidHlwZSIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwiY2xpZW50IiwiZGIiLCJ1c2VyIiwiY29sbGVjdGlvbiIsImZpbmRPbmUiLCJjb25zb2xlIiwibG9nIiwiaXNQYXNzd29yZFZhbGlkIiwiY29tcGFyZSIsInJvbGUiLCJpZCIsIl9pZCIsInRvU3RyaW5nIiwibWF4RXZlbnRzIiwiZXJyb3IiLCJzZXNzaW9uIiwic3RyYXRlZ3kiLCJwYWdlcyIsInNpZ25JbiIsImNhbGxiYWNrcyIsImp3dCIsInRva2VuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/./lib/mongodb.ts":
/*!************************!*\
  !*** ./lib/mongodb.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nif (!process.env.MONGODB_URI) {\n    throw new Error('Invalid/Missing environment variable: \"MONGODB_URI\"');\n}\nconst uri = process.env.MONGODB_URI;\nconst options = {};\nlet client;\nlet clientPromise;\nif (true) {\n    // In development mode, use a global variable so that the value\n    // is preserved across module reloads caused by HMR (Hot Module Replacement).\n    let globalWithMongo = global;\n    if (!globalWithMongo._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        globalWithMongo._mongoClientPromise = client.connect();\n    }\n    clientPromise = globalWithMongo._mongoClientPromise;\n} else {}\n// Export a module-scoped MongoClient promise. By doing this in a\n// separate module, the client can be shared across functions.\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9uZ29kYi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBcUM7QUFFckMsSUFBSSxDQUFDQyxRQUFRQyxHQUFHLENBQUNDLFdBQVcsRUFBRTtJQUM1QixNQUFNLElBQUlDLE1BQU07QUFDbEI7QUFFQSxNQUFNQyxNQUFNSixRQUFRQyxHQUFHLENBQUNDLFdBQVc7QUFDbkMsTUFBTUcsVUFBVSxDQUFDO0FBRWpCLElBQUlDO0FBQ0osSUFBSUM7QUFFSixJQUFJUCxJQUF5QixFQUFlO0lBQzFDLCtEQUErRDtJQUMvRCw2RUFBNkU7SUFDN0UsSUFBSVEsa0JBQWtCQztJQUl0QixJQUFJLENBQUNELGdCQUFnQkUsbUJBQW1CLEVBQUU7UUFDeENKLFNBQVMsSUFBSVAsZ0RBQVdBLENBQUNLLEtBQUtDO1FBQzlCRyxnQkFBZ0JFLG1CQUFtQixHQUFHSixPQUFPSyxPQUFPO0lBQ3REO0lBQ0FKLGdCQUFnQkMsZ0JBQWdCRSxtQkFBbUI7QUFDckQsT0FBTyxFQUlOO0FBRUQsaUVBQWlFO0FBQ2pFLDhEQUE4RDtBQUM5RCxpRUFBZUgsYUFBYUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FtaWdvLXNlY3JldG8vLi9saWIvbW9uZ29kYi50cz8wNWJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYidcclxuXHJcbmlmICghcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkpIHtcclxuICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQvTWlzc2luZyBlbnZpcm9ubWVudCB2YXJpYWJsZTogXCJNT05HT0RCX1VSSVwiJylcclxufVxyXG5cclxuY29uc3QgdXJpID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUklcclxuY29uc3Qgb3B0aW9ucyA9IHt9XHJcblxyXG5sZXQgY2xpZW50XHJcbmxldCBjbGllbnRQcm9taXNlOiBQcm9taXNlPE1vbmdvQ2xpZW50PlxyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgLy8gSW4gZGV2ZWxvcG1lbnQgbW9kZSwgdXNlIGEgZ2xvYmFsIHZhcmlhYmxlIHNvIHRoYXQgdGhlIHZhbHVlXHJcbiAgLy8gaXMgcHJlc2VydmVkIGFjcm9zcyBtb2R1bGUgcmVsb2FkcyBjYXVzZWQgYnkgSE1SIChIb3QgTW9kdWxlIFJlcGxhY2VtZW50KS5cclxuICBsZXQgZ2xvYmFsV2l0aE1vbmdvID0gZ2xvYmFsIGFzIHR5cGVvZiBnbG9iYWxUaGlzICYge1xyXG4gICAgX21vbmdvQ2xpZW50UHJvbWlzZT86IFByb21pc2U8TW9uZ29DbGllbnQ+XHJcbiAgfVxyXG5cclxuICBpZiAoIWdsb2JhbFdpdGhNb25nby5fbW9uZ29DbGllbnRQcm9taXNlKSB7XHJcbiAgICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKVxyXG4gICAgZ2xvYmFsV2l0aE1vbmdvLl9tb25nb0NsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpXHJcbiAgfVxyXG4gIGNsaWVudFByb21pc2UgPSBnbG9iYWxXaXRoTW9uZ28uX21vbmdvQ2xpZW50UHJvbWlzZVxyXG59IGVsc2Uge1xyXG4gIC8vIEluIHByb2R1Y3Rpb24gbW9kZSwgaXQncyBiZXN0IHRvIG5vdCB1c2UgYSBnbG9iYWwgdmFyaWFibGUuXHJcbiAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgb3B0aW9ucylcclxuICBjbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKVxyXG59XHJcblxyXG4vLyBFeHBvcnQgYSBtb2R1bGUtc2NvcGVkIE1vbmdvQ2xpZW50IHByb21pc2UuIEJ5IGRvaW5nIHRoaXMgaW4gYVxyXG4vLyBzZXBhcmF0ZSBtb2R1bGUsIHRoZSBjbGllbnQgY2FuIGJlIHNoYXJlZCBhY3Jvc3MgZnVuY3Rpb25zLlxyXG5leHBvcnQgZGVmYXVsdCBjbGllbnRQcm9taXNlIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwiRXJyb3IiLCJ1cmkiLCJvcHRpb25zIiwiY2xpZW50IiwiY2xpZW50UHJvbWlzZSIsImdsb2JhbFdpdGhNb25nbyIsImdsb2JhbCIsIl9tb25nb0NsaWVudFByb21pc2UiLCJjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/mongodb.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/bcryptjs","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/@panva","vendor-chunks/oidc-token-hash"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Fusers%2F%5BuserId%5D%2Fevents%2Froute&page=%2Fapi%2Fadmin%2Fusers%2F%5BuserId%5D%2Fevents%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fusers%2F%5BuserId%5D%2Fevents%2Froute.ts&appDir=E%3A%5CProyectos%5CAmigo%20Secreto%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CProyectos%5CAmigo%20Secreto&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();