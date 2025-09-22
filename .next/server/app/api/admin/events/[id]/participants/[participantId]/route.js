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
exports.id = "app/api/admin/events/[id]/participants/[participantId]/route";
exports.ids = ["app/api/admin/events/[id]/participants/[participantId]/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Fevents%2F%5Bid%5D%2Fparticipants%2F%5BparticipantId%5D%2Froute&page=%2Fapi%2Fadmin%2Fevents%2F%5Bid%5D%2Fparticipants%2F%5BparticipantId%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fevents%2F%5Bid%5D%2Fparticipants%2F%5BparticipantId%5D%2Froute.ts&appDir=E%3A%5CProyectos%5CAmigo%20Secreto%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CProyectos%5CAmigo%20Secreto&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Fevents%2F%5Bid%5D%2Fparticipants%2F%5BparticipantId%5D%2Froute&page=%2Fapi%2Fadmin%2Fevents%2F%5Bid%5D%2Fparticipants%2F%5BparticipantId%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fevents%2F%5Bid%5D%2Fparticipants%2F%5BparticipantId%5D%2Froute.ts&appDir=E%3A%5CProyectos%5CAmigo%20Secreto%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CProyectos%5CAmigo%20Secreto&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var E_Proyectos_Amigo_Secreto_app_api_admin_events_id_participants_participantId_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/admin/events/[id]/participants/[participantId]/route.ts */ \"(rsc)/./app/api/admin/events/[id]/participants/[participantId]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/admin/events/[id]/participants/[participantId]/route\",\n        pathname: \"/api/admin/events/[id]/participants/[participantId]\",\n        filename: \"route\",\n        bundlePath: \"app/api/admin/events/[id]/participants/[participantId]/route\"\n    },\n    resolvedPagePath: \"E:\\\\Proyectos\\\\Amigo Secreto\\\\app\\\\api\\\\admin\\\\events\\\\[id]\\\\participants\\\\[participantId]\\\\route.ts\",\n    nextConfigOutput,\n    userland: E_Proyectos_Amigo_Secreto_app_api_admin_events_id_participants_participantId_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/admin/events/[id]/participants/[participantId]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhZG1pbiUyRmV2ZW50cyUyRiU1QmlkJTVEJTJGcGFydGljaXBhbnRzJTJGJTVCcGFydGljaXBhbnRJZCU1RCUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGYWRtaW4lMkZldmVudHMlMkYlNUJpZCU1RCUyRnBhcnRpY2lwYW50cyUyRiU1QnBhcnRpY2lwYW50SWQlNUQlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZhZG1pbiUyRmV2ZW50cyUyRiU1QmlkJTVEJTJGcGFydGljaXBhbnRzJTJGJTVCcGFydGljaXBhbnRJZCU1RCUyRnJvdXRlLnRzJmFwcERpcj1FJTNBJTVDUHJveWVjdG9zJTVDQW1pZ28lMjBTZWNyZXRvJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1FJTNBJTVDUHJveWVjdG9zJTVDQW1pZ28lMjBTZWNyZXRvJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNvRDtBQUNqSTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL2FtaWdvLXNlY3JldG8vP2M4ZjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiRTpcXFxcUHJveWVjdG9zXFxcXEFtaWdvIFNlY3JldG9cXFxcYXBwXFxcXGFwaVxcXFxhZG1pblxcXFxldmVudHNcXFxcW2lkXVxcXFxwYXJ0aWNpcGFudHNcXFxcW3BhcnRpY2lwYW50SWRdXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hZG1pbi9ldmVudHMvW2lkXS9wYXJ0aWNpcGFudHMvW3BhcnRpY2lwYW50SWRdL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYWRtaW4vZXZlbnRzL1tpZF0vcGFydGljaXBhbnRzL1twYXJ0aWNpcGFudElkXVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYWRtaW4vZXZlbnRzL1tpZF0vcGFydGljaXBhbnRzL1twYXJ0aWNpcGFudElkXS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkU6XFxcXFByb3llY3Rvc1xcXFxBbWlnbyBTZWNyZXRvXFxcXGFwcFxcXFxhcGlcXFxcYWRtaW5cXFxcZXZlbnRzXFxcXFtpZF1cXFxccGFydGljaXBhbnRzXFxcXFtwYXJ0aWNpcGFudElkXVxcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvYWRtaW4vZXZlbnRzL1tpZF0vcGFydGljaXBhbnRzL1twYXJ0aWNpcGFudElkXS9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Fevents%2F%5Bid%5D%2Fparticipants%2F%5BparticipantId%5D%2Froute&page=%2Fapi%2Fadmin%2Fevents%2F%5Bid%5D%2Fparticipants%2F%5BparticipantId%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fevents%2F%5Bid%5D%2Fparticipants%2F%5BparticipantId%5D%2Froute.ts&appDir=E%3A%5CProyectos%5CAmigo%20Secreto%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CProyectos%5CAmigo%20Secreto&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/admin/events/[id]/participants/[participantId]/route.ts":
/*!*************************************************************************!*\
  !*** ./app/api/admin/events/[id]/participants/[participantId]/route.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE),\n/* harmony export */   PUT: () => (/* binding */ PUT)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./lib/auth.ts\");\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/mongodb */ \"(rsc)/./lib/mongodb.ts\");\n\n\n\n\n\nasync function PUT(request, { params }) {\n    try {\n        const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_2__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_3__.authOptions);\n        if (!session) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"No autorizado\"\n            }, {\n                status: 401\n            });\n        }\n        const eventId = params.id;\n        const participantId = params.participantId;\n        const body = await request.json();\n        const { name, email } = body;\n        // Validar campos requeridos\n        if (!name) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"El nombre es requerido\"\n            }, {\n                status: 400\n            });\n        }\n        const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\n        const db = client.db(\"SaludDirecta\");\n        // Verificar que el participante pertenece al evento\n        const participant = await db.collection(\"participants\").findOne({\n            _id: new mongodb__WEBPACK_IMPORTED_MODULE_1__.ObjectId(participantId),\n            eventId: eventId\n        });\n        if (!participant) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Participante no encontrado\"\n            }, {\n                status: 404\n            });\n        }\n        // Actualizar el participante\n        const result = await db.collection(\"participants\").updateOne({\n            _id: new mongodb__WEBPACK_IMPORTED_MODULE_1__.ObjectId(participantId)\n        }, {\n            $set: {\n                name,\n                email: email || null,\n                updatedAt: new Date()\n            }\n        });\n        if (result.matchedCount === 0) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Error al actualizar el participante\"\n            }, {\n                status: 500\n            });\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true\n        });\n    } catch (error) {\n        console.error(\"Error updating participant:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Error interno del servidor\"\n        }, {\n            status: 500\n        });\n    }\n}\nasync function DELETE(request, { params }) {\n    try {\n        const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_2__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_3__.authOptions);\n        if (!session) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"No autorizado\"\n            }, {\n                status: 401\n            });\n        }\n        const eventId = params.id;\n        const participantId = params.participantId;\n        const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\n        const db = client.db(\"SaludDirecta\");\n        // Verificar que el participante pertenece al evento\n        const participant = await db.collection(\"participants\").findOne({\n            _id: new mongodb__WEBPACK_IMPORTED_MODULE_1__.ObjectId(participantId),\n            eventId: eventId\n        });\n        if (!participant) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Participante no encontrado\"\n            }, {\n                status: 404\n            });\n        }\n        // Eliminar el participante\n        const result = await db.collection(\"participants\").deleteOne({\n            _id: new mongodb__WEBPACK_IMPORTED_MODULE_1__.ObjectId(participantId)\n        });\n        if (result.deletedCount === 0) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Error al eliminar el participante\"\n            }, {\n                status: 500\n            });\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true\n        });\n    } catch (error) {\n        console.error(\"Error deleting participant:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Error interno del servidor\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2FkbWluL2V2ZW50cy9baWRdL3BhcnRpY2lwYW50cy9bcGFydGljaXBhbnRJZF0vcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXVEO0FBQ3JCO0FBQ1U7QUFDSjtBQUNDO0FBRWxDLGVBQWVLLElBQ3BCQyxPQUFvQixFQUNwQixFQUFFQyxNQUFNLEVBQXFEO0lBRTdELElBQUk7UUFDRixNQUFNQyxVQUFVLE1BQU1OLDJEQUFnQkEsQ0FBQ0Msa0RBQVdBO1FBRWxELElBQUksQ0FBQ0ssU0FBUztZQUNaLE9BQU9SLHFEQUFZQSxDQUFDUyxJQUFJLENBQUM7Z0JBQUVDLE9BQU87WUFBZ0IsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ3JFO1FBRUEsTUFBTUMsVUFBVUwsT0FBT00sRUFBRTtRQUN6QixNQUFNQyxnQkFBZ0JQLE9BQU9PLGFBQWE7UUFDMUMsTUFBTUMsT0FBTyxNQUFNVCxRQUFRRyxJQUFJO1FBQy9CLE1BQU0sRUFBRU8sSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBR0Y7UUFFeEIsNEJBQTRCO1FBQzVCLElBQUksQ0FBQ0MsTUFBTTtZQUNULE9BQU9oQixxREFBWUEsQ0FBQ1MsSUFBSSxDQUFDO2dCQUFFQyxPQUFPO1lBQXlCLEdBQUc7Z0JBQUVDLFFBQVE7WUFBSTtRQUM5RTtRQUVBLE1BQU1PLFNBQVMsTUFBTWQsb0RBQWFBO1FBQ2xDLE1BQU1lLEtBQUtELE9BQU9DLEVBQUUsQ0FBQztRQUVyQixvREFBb0Q7UUFDcEQsTUFBTUMsY0FBYyxNQUFNRCxHQUFHRSxVQUFVLENBQUMsZ0JBQWdCQyxPQUFPLENBQUM7WUFDOURDLEtBQUssSUFBSXRCLDZDQUFRQSxDQUFDYTtZQUNsQkYsU0FBU0E7UUFDWDtRQUVBLElBQUksQ0FBQ1EsYUFBYTtZQUNoQixPQUFPcEIscURBQVlBLENBQUNTLElBQUksQ0FBQztnQkFBRUMsT0FBTztZQUE2QixHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDbEY7UUFFQSw2QkFBNkI7UUFDN0IsTUFBTWEsU0FBUyxNQUFNTCxHQUFHRSxVQUFVLENBQUMsZ0JBQWdCSSxTQUFTLENBQzFEO1lBQUVGLEtBQUssSUFBSXRCLDZDQUFRQSxDQUFDYTtRQUFlLEdBQ25DO1lBQ0VZLE1BQU07Z0JBQ0pWO2dCQUNBQyxPQUFPQSxTQUFTO2dCQUNoQlUsV0FBVyxJQUFJQztZQUNqQjtRQUNGO1FBR0YsSUFBSUosT0FBT0ssWUFBWSxLQUFLLEdBQUc7WUFDN0IsT0FBTzdCLHFEQUFZQSxDQUFDUyxJQUFJLENBQUM7Z0JBQUVDLE9BQU87WUFBc0MsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQzNGO1FBRUEsT0FBT1gscURBQVlBLENBQUNTLElBQUksQ0FBQztZQUFFcUIsU0FBUztRQUFLO0lBQzNDLEVBQUUsT0FBT3BCLE9BQU87UUFDZHFCLFFBQVFyQixLQUFLLENBQUMsK0JBQStCQTtRQUM3QyxPQUFPVixxREFBWUEsQ0FBQ1MsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBNkIsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDbEY7QUFDRjtBQUVPLGVBQWVxQixPQUNwQjFCLE9BQW9CLEVBQ3BCLEVBQUVDLE1BQU0sRUFBcUQ7SUFFN0QsSUFBSTtRQUNGLE1BQU1DLFVBQVUsTUFBTU4sMkRBQWdCQSxDQUFDQyxrREFBV0E7UUFFbEQsSUFBSSxDQUFDSyxTQUFTO1lBQ1osT0FBT1IscURBQVlBLENBQUNTLElBQUksQ0FBQztnQkFBRUMsT0FBTztZQUFnQixHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDckU7UUFFQSxNQUFNQyxVQUFVTCxPQUFPTSxFQUFFO1FBQ3pCLE1BQU1DLGdCQUFnQlAsT0FBT08sYUFBYTtRQUUxQyxNQUFNSSxTQUFTLE1BQU1kLG9EQUFhQTtRQUNsQyxNQUFNZSxLQUFLRCxPQUFPQyxFQUFFLENBQUM7UUFFckIsb0RBQW9EO1FBQ3BELE1BQU1DLGNBQWMsTUFBTUQsR0FBR0UsVUFBVSxDQUFDLGdCQUFnQkMsT0FBTyxDQUFDO1lBQzlEQyxLQUFLLElBQUl0Qiw2Q0FBUUEsQ0FBQ2E7WUFDbEJGLFNBQVNBO1FBQ1g7UUFFQSxJQUFJLENBQUNRLGFBQWE7WUFDaEIsT0FBT3BCLHFEQUFZQSxDQUFDUyxJQUFJLENBQUM7Z0JBQUVDLE9BQU87WUFBNkIsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ2xGO1FBRUEsMkJBQTJCO1FBQzNCLE1BQU1hLFNBQVMsTUFBTUwsR0FBR0UsVUFBVSxDQUFDLGdCQUFnQlksU0FBUyxDQUFDO1lBQzNEVixLQUFLLElBQUl0Qiw2Q0FBUUEsQ0FBQ2E7UUFDcEI7UUFFQSxJQUFJVSxPQUFPVSxZQUFZLEtBQUssR0FBRztZQUM3QixPQUFPbEMscURBQVlBLENBQUNTLElBQUksQ0FBQztnQkFBRUMsT0FBTztZQUFvQyxHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDekY7UUFFQSxPQUFPWCxxREFBWUEsQ0FBQ1MsSUFBSSxDQUFDO1lBQUVxQixTQUFTO1FBQUs7SUFDM0MsRUFBRSxPQUFPcEIsT0FBTztRQUNkcUIsUUFBUXJCLEtBQUssQ0FBQywrQkFBK0JBO1FBQzdDLE9BQU9WLHFEQUFZQSxDQUFDUyxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUE2QixHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUNsRjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYW1pZ28tc2VjcmV0by8uL2FwcC9hcGkvYWRtaW4vZXZlbnRzL1tpZF0vcGFydGljaXBhbnRzL1twYXJ0aWNpcGFudElkXS9yb3V0ZS50cz9lYzMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcidcclxuaW1wb3J0IHsgT2JqZWN0SWQgfSBmcm9tICdtb25nb2RiJ1xyXG5pbXBvcnQgeyBnZXRTZXJ2ZXJTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoJ1xyXG5pbXBvcnQgeyBhdXRoT3B0aW9ucyB9IGZyb20gJ0AvbGliL2F1dGgnXHJcbmltcG9ydCBjbGllbnRQcm9taXNlIGZyb20gJ0AvbGliL21vbmdvZGInXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUFVUKFxyXG4gIHJlcXVlc3Q6IE5leHRSZXF1ZXN0LFxyXG4gIHsgcGFyYW1zIH06IHsgcGFyYW1zOiB7IGlkOiBzdHJpbmcsIHBhcnRpY2lwYW50SWQ6IHN0cmluZyB9IH1cclxuKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKGF1dGhPcHRpb25zKVxyXG5cclxuICAgIGlmICghc2Vzc2lvbikge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ05vIGF1dG9yaXphZG8nIH0sIHsgc3RhdHVzOiA0MDEgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBldmVudElkID0gcGFyYW1zLmlkXHJcbiAgICBjb25zdCBwYXJ0aWNpcGFudElkID0gcGFyYW1zLnBhcnRpY2lwYW50SWRcclxuICAgIGNvbnN0IGJvZHkgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKVxyXG4gICAgY29uc3QgeyBuYW1lLCBlbWFpbCB9ID0gYm9keVxyXG5cclxuICAgIC8vIFZhbGlkYXIgY2FtcG9zIHJlcXVlcmlkb3NcclxuICAgIGlmICghbmFtZSkge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0VsIG5vbWJyZSBlcyByZXF1ZXJpZG8nIH0sIHsgc3RhdHVzOiA0MDAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBjbGllbnRQcm9taXNlXHJcbiAgICBjb25zdCBkYiA9IGNsaWVudC5kYignU2FsdWREaXJlY3RhJylcclxuXHJcbiAgICAvLyBWZXJpZmljYXIgcXVlIGVsIHBhcnRpY2lwYW50ZSBwZXJ0ZW5lY2UgYWwgZXZlbnRvXHJcbiAgICBjb25zdCBwYXJ0aWNpcGFudCA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ3BhcnRpY2lwYW50cycpLmZpbmRPbmUoe1xyXG4gICAgICBfaWQ6IG5ldyBPYmplY3RJZChwYXJ0aWNpcGFudElkKSxcclxuICAgICAgZXZlbnRJZDogZXZlbnRJZFxyXG4gICAgfSlcclxuXHJcbiAgICBpZiAoIXBhcnRpY2lwYW50KSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnUGFydGljaXBhbnRlIG5vIGVuY29udHJhZG8nIH0sIHsgc3RhdHVzOiA0MDQgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBBY3R1YWxpemFyIGVsIHBhcnRpY2lwYW50ZVxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuY29sbGVjdGlvbigncGFydGljaXBhbnRzJykudXBkYXRlT25lKFxyXG4gICAgICB7IF9pZDogbmV3IE9iamVjdElkKHBhcnRpY2lwYW50SWQpIH0sXHJcbiAgICAgIHsgXHJcbiAgICAgICAgJHNldDogeyBcclxuICAgICAgICAgIG5hbWUsIFxyXG4gICAgICAgICAgZW1haWw6IGVtYWlsIHx8IG51bGwsXHJcbiAgICAgICAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKCkgXHJcbiAgICAgICAgfSBcclxuICAgICAgfVxyXG4gICAgKVxyXG5cclxuICAgIGlmIChyZXN1bHQubWF0Y2hlZENvdW50ID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnRXJyb3IgYWwgYWN0dWFsaXphciBlbCBwYXJ0aWNpcGFudGUnIH0sIHsgc3RhdHVzOiA1MDAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBzdWNjZXNzOiB0cnVlIH0pXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIHBhcnRpY2lwYW50OicsIGVycm9yKVxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdFcnJvciBpbnRlcm5vIGRlbCBzZXJ2aWRvcicgfSwgeyBzdGF0dXM6IDUwMCB9KVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIERFTEVURShcclxuICByZXF1ZXN0OiBOZXh0UmVxdWVzdCxcclxuICB7IHBhcmFtcyB9OiB7IHBhcmFtczogeyBpZDogc3RyaW5nLCBwYXJ0aWNpcGFudElkOiBzdHJpbmcgfSB9XHJcbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucylcclxuXHJcbiAgICBpZiAoIXNlc3Npb24pIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdObyBhdXRvcml6YWRvJyB9LCB7IHN0YXR1czogNDAxIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZXZlbnRJZCA9IHBhcmFtcy5pZFxyXG4gICAgY29uc3QgcGFydGljaXBhbnRJZCA9IHBhcmFtcy5wYXJ0aWNpcGFudElkXHJcblxyXG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgY2xpZW50UHJvbWlzZVxyXG4gICAgY29uc3QgZGIgPSBjbGllbnQuZGIoJ1NhbHVkRGlyZWN0YScpXHJcblxyXG4gICAgLy8gVmVyaWZpY2FyIHF1ZSBlbCBwYXJ0aWNpcGFudGUgcGVydGVuZWNlIGFsIGV2ZW50b1xyXG4gICAgY29uc3QgcGFydGljaXBhbnQgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCdwYXJ0aWNpcGFudHMnKS5maW5kT25lKHtcclxuICAgICAgX2lkOiBuZXcgT2JqZWN0SWQocGFydGljaXBhbnRJZCksXHJcbiAgICAgIGV2ZW50SWQ6IGV2ZW50SWRcclxuICAgIH0pXHJcblxyXG4gICAgaWYgKCFwYXJ0aWNpcGFudCkge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ1BhcnRpY2lwYW50ZSBubyBlbmNvbnRyYWRvJyB9LCB7IHN0YXR1czogNDA0IH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gRWxpbWluYXIgZWwgcGFydGljaXBhbnRlXHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCdwYXJ0aWNpcGFudHMnKS5kZWxldGVPbmUoe1xyXG4gICAgICBfaWQ6IG5ldyBPYmplY3RJZChwYXJ0aWNpcGFudElkKVxyXG4gICAgfSlcclxuXHJcbiAgICBpZiAocmVzdWx0LmRlbGV0ZWRDb3VudCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0Vycm9yIGFsIGVsaW1pbmFyIGVsIHBhcnRpY2lwYW50ZScgfSwgeyBzdGF0dXM6IDUwMCB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHN1Y2Nlc3M6IHRydWUgfSlcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZGVsZXRpbmcgcGFydGljaXBhbnQ6JywgZXJyb3IpXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0Vycm9yIGludGVybm8gZGVsIHNlcnZpZG9yJyB9LCB7IHN0YXR1czogNTAwIH0pXHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIk9iamVjdElkIiwiZ2V0U2VydmVyU2Vzc2lvbiIsImF1dGhPcHRpb25zIiwiY2xpZW50UHJvbWlzZSIsIlBVVCIsInJlcXVlc3QiLCJwYXJhbXMiLCJzZXNzaW9uIiwianNvbiIsImVycm9yIiwic3RhdHVzIiwiZXZlbnRJZCIsImlkIiwicGFydGljaXBhbnRJZCIsImJvZHkiLCJuYW1lIiwiZW1haWwiLCJjbGllbnQiLCJkYiIsInBhcnRpY2lwYW50IiwiY29sbGVjdGlvbiIsImZpbmRPbmUiLCJfaWQiLCJyZXN1bHQiLCJ1cGRhdGVPbmUiLCIkc2V0IiwidXBkYXRlZEF0IiwiRGF0ZSIsIm1hdGNoZWRDb3VudCIsInN1Y2Nlc3MiLCJjb25zb2xlIiwiREVMRVRFIiwiZGVsZXRlT25lIiwiZGVsZXRlZENvdW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/admin/events/[id]/participants/[participantId]/route.ts\n");

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
var __webpack_require__ = require("../../../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/bcryptjs","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/@panva","vendor-chunks/oidc-token-hash"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Fevents%2F%5Bid%5D%2Fparticipants%2F%5BparticipantId%5D%2Froute&page=%2Fapi%2Fadmin%2Fevents%2F%5Bid%5D%2Fparticipants%2F%5BparticipantId%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fevents%2F%5Bid%5D%2Fparticipants%2F%5BparticipantId%5D%2Froute.ts&appDir=E%3A%5CProyectos%5CAmigo%20Secreto%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CProyectos%5CAmigo%20Secreto&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();