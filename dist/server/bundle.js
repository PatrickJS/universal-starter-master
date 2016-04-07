/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "D:\\universal\\demo\\universal-starter-master";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {"use strict";
	var path = __webpack_require__(11);
	var express = __webpack_require__(10);
	var bodyParser = __webpack_require__(9);
	__webpack_require__(7);
	var angular2_universal_preview_1 = __webpack_require__(6);
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(8);
	var app_component_1 = __webpack_require__(2);
	var app = express();
	var root = path.join(path.resolve(__dirname, '..'));
	core_1.enableProdMode();
	app.engine('.html', angular2_universal_preview_1.expressEngine);
	app.set('views', __dirname);
	app.set('view engine', 'html');
	app.use(bodyParser.json());
	function ngApp(req, res) {
	    var baseUrl = '/';
	    var url = req.originalUrl || '/';
	    res.render('index', {
	        directives: [app_component_1.App],
	        providers: [
	            core_1.provide(router_1.APP_BASE_HREF, { useValue: baseUrl }),
	            core_1.provide(angular2_universal_preview_1.REQUEST_URL, { useValue: url }),
	            angular2_universal_preview_1.NODE_ROUTER_PROVIDERS,
	            angular2_universal_preview_1.NODE_HTTP_PROVIDERS,
	        ],
	        async: true,
	        preboot: true
	    }, function (err, content) {
	        console.log(content);
	        res.send(content);
	    });
	}
	app.use(express.static(root, { index: false }));
	app.get('/data.json', function (req, res) {
	    res.json({
	        data: 'fake data'
	    });
	});
	app.use('/', ngApp);
	app.listen(3000, function () {
	    console.log('Listen on http://localhost:3000');
	});

	/* WEBPACK VAR INJECTION */}.call(exports, "src"))

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("angular2/core");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var generic_component_1 = __webpack_require__(4);
	var App = (function () {
	    function App() {
	    }
	    App = __decorate([
	        core_1.Component({
	            selector: 'app',
	            directives: [generic_component_1.GenericComponent],
	            template: "\n        <generic-component component-name=\"icici-heading\"></generic-component>\n        <generic-component component-name=\"icici-body\"></generic-component>\n    "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], App);
	    return App;
	}());
	exports.App = App;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var bodyComponent = (function () {
	    function bodyComponent() {
	    }
	    bodyComponent.prototype.ngOnInit = function () {
	        this.record = [{
	                "styling": {
	                    "overall": {}
	                },
	                "data": {
	                    "statementDate": "Statement Date",
	                    "minAmtDue": "Minimum Amount Due",
	                    "totalAmtDue": "Your Total Amount Due",
	                    "stmtSummary": "Statement Summary",
	                    "creditSummary": "Credit Summary",
	                    "rewards": "REWARDS",
	                    "bottomPara": "Convert your Big shopping bills into small, manageable EMI's! If any of the below transaction is highlighted,you may login to ICICI Bank Internet Banking and convert into EMI now ! TnC apply, visit www.icicibank.com/emioncall for details.",
	                    "prevBalance": "Previous Balance",
	                    "purchases": "Purchases/ Charges",
	                    "cashAdv": "Cash Advances",
	                    "payments": "Payments/ Credits",
	                    "creditLimit": "Credit Limit",
	                    "creditAvail": "Available Credit",
	                    "pointsEarned": "Points Earned",
	                    "payback": "Points Transferred to PAYBACK(Acc:",
	                    "dueDate": "Due Date:",
	                    "Amt": "Rs.",
	                    "interest": "Interest will be levied if Total Amount Due is not paid"
	                },
	                "mappings": [
	                    {
	                        "mapAttr": "statementDate"
	                    },
	                    {
	                        "mapAttr": "minAmtDue"
	                    },
	                    {
	                        "mapAttr": "totalAmtDue"
	                    },
	                    {
	                        "mapAttr": "stmtSummary"
	                    },
	                    {
	                        "mapAttr": "creditSummary"
	                    },
	                    {
	                        "mapAttr": "rewards"
	                    },
	                    {
	                        "mapAttr": "bottomPara"
	                    },
	                    {
	                        "mapAttr": "prevBalance"
	                    },
	                    {
	                        "mapAttr": "purchases"
	                    },
	                    {
	                        "mapAttr": "cashAdv"
	                    },
	                    {
	                        "mapAttr": "payments"
	                    },
	                    {
	                        "mapAttr": "creditLimit"
	                    },
	                    {
	                        "mapAttr": "creditAvail"
	                    },
	                    {
	                        "mapAttr": "pointsEarned"
	                    },
	                    {
	                        "mapAttr": "payback"
	                    },
	                    {
	                        "mapAttr": "dueDate"
	                    },
	                    {
	                        "mapAttr": "Amt"
	                    },
	                    {
	                        "mapAttr": "interest"
	                    }
	                ]
	            }
	        ];
	    };
	    bodyComponent = __decorate([
	        core_1.Component({
	            selector: 'icici-body',
	            templateUrl: 'http://localhost:3000/src/app/app.component.html'
	        }), 
	        __metadata('design:paramtypes', [])
	    ], bodyComponent);
	    return bodyComponent;
	}());
	exports.bodyComponent = bodyComponent;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var body_component_1 = __webpack_require__(3);
	var heading_component_1 = __webpack_require__(5);
	var GenericComponent = (function () {
	    function GenericComponent(dcl, elementRef) {
	        this.dcl = dcl;
	        this.elementRef = elementRef;
	        this.title = 'Generic';
	        this.currentComponent = 'Generic';
	        this.typesRegister = [body_component_1.bodyComponent, heading_component_1.headingComponent];
	        this.keysRegister = ['icici-body', 'icici-heading'];
	    }
	    GenericComponent.prototype.ngOnInit = function () {
	        console.log('Loading using DCL...' + this.componentName);
	        var componentIndex = this.keysRegister.indexOf(this.componentName);
	        this.dcl.loadNextToLocation(this.typesRegister[componentIndex], this.elementRef);
	        console.log('Loading using DCL...done');
	    };
	    __decorate([
	        core_1.Input('component-name'), 
	        __metadata('design:type', String)
	    ], GenericComponent.prototype, "componentName", void 0);
	    GenericComponent = __decorate([
	        core_1.Component({
	            selector: 'generic-component',
	            template: ''
	        }), 
	        __metadata('design:paramtypes', [core_1.DynamicComponentLoader, core_1.ElementRef])
	    ], GenericComponent);
	    return GenericComponent;
	}());
	exports.GenericComponent = GenericComponent;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var headingComponent = (function () {
	    function headingComponent() {
	    }
	    headingComponent.prototype.ngOnInit = function () {
	        this.record = [{
	                "styling": {
	                    "overall": {}
	                },
	                "data": {
	                    "src1": "http://localhost:3202/uploads/p1.png",
	                    "src2": "http://localhost:3202/uploads/p2.png",
	                    "src3": "http://localhost:3202/uploads/p3.png",
	                    "customerName": "Customer Name",
	                    "cardAccNo": "Card Account No"
	                },
	                "mappings": [
	                    {
	                        "mapAttr": "src1"
	                    },
	                    {
	                        "mapAttr": "src2"
	                    },
	                    {
	                        "mapAttr": "src3"
	                    },
	                    {
	                        "mapAttr": "customerName"
	                    },
	                    {
	                        "mapAttr": "cardAccNo"
	                    }
	                ]
	            }];
	    };
	    headingComponent = __decorate([
	        core_1.Component({
	            selector: 'icici-heading',
	            template: '<div>Heading</div>'
	        }), 
	        __metadata('design:paramtypes', [])
	    ], headingComponent);
	    return headingComponent;
	}());
	exports.headingComponent = headingComponent;


/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("angular2-universal-preview");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("angular2-universal-preview/polyfills");

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("angular2/router");

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("body-parser");

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ }
/******/ ]);