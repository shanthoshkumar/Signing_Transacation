(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../node_modules/webpack/buildin/global.js":
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Service/test.service.ts":
/*!*****************************************!*\
  !*** ./src/app/Service/test.service.ts ***!
  \*****************************************/
/*! exports provided: TestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestService", function() { return TestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! web3 */ "../node_modules/web3/src/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ethereumjs_tx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ethereumjs-tx */ "../node_modules/ethereumjs-tx/es5/index.js");
/* harmony import */ var ethereumjs_tx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ethereumjs_tx__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var Abi = __webpack_require__(/*! ../Service/test_abi.json */ "./src/app/Service/test_abi.json");
var Buffer = __webpack_require__(/*! buffer/ */ "../node_modules/buffer/index.js").Buffer;
var TestService = /** @class */ (function () {
    function TestService() {
        this.web3 = null;
        this.contractAddress = "0xde84c865dad9c1ce44c84fb2c7af268bae13fa7c";
        this.owner = "0x6814b126eEbeED353A8D9e1bDCaC422f6F0A339e";
        this.web3 = new web3__WEBPACK_IMPORTED_MODULE_1___default.a(new web3__WEBPACK_IMPORTED_MODULE_1___default.a.providers.HttpProvider('https://ropsten.infura.io/Vr1GWcLG0XzcdrZHWMPu'));
        this.contract = new this.web3.eth.Contract(Abi, this.contractAddress, {
            from: this.owner,
            gasLimit: 3000000,
        });
    }
    TestService.prototype.getTransactionCount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.web3.eth.getTransactionCount("0x6814b126eEbeED353A8D9e1bDCaC422f6F0A339e", function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            else {
                                resolve(result);
                            }
                        });
                    })];
            });
        });
    };
    TestService.prototype.Generate_Account = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.web3.eth.accounts.privateKeyToAccount('0x' + key, function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            else {
                                var address = result['address'];
                                //resolve(address) 
                            }
                        });
                    })];
            });
        });
    };
    TestService.prototype.show_data = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.contract.methods.show_count().call(function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            else {
                                resolve(result);
                            }
                        });
                    })];
            });
        });
    };
    TestService.prototype.receive = function (input_key) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.getTransactionCount().then(function (result) {
                            var nonce = result.toString(16);
                            var privateKey = Buffer.from(input_key, 'hex');
                            var obj = _this.web3.eth.accounts.privateKeyToAccount('0x' + input_key);
                            var senderAddress = obj['address'];
                            var contractFunction = _this.contract.methods.receive(senderAddress);
                            var functionAbi = contractFunction.encodeABI();
                            var txParams = {
                                nonce: '0x' + nonce,
                                gasPrice: '493E0',
                                gasLimit: 4000000,
                                from: senderAddress,
                                to: _this.contractAddress,
                                value: '0x00',
                                data: functionAbi
                            };
                            var tx = new ethereumjs_tx__WEBPACK_IMPORTED_MODULE_2__(txParams);
                            tx.sign(privateKey);
                            var serializedTx = tx.serialize();
                            _this.web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex')).on('receipt', function (receipt) {
                                console.log(receipt);
                                resolve(receipt['transactionHash']);
                            });
                        });
                    })];
            });
        });
    };
    TestService.prototype.increment = function (input_key, input) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var contractFunction = _this.contract.methods.increment(input);
                        var functionAbi = contractFunction.encodeABI();
                        _this.getTransactionCount().then(function (result) {
                            var nonce = result.toString(16);
                            var privateKey = Buffer.from(input_key, 'hex');
                            var obj = _this.web3.eth.accounts.privateKeyToAccount('0x' + input_key);
                            var senderAddress = obj['address'];
                            var txParams = {
                                nonce: '0x' + nonce,
                                gasPrice: '493E0',
                                gasLimit: 4000000,
                                from: senderAddress,
                                to: _this.contractAddress,
                                value: '0x00',
                                data: functionAbi
                            };
                            var tx = new ethereumjs_tx__WEBPACK_IMPORTED_MODULE_2__(txParams);
                            tx.sign(privateKey);
                            var serializedTx = tx.serialize();
                            _this.web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex')).on('receipt', function (receipt) {
                                console.log(receipt);
                                resolve(receipt['transactionHash']);
                            });
                        });
                    })];
            });
        });
    };
    TestService.prototype.decrement = function (input_key, input) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var contractFunction = _this.contract.methods.decrement(input);
                        var functionAbi = contractFunction.encodeABI();
                        _this.getTransactionCount().then(function (result) {
                            var nonce = result.toString(16);
                            var privateKey = Buffer.from(input_key, 'hex');
                            var obj = _this.web3.eth.accounts.privateKeyToAccount('0x' + input_key);
                            var senderAddress = obj['address'];
                            var txParams = {
                                nonce: '0x' + nonce,
                                gasPrice: '493E0',
                                gasLimit: 4000000,
                                from: senderAddress,
                                to: _this.contractAddress,
                                value: '0x00',
                                data: functionAbi
                            };
                            var tx = new ethereumjs_tx__WEBPACK_IMPORTED_MODULE_2__(txParams);
                            tx.sign(privateKey);
                            var serializedTx = tx.serialize();
                            _this.web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex')).on('receipt', function (receipt) {
                                console.log(receipt);
                                resolve(receipt['transactionHash']);
                            });
                        });
                    })];
            });
        });
    };
    TestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], TestService);
    return TestService;
}());



/***/ }),

/***/ "./src/app/Service/test_abi.json":
/*!***************************************!*\
  !*** ./src/app/Service/test_abi.json ***!
  \***************************************/
/*! exports provided: 0, 1, 2, default */
/***/ (function(module) {

module.exports = [{"constant":false,"inputs":[{"name":"y","type":"uint256"}],"name":"decrement","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"x","type":"uint256"}],"name":"increment","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"show_count","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}];

/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule, routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _increment_increment_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../increment/increment.component */ "./src/app/increment/increment.component.ts");
/* harmony import */ var _decrement_decrement_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../decrement/decrement.component */ "./src/app/decrement/decrement.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routes = [
    {
        path: 'add',
        component: _increment_increment_component__WEBPACK_IMPORTED_MODULE_2__["IncrementComponent"],
    },
    {
        path: 'sub',
        component: _decrement_decrement_component__WEBPACK_IMPORTED_MODULE_3__["DecrementComponent"],
    },
    {
        path: '',
        redirectTo: '/add',
        pathMatch: 'full'
    },
];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _increment_increment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./increment/increment.component */ "./src/app/increment/increment.component.ts");
/* harmony import */ var _decrement_decrement_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./decrement/decrement.component */ "./src/app/decrement/decrement.component.ts");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _increment_increment_component__WEBPACK_IMPORTED_MODULE_3__["IncrementComponent"],
                _decrement_decrement_component__WEBPACK_IMPORTED_MODULE_4__["DecrementComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(_app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["routes"]),
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/decrement/decrement.component.css":
/*!***************************************************!*\
  !*** ./src/app/decrement/decrement.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/decrement/decrement.component.html":
/*!****************************************************!*\
  !*** ./src/app/decrement/decrement.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <title>Just a Try</title>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n</head>\n<body>\n\n    <div class=\"container\">\n        \n        <div class=\"col-sm-3\"></div>\n        <div class=\"col-sm-5\">     \n      \n            <div class=\"col-sm-12\">\n                \n            </div>  \n          \n            \n               \n        <h1>Just copy and Paste</h1>\n        <h3 style=\"color:firebrick;\">a3c0074742371bfbfa3b2ffae0cac027ab1dcecb49fa0c7ea34f640aa89b3dd4</h3> \n            <div class=\"col-sm-12\">\n                <h1>&nbsp;&nbsp;&nbsp;Current Count</h1> \n                  <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{Count}}</h1>\n            </div>\n             \n            <div class=\"col-sm-12\"> \n                           \n                <h1>Decrease the Count (+)</h1>\n                  <div class=\"form-group\">\n                    <h2>Paste Your Private Key:</h2>\n                    <br> \n                    <input type=\"text\" #key class=\"form-control\">\n                  </div>\n\n                  <div class=\"form-group\">\n                     <h2>Enter the value:</h2>\n                      <br>\n                      <input type=\"text\" #i class=\"form-control\">\n                    </div>\n                 \n                  <div>\n                  <button class=\"btn btn-primary\" (click)=\"update(key.value,i.value)\">Update</button>\n                </div>\n               </div> \n      \n        </div>\n        </div>\n\n</body>\n</html>"

/***/ }),

/***/ "./src/app/decrement/decrement.component.ts":
/*!**************************************************!*\
  !*** ./src/app/decrement/decrement.component.ts ***!
  \**************************************************/
/*! exports provided: DecrementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecrementComponent", function() { return DecrementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Service_test_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Service/test.service */ "./src/app/Service/test.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DecrementComponent = /** @class */ (function () {
    // public private_key = 'a3c0074742371bfbfa3b2ffae0cac027ab1dcecb49fa0c7ea34f640aa89b3dd4'  //metamask acc key
    function DecrementComponent(ts) {
        var _this = this;
        this.ts = ts;
        this.ts.show_data().then(function (result) { return _this.Count = result; });
    }
    DecrementComponent.prototype.update = function (private_key, data) {
        var _this = this;
        this.ts.decrement(private_key, data).then(function (result) {
            alert('success');
            _this.ts.show_data().then(function (res) { return _this.Count = res; });
        });
    };
    DecrementComponent.prototype.ngOnInit = function () {
    };
    DecrementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-decrement',
            template: __webpack_require__(/*! ./decrement.component.html */ "./src/app/decrement/decrement.component.html"),
            styles: [__webpack_require__(/*! ./decrement.component.css */ "./src/app/decrement/decrement.component.css")]
        }),
        __metadata("design:paramtypes", [_Service_test_service__WEBPACK_IMPORTED_MODULE_1__["TestService"]])
    ], DecrementComponent);
    return DecrementComponent;
}());



/***/ }),

/***/ "./src/app/increment/increment.component.css":
/*!***************************************************!*\
  !*** ./src/app/increment/increment.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/increment/increment.component.html":
/*!****************************************************!*\
  !*** ./src/app/increment/increment.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <title>Just a Try</title>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n</head>\n<body>\n\n    <div class=\"container\">\n        \n        <div class=\"col-sm-3\"></div>\n        <div class=\"col-sm-5\">     \n      \n            <div class=\"col-sm-12\">\n                \n            </div>  \n          \n            \n               \n        <h1>Just copy and Paste</h1>\n        <h3 style=\"color:firebrick;\">a3c0074742371bfbfa3b2ffae0cac027ab1dcecb49fa0c7ea34f640aa89b3dd4</h3> \n            <div class=\"col-sm-12\">\n                <h1>&nbsp;&nbsp;&nbsp;Current Count</h1> \n                  <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{Count}}</h1>\n            </div>\n             \n            <div class=\"col-sm-12\"> \n                           \n                <h1>Increase the Count (+)</h1>\n                  <div class=\"form-group\">\n                    <h2>Paste Your Private Key:</h2>\n                    <br> \n                    <input type=\"text\" #key class=\"form-control\">\n                  </div>\n\n                  <div class=\"form-group\">\n                     <h2>Enter the value:</h2>\n                      <br>\n                      <input type=\"text\" #i class=\"form-control\">\n                    </div>\n                 \n                  <div>\n                  <button class=\"btn btn-primary\" (click)=\"update(key.value,i.value)\">Update</button>\n                </div>\n               </div> \n      \n        </div>\n        </div>\n\n</body>\n</html>\n<!-- pragma solidity ^0.4.20;\ncontract Testing\n{\n    uint count;\n    address Currentaccount;\n    \n    function increment(uint x)public  returns(bool){\n        \n        count += x;\n        return true;\n    }\n    \n    // function receive(address account)public {\n    //     Currentaccount = account;\n    \n    // }\n       \n    function receive() public {\n        Currentaccount = msg.sender;\n    \n    }\n    \n    function decrement(uint y)public returns(bool){\n        \n        count -=y;\n    }\n    \n    function view_address() public constant returns (address) {\n        return Currentaccount;\n    }\n    \n    function show_count() public constant returns (uint) {\n        return count;\n    }\n} -->\n"

/***/ }),

/***/ "./src/app/increment/increment.component.ts":
/*!**************************************************!*\
  !*** ./src/app/increment/increment.component.ts ***!
  \**************************************************/
/*! exports provided: IncrementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncrementComponent", function() { return IncrementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Service_test_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Service/test.service */ "./src/app/Service/test.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Abi = __webpack_require__(/*! ../Service/test_abi.json */ "./src/app/Service/test_abi.json");

var IncrementComponent = /** @class */ (function () {
    function IncrementComponent(ts) {
        var _this = this;
        this.ts = ts;
        this.web3 = null;
        this.ts.show_data().then(function (res) { return _this.Count = res; });
    }
    IncrementComponent.prototype.update = function (private_key, data) {
        var _this = this;
        this.ts.increment(private_key, data).then(function (result) {
            alert('success');
            _this.ts.show_data().then(function (res) { return _this.Count = res; });
        });
    };
    IncrementComponent.prototype.ngOnInit = function () {
    };
    IncrementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-increment',
            template: __webpack_require__(/*! ./increment.component.html */ "./src/app/increment/increment.component.html"),
            styles: [__webpack_require__(/*! ./increment.component.css */ "./src/app/increment/increment.component.css")]
        }),
        __metadata("design:paramtypes", [_Service_test_service__WEBPACK_IMPORTED_MODULE_1__["TestService"]])
    ], IncrementComponent);
    return IncrementComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n</head>\n<style>\n</style>\n<body>\n\n<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\"><b>Sign Transaction</b></a>\n    </div>\n    <ul class=\"nav navbar-nav\">\n      <li><a routerLink=\"/add\">Increase Count</a></li>\n      <li><a routerLink=\"/sub\">Decrease Count</a></li>\n    </ul>\n\n  </div>\n</nav>\n\n</body>\n</html> "

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/mnw/Desktop/Signing_Transacation/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map