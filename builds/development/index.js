/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./handlers/admin.ts":
/*!***************************!*\
  !*** ./handlers/admin.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst error_1 = __importDefault(__webpack_require__(/*! ./error */ \"./handlers/error.ts\"));\r\nexports.default = (auth, req, res) => __awaiter(void 0, void 0, void 0, function* () {\r\n    try {\r\n        res.statusCode = 401;\r\n        let response = {\r\n            success: false,\r\n        };\r\n        if (yield auth.loginByAuthToken(req.headers['authorization'])) {\r\n            res.statusCode = 200;\r\n            response = {\r\n                success: true,\r\n            };\r\n        }\r\n        return res.end(JSON.stringify(response));\r\n    }\r\n    catch (e) {\r\n        return error_1.default(e, res);\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack:///./handlers/admin.ts?");

/***/ }),

/***/ "./handlers/error.ts":
/*!***************************!*\
  !*** ./handlers/error.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.default = (e, res) => {\r\n    res.statusCode = e.statusCode || 500;\r\n    const response = {\r\n        success: false,\r\n        error: e.toString(),\r\n    };\r\n    return res.end(JSON.stringify(response));\r\n};\r\n\n\n//# sourceURL=webpack:///./handlers/error.ts?");

/***/ }),

/***/ "./handlers/login.ts":
/*!***************************!*\
  !*** ./handlers/login.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst error_1 = __importDefault(__webpack_require__(/*! ./error */ \"./handlers/error.ts\"));\r\nconst jsonBodyParse_1 = __importDefault(__webpack_require__(/*! ../helpers/jsonBodyParse */ \"./helpers/jsonBodyParse.ts\"));\r\nexports.default = (auth, body, req, res) => __awaiter(void 0, void 0, void 0, function* () {\r\n    try {\r\n        let response = {\r\n            success: true\r\n        };\r\n        const loginByTokenResult = yield auth.loginByAuthToken(req.headers['authorization']);\r\n        if (loginByTokenResult) {\r\n            response.payload = loginByTokenResult;\r\n        }\r\n        else {\r\n            if (!body) {\r\n                const error = new Error(\"Didn't pass 'username' or 'password'\");\r\n                error.statusCode = 422;\r\n                throw error;\r\n            }\r\n            const userData = jsonBodyParse_1.default(body);\r\n            response.payload = yield auth.login(userData.username, userData.password);\r\n        }\r\n        return res.end(JSON.stringify(response));\r\n    }\r\n    catch (e) {\r\n        return error_1.default(e, res);\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack:///./handlers/login.ts?");

/***/ }),

/***/ "./handlers/signup.ts":
/*!****************************!*\
  !*** ./handlers/signup.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst error_1 = __importDefault(__webpack_require__(/*! ./error */ \"./handlers/error.ts\"));\r\nconst jsonBodyParse_1 = __importDefault(__webpack_require__(/*! ../helpers/jsonBodyParse */ \"./helpers/jsonBodyParse.ts\"));\r\nexports.default = (auth, body, res) => __awaiter(void 0, void 0, void 0, function* () {\r\n    try {\r\n        const userData = jsonBodyParse_1.default(body);\r\n        yield auth.signUp(userData.username, userData.password);\r\n        const response = {\r\n            success: true,\r\n        };\r\n        res.end(JSON.stringify(response));\r\n    }\r\n    catch (e) {\r\n        return error_1.default(e, res);\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack:///./handlers/signup.ts?");

/***/ }),

/***/ "./helpers/jsonBodyParse.ts":
/*!**********************************!*\
  !*** ./helpers/jsonBodyParse.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.default = (body) => {\r\n    try {\r\n        return JSON.parse(body);\r\n    }\r\n    catch (e) {\r\n        const error = new Error(\"Post data should be in 'application/json' raw type format!\");\r\n        error.statusCode = 400;\r\n        throw error;\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./helpers/jsonBodyParse.ts?");

/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst Auth_1 = __importDefault(__webpack_require__(/*! ./services/Auth/Auth */ \"./services/Auth/Auth.ts\"));\r\nconst mongodb_1 = __webpack_require__(/*! mongodb */ \"mongodb\");\r\nconst login_1 = __importDefault(__webpack_require__(/*! ./handlers/login */ \"./handlers/login.ts\"));\r\nconst error_1 = __importDefault(__webpack_require__(/*! ./handlers/error */ \"./handlers/error.ts\"));\r\nconst admin_1 = __importDefault(__webpack_require__(/*! ./handlers/admin */ \"./handlers/admin.ts\"));\r\nconst signup_1 = __importDefault(__webpack_require__(/*! ./handlers/signup */ \"./handlers/signup.ts\"));\r\nconst UserModel_1 = __importDefault(__webpack_require__(/*! ./models/UserModel/UserModel */ \"./models/UserModel/UserModel.ts\"));\r\nconst interfaces_1 = __webpack_require__(/*! ./interfaces */ \"./interfaces.ts\");\r\nconst http_1 = __webpack_require__(/*! http */ \"http\");\r\nconst SERVER_HOST = process.env.HOST || 'localhost';\r\nconst SERVER_PORT = process.env.PORT || '1234';\r\nconst SERVER_PROTOCOL = process.env.PROTOCOL || 'http';\r\nconst SERVER_DOMAIN = `${SERVER_PROTOCOL}://${SERVER_HOST}:${SERVER_PORT}`;\r\nconst NODE_ENV = \"development\" === interfaces_1.Mode.PRODUCTION\r\n    ? interfaces_1.Mode.PRODUCTION\r\n    : interfaces_1.Mode.DEVELOPMENT;\r\n(() => __awaiter(void 0, void 0, void 0, function* () {\r\n    let db;\r\n    try {\r\n        const client = yield mongodb_1.MongoClient.connect(process.env.MONGO_CONNECTION_URL || '');\r\n        db = client.db('node-jwt-auth');\r\n    }\r\n    catch (e) {\r\n        console.log(e);\r\n        process.exit(1);\r\n    }\r\n    const server = http_1.createServer();\r\n    server\r\n        .on('request', (req, res) => __awaiter(void 0, void 0, void 0, function* () {\r\n        try {\r\n            res.statusCode = 200;\r\n            if (req.url === interfaces_1.Routes.HOME) {\r\n                let routes = [];\r\n                for (let enumMember in interfaces_1.Routes) {\r\n                    const route = interfaces_1.Routes[enumMember];\r\n                    routes.push(route);\r\n                }\r\n                const response = {\r\n                    success: true,\r\n                    payload: {\r\n                        availableRoutes: routes\r\n                    },\r\n                };\r\n                return res.end(JSON.stringify(response));\r\n            }\r\n            if (req.url === interfaces_1.Routes.ADMIN_AREA) {\r\n                const userModel = new UserModel_1.default(db);\r\n                const auth = new Auth_1.default(userModel);\r\n                return admin_1.default(auth, req, res);\r\n            }\r\n            if (req.method === 'POST') {\r\n                let body = '';\r\n                yield req.on('data', chunk => body += chunk.toString());\r\n                switch (req.url) {\r\n                    case interfaces_1.Routes.AUTH_SIGNUP: {\r\n                        const userModel = new UserModel_1.default(db);\r\n                        const auth = new Auth_1.default(userModel);\r\n                        return yield signup_1.default(auth, body, res);\r\n                    }\r\n                    case interfaces_1.Routes.AUTH_LOGIN: {\r\n                        const userModel = new UserModel_1.default(db);\r\n                        const auth = new Auth_1.default(userModel);\r\n                        return yield login_1.default(auth, body, req, res);\r\n                    }\r\n                }\r\n            }\r\n            res.statusCode = 404;\r\n            res.end('Not Found');\r\n        }\r\n        catch (e) {\r\n            return error_1.default(e, res);\r\n        }\r\n    }))\r\n        .listen(parseInt(SERVER_PORT, 10), SERVER_HOST, () => console.log(`==> [${process.pid}] SERVER STARTED on ${SERVER_DOMAIN} MODE: ${NODE_ENV}`));\r\n}))();\r\n\n\n//# sourceURL=webpack:///./index.ts?");

/***/ }),

/***/ "./interfaces.ts":
/*!***********************!*\
  !*** ./interfaces.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Routes = exports.Mode = void 0;\r\nvar Mode;\r\n(function (Mode) {\r\n    Mode[\"PRODUCTION\"] = \"production\";\r\n    Mode[\"DEVELOPMENT\"] = \"development\";\r\n})(Mode = exports.Mode || (exports.Mode = {}));\r\nvar Routes;\r\n(function (Routes) {\r\n    Routes[\"HOME\"] = \"/\";\r\n    Routes[\"ADMIN_AREA\"] = \"/api/auth\";\r\n    Routes[\"AUTH_LOGIN\"] = \"/api/auth/login\";\r\n    Routes[\"AUTH_SIGNUP\"] = \"/api/auth/signup\";\r\n})(Routes = exports.Routes || (exports.Routes = {}));\r\n\n\n//# sourceURL=webpack:///./interfaces.ts?");

/***/ }),

/***/ "./models/UserModel/UserModel.ts":
/*!***************************************!*\
  !*** ./models/UserModel/UserModel.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass UserModel {\r\n    constructor(db) {\r\n        this.db = db;\r\n    }\r\n    create(userData) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            const { password, username } = userData;\r\n            return this.db.collection(UserModel.TABLE_NAME).insertOne({\r\n                username,\r\n                password,\r\n            });\r\n        });\r\n    }\r\n    findOne(query) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            return this.db.collection(UserModel.TABLE_NAME).findOne(query);\r\n        });\r\n    }\r\n}\r\nUserModel.TABLE_NAME = 'users';\r\nexports.default = UserModel;\r\n\n\n//# sourceURL=webpack:///./models/UserModel/UserModel.ts?");

/***/ }),

/***/ "./services/Auth/Auth.ts":
/*!*******************************!*\
  !*** ./services/Auth/Auth.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst argon2_1 = __webpack_require__(/*! argon2 */ \"argon2\");\r\nconst jsonwebtoken_1 = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\r\nclass Auth {\r\n    constructor(userModel) {\r\n        this.userModel = userModel;\r\n    }\r\n    static generateJWT(userRecord) {\r\n        const data = {\r\n            _id: userRecord._id,\r\n            username: userRecord.username,\r\n        };\r\n        return jsonwebtoken_1.sign({ data, }, Auth.SIGN, { expiresIn: '30m' });\r\n    }\r\n    static validateUserFindResult(userRecord, username) {\r\n        if (!userRecord) {\r\n            const error = new Error(`User '${username}' not found`);\r\n            error.statusCode = 200;\r\n            throw error;\r\n        }\r\n    }\r\n    static validateUserName(username) {\r\n        if (!username) {\r\n            const error = new Error(`'username' param is missing!`);\r\n            error.statusCode = 422;\r\n            throw error;\r\n        }\r\n    }\r\n    static validatePassword(username) {\r\n        if (!username) {\r\n            const error = new Error(`'password' param is missing!`);\r\n            error.statusCode = 422;\r\n            throw error;\r\n        }\r\n    }\r\n    loginByAuthToken(authorizationHeader) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            if (authorizationHeader) {\r\n                const token = authorizationHeader.split(/\\s+/).pop();\r\n                try {\r\n                    const verifyResult = jsonwebtoken_1.verify(token, Auth.SIGN);\r\n                    const userRecord = yield this.userModel.findOne({ username: verifyResult.data.username });\r\n                    Auth.validateUserFindResult(userRecord, verifyResult.data.username);\r\n                    return {\r\n                        user: {\r\n                            username: userRecord.username,\r\n                        },\r\n                        token,\r\n                    };\r\n                }\r\n                catch (e) {\r\n                    const error = e;\r\n                    error.statusCode = 401;\r\n                    throw e;\r\n                }\r\n            }\r\n            return null;\r\n        });\r\n    }\r\n    signUp(username, password) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            Auth.validateUserName(username);\r\n            Auth.validatePassword(password);\r\n            const passwordHashed = yield argon2_1.hash(password);\r\n            const user = yield this.userModel.findOne({ username });\r\n            if (user) {\r\n                const error = new Error(`User '${username}' already exists!`);\r\n                error.statusCode = 200;\r\n                throw error;\r\n            }\r\n            yield this.userModel.create({\r\n                username,\r\n                password: passwordHashed,\r\n            });\r\n            return {\r\n                user: {\r\n                    username,\r\n                }\r\n            };\r\n        });\r\n    }\r\n    login(username, password) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            Auth.validateUserName(username);\r\n            Auth.validatePassword(password);\r\n            const userRecord = yield this.userModel.findOne({ username });\r\n            Auth.validateUserFindResult(userRecord, username);\r\n            const isPasswordCorrect = yield argon2_1.verify(userRecord.password, password);\r\n            if (!isPasswordCorrect) {\r\n                const error = new Error(`Incorrect password`);\r\n                error.statusCode = 200;\r\n                throw error;\r\n            }\r\n            return {\r\n                user: {\r\n                    username: userRecord.username,\r\n                },\r\n                token: Auth.generateJWT(userRecord),\r\n            };\r\n        });\r\n    }\r\n}\r\nAuth.SIGN = 'Yn\"`%n8Sknj?wa]6+;8{';\r\nexports.default = Auth;\r\n\n\n//# sourceURL=webpack:///./services/Auth/Auth.ts?");

/***/ }),

/***/ "argon2":
/*!*************************!*\
  !*** external "argon2" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"argon2\");\n\n//# sourceURL=webpack:///external_%22argon2%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");\n\n//# sourceURL=webpack:///external_%22mongodb%22?");

/***/ })

/******/ });