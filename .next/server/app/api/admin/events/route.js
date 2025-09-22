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
exports.id = "app/api/admin/events/route";
exports.ids = ["app/api/admin/events/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Fevents%2Froute&page=%2Fapi%2Fadmin%2Fevents%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fevents%2Froute.ts&appDir=E%3A%5CProyectos%5CAmigo%20Secreto%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CProyectos%5CAmigo%20Secreto&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Fevents%2Froute&page=%2Fapi%2Fadmin%2Fevents%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fevents%2Froute.ts&appDir=E%3A%5CProyectos%5CAmigo%20Secreto%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CProyectos%5CAmigo%20Secreto&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var E_Proyectos_Amigo_Secreto_app_api_admin_events_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/admin/events/route.ts */ \"(rsc)/./app/api/admin/events/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/admin/events/route\",\n        pathname: \"/api/admin/events\",\n        filename: \"route\",\n        bundlePath: \"app/api/admin/events/route\"\n    },\n    resolvedPagePath: \"E:\\\\Proyectos\\\\Amigo Secreto\\\\app\\\\api\\\\admin\\\\events\\\\route.ts\",\n    nextConfigOutput,\n    userland: E_Proyectos_Amigo_Secreto_app_api_admin_events_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/admin/events/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhZG1pbiUyRmV2ZW50cyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGYWRtaW4lMkZldmVudHMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZhZG1pbiUyRmV2ZW50cyUyRnJvdXRlLnRzJmFwcERpcj1FJTNBJTVDUHJveWVjdG9zJTVDQW1pZ28lMjBTZWNyZXRvJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1FJTNBJTVDUHJveWVjdG9zJTVDQW1pZ28lMjBTZWNyZXRvJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNlO0FBQzVGO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYW1pZ28tc2VjcmV0by8/ODM5NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJFOlxcXFxQcm95ZWN0b3NcXFxcQW1pZ28gU2VjcmV0b1xcXFxhcHBcXFxcYXBpXFxcXGFkbWluXFxcXGV2ZW50c1xcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYWRtaW4vZXZlbnRzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYWRtaW4vZXZlbnRzXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hZG1pbi9ldmVudHMvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJFOlxcXFxQcm95ZWN0b3NcXFxcQW1pZ28gU2VjcmV0b1xcXFxhcHBcXFxcYXBpXFxcXGFkbWluXFxcXGV2ZW50c1xcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvYWRtaW4vZXZlbnRzL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Fevents%2Froute&page=%2Fapi%2Fadmin%2Fevents%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fevents%2Froute.ts&appDir=E%3A%5CProyectos%5CAmigo%20Secreto%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CProyectos%5CAmigo%20Secreto&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/admin/events/route.ts":
/*!***************************************!*\
  !*** ./app/api/admin/events/route.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./lib/auth.ts\");\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/mongodb */ \"(rsc)/./lib/mongodb.ts\");\n\n\n\n\nasync function GET() {\n    try {\n        const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n        if (!session) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"No autorizado\"\n            }, {\n                status: 401\n            });\n        }\n        const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\n        const db = client.db(\"SaludDirecta\");\n        const events = await db.collection(\"amigo_secreto_events\").find({}).toArray();\n        // Agregar conteo de participantes a cada evento\n        const eventsWithCounts = await Promise.all(events.map(async (event)=>{\n            const participantCount = await db.collection(\"participants\").countDocuments({\n                eventId: event._id.toString()\n            });\n            return {\n                ...event,\n                _id: event._id.toString(),\n                participantCount,\n                date: event.date ? new Date(event.date).toISOString().split(\"T\")[0] : null\n            };\n        }));\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(eventsWithCounts);\n    } catch (error) {\n        console.error(\"Error fetching events:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Error interno del servidor\"\n        }, {\n            status: 500\n        });\n    }\n}\nasync function POST(request) {\n    try {\n        const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n        if (!session) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"No autorizado\"\n            }, {\n                status: 401\n            });\n        }\n        const body = await request.json();\n        const { name, description, date } = body;\n        if (!name || !description || !date) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Faltan campos requeridos\"\n            }, {\n                status: 400\n            });\n        }\n        const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\n        const db = client.db(\"SaludDirecta\");\n        const newEvent = {\n            name,\n            description,\n            date: new Date(date),\n            isActive: true,\n            createdAt: new Date(),\n            createdBy: session.user?.email\n        };\n        const result = await db.collection(\"amigo_secreto_events\").insertOne(newEvent);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            _id: result.insertedId.toString(),\n            ...newEvent\n        });\n    } catch (error) {\n        console.error(\"Error creating event:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Error interno del servidor\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2FkbWluL2V2ZW50cy9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXVEO0FBQ1g7QUFDSjtBQUNDO0FBRWxDLGVBQWVJO0lBQ3BCLElBQUk7UUFDRixNQUFNQyxVQUFVLE1BQU1KLDJEQUFnQkEsQ0FBQ0Msa0RBQVdBO1FBRWxELElBQUksQ0FBQ0csU0FBUztZQUNaLE9BQU9MLHFEQUFZQSxDQUFDTSxJQUFJLENBQUM7Z0JBQUVDLE9BQU87WUFBZ0IsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ3JFO1FBRUEsTUFBTUMsU0FBUyxNQUFNTixvREFBYUE7UUFDbEMsTUFBTU8sS0FBS0QsT0FBT0MsRUFBRSxDQUFDO1FBRXJCLE1BQU1DLFNBQVMsTUFBTUQsR0FBR0UsVUFBVSxDQUFDLHdCQUF3QkMsSUFBSSxDQUFDLENBQUMsR0FBR0MsT0FBTztRQUUzRSxnREFBZ0Q7UUFDaEQsTUFBTUMsbUJBQW1CLE1BQU1DLFFBQVFDLEdBQUcsQ0FDeENOLE9BQU9PLEdBQUcsQ0FBQyxPQUFPQztZQUNoQixNQUFNQyxtQkFBbUIsTUFBTVYsR0FBR0UsVUFBVSxDQUFDLGdCQUFnQlMsY0FBYyxDQUFDO2dCQUMxRUMsU0FBU0gsTUFBTUksR0FBRyxDQUFDQyxRQUFRO1lBQzdCO1lBRUEsT0FBTztnQkFDTCxHQUFHTCxLQUFLO2dCQUNSSSxLQUFLSixNQUFNSSxHQUFHLENBQUNDLFFBQVE7Z0JBQ3ZCSjtnQkFDQUssTUFBTU4sTUFBTU0sSUFBSSxHQUFHLElBQUlDLEtBQUtQLE1BQU1NLElBQUksRUFBRUUsV0FBVyxHQUFHQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRztZQUN4RTtRQUNGO1FBR0YsT0FBTzVCLHFEQUFZQSxDQUFDTSxJQUFJLENBQUNTO0lBQzNCLEVBQUUsT0FBT1IsT0FBTztRQUNkc0IsUUFBUXRCLEtBQUssQ0FBQywwQkFBMEJBO1FBQ3hDLE9BQU9QLHFEQUFZQSxDQUFDTSxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUE2QixHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUNsRjtBQUNGO0FBRU8sZUFBZXNCLEtBQUtDLE9BQW9CO0lBQzdDLElBQUk7UUFDRixNQUFNMUIsVUFBVSxNQUFNSiwyREFBZ0JBLENBQUNDLGtEQUFXQTtRQUVsRCxJQUFJLENBQUNHLFNBQVM7WUFDWixPQUFPTCxxREFBWUEsQ0FBQ00sSUFBSSxDQUFDO2dCQUFFQyxPQUFPO1lBQWdCLEdBQUc7Z0JBQUVDLFFBQVE7WUFBSTtRQUNyRTtRQUVBLE1BQU13QixPQUFPLE1BQU1ELFFBQVF6QixJQUFJO1FBQy9CLE1BQU0sRUFBRTJCLElBQUksRUFBRUMsV0FBVyxFQUFFVCxJQUFJLEVBQUUsR0FBR087UUFFcEMsSUFBSSxDQUFDQyxRQUFRLENBQUNDLGVBQWUsQ0FBQ1QsTUFBTTtZQUNsQyxPQUFPekIscURBQVlBLENBQUNNLElBQUksQ0FBQztnQkFBRUMsT0FBTztZQUEyQixHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDaEY7UUFFQSxNQUFNQyxTQUFTLE1BQU1OLG9EQUFhQTtRQUNsQyxNQUFNTyxLQUFLRCxPQUFPQyxFQUFFLENBQUM7UUFFckIsTUFBTXlCLFdBQVc7WUFDZkY7WUFDQUM7WUFDQVQsTUFBTSxJQUFJQyxLQUFLRDtZQUNmVyxVQUFVO1lBQ1ZDLFdBQVcsSUFBSVg7WUFDZlksV0FBV2pDLFFBQVFrQyxJQUFJLEVBQUVDO1FBQzNCO1FBRUEsTUFBTUMsU0FBUyxNQUFNL0IsR0FBR0UsVUFBVSxDQUFDLHdCQUF3QjhCLFNBQVMsQ0FBQ1A7UUFFckUsT0FBT25DLHFEQUFZQSxDQUFDTSxJQUFJLENBQUM7WUFDdkJpQixLQUFLa0IsT0FBT0UsVUFBVSxDQUFDbkIsUUFBUTtZQUMvQixHQUFHVyxRQUFRO1FBQ2I7SUFDRixFQUFFLE9BQU81QixPQUFPO1FBQ2RzQixRQUFRdEIsS0FBSyxDQUFDLHlCQUF5QkE7UUFDdkMsT0FBT1AscURBQVlBLENBQUNNLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQTZCLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQ2xGO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbWlnby1zZWNyZXRvLy4vYXBwL2FwaS9hZG1pbi9ldmVudHMvcm91dGUudHM/ZjE3OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInXHJcbmltcG9ydCB7IGdldFNlcnZlclNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgnXHJcbmltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSAnQC9saWIvYXV0aCdcclxuaW1wb3J0IGNsaWVudFByb21pc2UgZnJvbSAnQC9saWIvbW9uZ29kYidcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKGF1dGhPcHRpb25zKVxyXG4gICAgXHJcbiAgICBpZiAoIXNlc3Npb24pIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdObyBhdXRvcml6YWRvJyB9LCB7IHN0YXR1czogNDAxIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgY2xpZW50UHJvbWlzZVxyXG4gICAgY29uc3QgZGIgPSBjbGllbnQuZGIoJ1NhbHVkRGlyZWN0YScpXHJcbiAgICBcclxuICAgIGNvbnN0IGV2ZW50cyA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ2FtaWdvX3NlY3JldG9fZXZlbnRzJykuZmluZCh7fSkudG9BcnJheSgpXHJcbiAgICBcclxuICAgIC8vIEFncmVnYXIgY29udGVvIGRlIHBhcnRpY2lwYW50ZXMgYSBjYWRhIGV2ZW50b1xyXG4gICAgY29uc3QgZXZlbnRzV2l0aENvdW50cyA9IGF3YWl0IFByb21pc2UuYWxsKFxyXG4gICAgICBldmVudHMubWFwKGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBhcnRpY2lwYW50Q291bnQgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCdwYXJ0aWNpcGFudHMnKS5jb3VudERvY3VtZW50cyh7XHJcbiAgICAgICAgICBldmVudElkOiBldmVudC5faWQudG9TdHJpbmcoKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLmV2ZW50LFxyXG4gICAgICAgICAgX2lkOiBldmVudC5faWQudG9TdHJpbmcoKSxcclxuICAgICAgICAgIHBhcnRpY2lwYW50Q291bnQsXHJcbiAgICAgICAgICBkYXRlOiBldmVudC5kYXRlID8gbmV3IERhdGUoZXZlbnQuZGF0ZSkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdIDogbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIClcclxuXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oZXZlbnRzV2l0aENvdW50cylcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZXZlbnRzOicsIGVycm9yKVxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdFcnJvciBpbnRlcm5vIGRlbCBzZXJ2aWRvcicgfSwgeyBzdGF0dXM6IDUwMCB9KVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxdWVzdDogTmV4dFJlcXVlc3QpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlcnZlclNlc3Npb24oYXV0aE9wdGlvbnMpXHJcbiAgICBcclxuICAgIGlmICghc2Vzc2lvbikge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ05vIGF1dG9yaXphZG8nIH0sIHsgc3RhdHVzOiA0MDEgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBib2R5ID0gYXdhaXQgcmVxdWVzdC5qc29uKClcclxuICAgIGNvbnN0IHsgbmFtZSwgZGVzY3JpcHRpb24sIGRhdGUgfSA9IGJvZHlcclxuXHJcbiAgICBpZiAoIW5hbWUgfHwgIWRlc2NyaXB0aW9uIHx8ICFkYXRlKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnRmFsdGFuIGNhbXBvcyByZXF1ZXJpZG9zJyB9LCB7IHN0YXR1czogNDAwIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgY2xpZW50UHJvbWlzZVxyXG4gICAgY29uc3QgZGIgPSBjbGllbnQuZGIoJ1NhbHVkRGlyZWN0YScpXHJcbiAgICBcclxuICAgIGNvbnN0IG5ld0V2ZW50ID0ge1xyXG4gICAgICBuYW1lLFxyXG4gICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgZGF0ZTogbmV3IERhdGUoZGF0ZSksXHJcbiAgICAgIGlzQWN0aXZlOiB0cnVlLFxyXG4gICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCksXHJcbiAgICAgIGNyZWF0ZWRCeTogc2Vzc2lvbi51c2VyPy5lbWFpbFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ2FtaWdvX3NlY3JldG9fZXZlbnRzJykuaW5zZXJ0T25lKG5ld0V2ZW50KVxyXG5cclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XHJcbiAgICAgIF9pZDogcmVzdWx0Lmluc2VydGVkSWQudG9TdHJpbmcoKSxcclxuICAgICAgLi4ubmV3RXZlbnRcclxuICAgIH0pXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIGV2ZW50OicsIGVycm9yKVxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdFcnJvciBpbnRlcm5vIGRlbCBzZXJ2aWRvcicgfSwgeyBzdGF0dXM6IDUwMCB9KVxyXG4gIH1cclxufSJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJnZXRTZXJ2ZXJTZXNzaW9uIiwiYXV0aE9wdGlvbnMiLCJjbGllbnRQcm9taXNlIiwiR0VUIiwic2Vzc2lvbiIsImpzb24iLCJlcnJvciIsInN0YXR1cyIsImNsaWVudCIsImRiIiwiZXZlbnRzIiwiY29sbGVjdGlvbiIsImZpbmQiLCJ0b0FycmF5IiwiZXZlbnRzV2l0aENvdW50cyIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJldmVudCIsInBhcnRpY2lwYW50Q291bnQiLCJjb3VudERvY3VtZW50cyIsImV2ZW50SWQiLCJfaWQiLCJ0b1N0cmluZyIsImRhdGUiLCJEYXRlIiwidG9JU09TdHJpbmciLCJzcGxpdCIsImNvbnNvbGUiLCJQT1NUIiwicmVxdWVzdCIsImJvZHkiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJuZXdFdmVudCIsImlzQWN0aXZlIiwiY3JlYXRlZEF0IiwiY3JlYXRlZEJ5IiwidXNlciIsImVtYWlsIiwicmVzdWx0IiwiaW5zZXJ0T25lIiwiaW5zZXJ0ZWRJZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/admin/events/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/auth.ts":
/*!*********************!*\
  !*** ./lib/auth.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/mongodb */ \"(rsc)/./lib/mongodb.ts\");\n\n\n\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            name: \"credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.email || !credentials?.password) {\n                    return null;\n                }\n                try {\n                    const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n                    const db = client.db(\"SaludDirecta\");\n                    const admin = await db.collection(\"amigo_secreto_admins\").findOne({\n                        email: credentials.email\n                    });\n                    if (!admin) {\n                        return null;\n                    }\n                    const isPasswordValid = await bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().compare(credentials.password, admin.password);\n                    if (!isPasswordValid) {\n                        return null;\n                    }\n                    return {\n                        id: admin._id.toString(),\n                        email: admin.email,\n                        name: admin.name\n                    };\n                } catch (error) {\n                    console.error(\"Error durante la autenticaci\\xf3n:\", error);\n                    return null;\n                }\n            }\n        })\n    ],\n    session: {\n        strategy: \"jwt\"\n    },\n    pages: {\n        signIn: \"/admin/login\"\n    },\n    callbacks: {\n        async jwt ({ token, user }) {\n            if (user) {\n                token.id = user.id;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            if (token && session.user) {\n                session.user.id = token.id;\n            }\n            return session;\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvYXV0aC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNpRTtBQUNwQztBQUNZO0FBRWxDLE1BQU1HLGNBQStCO0lBQzFDQyxXQUFXO1FBQ1RKLDJFQUFtQkEsQ0FBQztZQUNsQkssTUFBTTtZQUNOQyxhQUFhO2dCQUNYQyxPQUFPO29CQUFFQyxPQUFPO29CQUFTQyxNQUFNO2dCQUFRO2dCQUN2Q0MsVUFBVTtvQkFBRUYsT0FBTztvQkFBWUMsTUFBTTtnQkFBVztZQUNsRDtZQUNBLE1BQU1FLFdBQVVMLFdBQVc7Z0JBQ3pCLElBQUksQ0FBQ0EsYUFBYUMsU0FBUyxDQUFDRCxhQUFhSSxVQUFVO29CQUNqRCxPQUFPO2dCQUNUO2dCQUVBLElBQUk7b0JBQ0YsTUFBTUUsU0FBUyxNQUFNVixvREFBYUE7b0JBQ2xDLE1BQU1XLEtBQUtELE9BQU9DLEVBQUUsQ0FBQztvQkFFckIsTUFBTUMsUUFBUSxNQUFNRCxHQUFHRSxVQUFVLENBQUMsd0JBQXdCQyxPQUFPLENBQUM7d0JBQ2hFVCxPQUFPRCxZQUFZQyxLQUFLO29CQUMxQjtvQkFFQSxJQUFJLENBQUNPLE9BQU87d0JBQ1YsT0FBTztvQkFDVDtvQkFFQSxNQUFNRyxrQkFBa0IsTUFBTWhCLHVEQUFjLENBQUNLLFlBQVlJLFFBQVEsRUFBRUksTUFBTUosUUFBUTtvQkFFakYsSUFBSSxDQUFDTyxpQkFBaUI7d0JBQ3BCLE9BQU87b0JBQ1Q7b0JBRUEsT0FBTzt3QkFDTEUsSUFBSUwsTUFBTU0sR0FBRyxDQUFDQyxRQUFRO3dCQUN0QmQsT0FBT08sTUFBTVAsS0FBSzt3QkFDbEJGLE1BQU1TLE1BQU1ULElBQUk7b0JBQ2xCO2dCQUNGLEVBQUUsT0FBT2lCLE9BQU87b0JBQ2RDLFFBQVFELEtBQUssQ0FBQyxzQ0FBbUNBO29CQUNqRCxPQUFPO2dCQUNUO1lBQ0Y7UUFDRjtLQUNEO0lBQ0RFLFNBQVM7UUFDUEMsVUFBVTtJQUNaO0lBQ0FDLE9BQU87UUFDTEMsUUFBUTtJQUNWO0lBQ0FDLFdBQVc7UUFDVCxNQUFNQyxLQUFJLEVBQUVDLEtBQUssRUFBRUMsSUFBSSxFQUFFO1lBQ3ZCLElBQUlBLE1BQU07Z0JBQ1JELE1BQU1YLEVBQUUsR0FBR1ksS0FBS1osRUFBRTtZQUNwQjtZQUNBLE9BQU9XO1FBQ1Q7UUFDQSxNQUFNTixTQUFRLEVBQUVBLE9BQU8sRUFBRU0sS0FBSyxFQUFFO1lBQzlCLElBQUlBLFNBQVNOLFFBQVFPLElBQUksRUFBRTtnQkFDeEJQLFFBQVFPLElBQUksQ0FBU1osRUFBRSxHQUFHVyxNQUFNWCxFQUFFO1lBQ3JDO1lBQ0EsT0FBT0s7UUFDVDtJQUNGO0FBQ0YsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FtaWdvLXNlY3JldG8vLi9saWIvYXV0aC50cz9iZjdlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBdXRoT3B0aW9ucyB9IGZyb20gJ25leHQtYXV0aCdcclxuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFscydcclxuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHRqcydcclxuaW1wb3J0IGNsaWVudFByb21pc2UgZnJvbSAnQC9saWIvbW9uZ29kYidcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9uczogTmV4dEF1dGhPcHRpb25zID0ge1xyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XHJcbiAgICAgIG5hbWU6ICdjcmVkZW50aWFscycsXHJcbiAgICAgIGNyZWRlbnRpYWxzOiB7XHJcbiAgICAgICAgZW1haWw6IHsgbGFiZWw6ICdFbWFpbCcsIHR5cGU6ICdlbWFpbCcgfSxcclxuICAgICAgICBwYXNzd29yZDogeyBsYWJlbDogJ1Bhc3N3b3JkJywgdHlwZTogJ3Bhc3N3b3JkJyB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscykge1xyXG4gICAgICAgIGlmICghY3JlZGVudGlhbHM/LmVtYWlsIHx8ICFjcmVkZW50aWFscz8ucGFzc3dvcmQpIHtcclxuICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgY2xpZW50UHJvbWlzZVxyXG4gICAgICAgICAgY29uc3QgZGIgPSBjbGllbnQuZGIoJ1NhbHVkRGlyZWN0YScpXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGNvbnN0IGFkbWluID0gYXdhaXQgZGIuY29sbGVjdGlvbignYW1pZ29fc2VjcmV0b19hZG1pbnMnKS5maW5kT25lKHtcclxuICAgICAgICAgICAgZW1haWw6IGNyZWRlbnRpYWxzLmVtYWlsXHJcbiAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgIGlmICghYWRtaW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBjb25zdCBpc1Bhc3N3b3JkVmFsaWQgPSBhd2FpdCBiY3J5cHQuY29tcGFyZShjcmVkZW50aWFscy5wYXNzd29yZCwgYWRtaW4ucGFzc3dvcmQpXHJcblxyXG4gICAgICAgICAgaWYgKCFpc1Bhc3N3b3JkVmFsaWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogYWRtaW4uX2lkLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgIGVtYWlsOiBhZG1pbi5lbWFpbCxcclxuICAgICAgICAgICAgbmFtZTogYWRtaW4ubmFtZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkdXJhbnRlIGxhIGF1dGVudGljYWNpw7NuOicsIGVycm9yKVxyXG4gICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgXSxcclxuICBzZXNzaW9uOiB7XHJcbiAgICBzdHJhdGVneTogJ2p3dCdcclxuICB9LFxyXG4gIHBhZ2VzOiB7XHJcbiAgICBzaWduSW46ICcvYWRtaW4vbG9naW4nXHJcbiAgfSxcclxuICBjYWxsYmFja3M6IHtcclxuICAgIGFzeW5jIGp3dCh7IHRva2VuLCB1c2VyIH0pIHtcclxuICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICB0b2tlbi5pZCA9IHVzZXIuaWRcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdG9rZW5cclxuICAgIH0sXHJcbiAgICBhc3luYyBzZXNzaW9uKHsgc2Vzc2lvbiwgdG9rZW4gfSkge1xyXG4gICAgICBpZiAodG9rZW4gJiYgc2Vzc2lvbi51c2VyKSB7XHJcbiAgICAgICAgKHNlc3Npb24udXNlciBhcyBhbnkpLmlkID0gdG9rZW4uaWQgYXMgc3RyaW5nXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHNlc3Npb25cclxuICAgIH1cclxuICB9XHJcbn0iXSwibmFtZXMiOlsiQ3JlZGVudGlhbHNQcm92aWRlciIsImJjcnlwdCIsImNsaWVudFByb21pc2UiLCJhdXRoT3B0aW9ucyIsInByb3ZpZGVycyIsIm5hbWUiLCJjcmVkZW50aWFscyIsImVtYWlsIiwibGFiZWwiLCJ0eXBlIiwicGFzc3dvcmQiLCJhdXRob3JpemUiLCJjbGllbnQiLCJkYiIsImFkbWluIiwiY29sbGVjdGlvbiIsImZpbmRPbmUiLCJpc1Bhc3N3b3JkVmFsaWQiLCJjb21wYXJlIiwiaWQiLCJfaWQiLCJ0b1N0cmluZyIsImVycm9yIiwiY29uc29sZSIsInNlc3Npb24iLCJzdHJhdGVneSIsInBhZ2VzIiwic2lnbkluIiwiY2FsbGJhY2tzIiwiand0IiwidG9rZW4iLCJ1c2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/auth.ts\n");

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
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/bcryptjs","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/@panva","vendor-chunks/oidc-token-hash"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Fevents%2Froute&page=%2Fapi%2Fadmin%2Fevents%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fevents%2Froute.ts&appDir=E%3A%5CProyectos%5CAmigo%20Secreto%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CProyectos%5CAmigo%20Secreto&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();