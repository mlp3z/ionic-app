(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tabs-tabs-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/tabs.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/tabs.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesTabsTabsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-tabs>\r\n\r\n    <ion-tab-bar slot=\"bottom\" color=\"dark\">\r\n        <ion-tab-button tab=\"tab1\">\r\n            <ion-icon name=\"reader-outline\"></ion-icon>\r\n            <ion-label>Pendientes</ion-label>\r\n        </ion-tab-button>\r\n\r\n        <ion-tab-button tab=\"tab2\" color=\"dark\">\r\n            <ion-icon name=\"checkmark-done-outline\"></ion-icon>\r\n            <ion-label>Finalizados</ion-label>\r\n        </ion-tab-button>\r\n\r\n        <!-- <ion-tab-button tab=\"tab3\">\r\n            <ion-icon name=\"checkmark-done-sharp\"></ion-icon>\r\n            <ion-label>Tab 3</ion-label>\r\n        </ion-tab-button> -->\r\n\r\n\r\n        <ion-tab-button (click)=\"showPlatform()\">\r\n            <ion-icon name=\"settings-outline\"></ion-icon>\r\n            <ion-label>showPlatform</ion-label>\r\n        </ion-tab-button>\r\n\r\n    </ion-tab-bar>\r\n\r\n</ion-tabs>\r\n\r\n\r\n<!-- <ion-content padding>\r\n    <button ion-button full (click)=\"showPlatform()\">Where am I running?</button>\r\n</ion-content> -->";
      /***/
    },

    /***/
    "./src/app/pages/tabs/tabs-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/tabs/tabs-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: TabsPageRoutingModule */

    /***/
    function srcAppPagesTabsTabsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function () {
        return TabsPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tabs.page */
      "./src/app/pages/tabs/tabs.page.ts");

      var routes = [{
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [{
          path: 'tab1',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | tab1-tab1-module */
            [__webpack_require__.e("default~tab1-tab1-module~tab2-tab2-module"), __webpack_require__.e("tab1-tab1-module")]).then(__webpack_require__.bind(null,
            /*! ../tab1/tab1.module */
            "./src/app/pages/tab1/tab1.module.ts")).then(function (m) {
              return m.Tab1PageModule;
            });
          }
        }, {
          path: 'tab2',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | tab2-tab2-module */
            [__webpack_require__.e("default~tab1-tab1-module~tab2-tab2-module"), __webpack_require__.e("tab2-tab2-module")]).then(__webpack_require__.bind(null,
            /*! ../tab2/tab2.module */
            "./src/app/pages/tab2/tab2.module.ts")).then(function (m) {
              return m.Tab2PageModule;
            });
          }
        }, //   {
        //     path: 'tab3',
        //     loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
        //   },
        {
          path: '',
          redirectTo: '/tabs/tab1',
          pathMatch: 'full'
        }]
      }, {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }];

      var TabsPageRoutingModule = function TabsPageRoutingModule() {
        _classCallCheck(this, TabsPageRoutingModule);
      };

      TabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TabsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/tabs/tabs.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/pages/tabs/tabs.module.ts ***!
      \*******************************************/

    /*! exports provided: TabsPageModule */

    /***/
    function srcAppPagesTabsTabsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsPageModule", function () {
        return TabsPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tabs-routing.module */
      "./src/app/pages/tabs/tabs-routing.module.ts");
      /* harmony import */


      var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tabs.page */
      "./src/app/pages/tabs/tabs.page.ts");

      var TabsPageModule = function TabsPageModule() {
        _classCallCheck(this, TabsPageModule);
      };

      TabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
      })], TabsPageModule);
      /***/
    },

    /***/
    "./src/app/pages/tabs/tabs.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/pages/tabs/tabs.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesTabsTabsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhYnMvdGFicy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/pages/tabs/tabs.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/pages/tabs/tabs.page.ts ***!
      \*****************************************/

    /*! exports provided: TabsPage */

    /***/
    function srcAppPagesTabsTabsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsPage", function () {
        return TabsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var TabsPage = /*#__PURE__*/function () {
        function TabsPage(navCtrl, alertController, platform) {
          _classCallCheck(this, TabsPage);

          this.navCtrl = navCtrl;
          this.alertController = alertController;
          this.platform = platform;
        }

        _createClass(TabsPage, [{
          key: "showPlatform",
          value: function showPlatform() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var text, alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      text = 'I run on: ' + this.platform.platforms();
                      _context.next = 3;
                      return this.alertController.create({
                        header: 'My Home',
                        subHeader: text,
                        // message: 'This is an alert message.',
                        buttons: ['OK']
                      });

                    case 3:
                      alert = _context.sent;
                      alert.present(); // this.presentAlert();
                      // this.presentAlertMultipleButtons();
                      // this.presentAlertConfirm();
                      // this.presentAlertPrompt();
                      // this.presentAlertRadio();
                      // this.presentAlertCheckbox();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "presentAlert",
          value: function presentAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Alert',
                        subHeader: 'Subtitle',
                        message: 'This is an alert message.',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context2.sent;
                      _context2.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "presentAlertMultipleButtons",
          value: function presentAlertMultipleButtons() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Alert',
                        subHeader: 'Subtitle',
                        message: 'This is an alert message.',
                        buttons: ['Cancel', 'Open Modal', 'Delete']
                      });

                    case 2:
                      alert = _context3.sent;
                      _context3.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "presentAlertConfirm",
          value: function presentAlertConfirm() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var alert;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Confirm!',
                        message: 'Message <strong>text</strong>!!!',
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'Okay',
                          handler: function handler() {
                            console.log('Confirm Okay');
                          }
                        }]
                      });

                    case 2:
                      alert = _context4.sent;
                      _context4.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "presentAlertPrompt",
          value: function presentAlertPrompt() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var alert;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Prompt!',
                        inputs: [{
                          name: 'name1',
                          type: 'text',
                          placeholder: 'Placeholder 1'
                        }, {
                          name: 'name2',
                          type: 'text',
                          id: 'name2-id',
                          value: 'hello',
                          placeholder: 'Placeholder 2'
                        }, // multiline input.
                        {
                          name: 'paragraph',
                          id: 'paragraph',
                          type: 'textarea',
                          placeholder: 'Placeholder 3'
                        }, {
                          name: 'name3',
                          value: 'http://ionicframework.com',
                          type: 'url',
                          placeholder: 'Favorite site ever'
                        }, // input date with min & max
                        {
                          name: 'name4',
                          type: 'date',
                          min: '2017-03-01',
                          max: '2018-01-12'
                        }, // input date without min nor max
                        {
                          name: 'name5',
                          type: 'date'
                        }, {
                          name: 'name6',
                          type: 'number',
                          min: -5,
                          max: 10
                        }, {
                          name: 'name7',
                          type: 'number'
                        }, {
                          name: 'name8',
                          type: 'password',
                          placeholder: 'Advanced Attributes',
                          cssClass: 'specialClass',
                          attributes: {
                            maxlength: 4,
                            inputmode: 'decimal'
                          }
                        }],
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler() {
                            console.log('Confirm Cancel');
                          }
                        }, {
                          text: 'Ok',
                          handler: function handler() {
                            console.log('Confirm Ok');
                          }
                        }]
                      });

                    case 2:
                      alert = _context5.sent;
                      _context5.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "presentAlertRadio",
          value: function presentAlertRadio() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var alert;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Radio',
                        inputs: [{
                          name: 'radio1',
                          type: 'radio',
                          label: 'Radio 1',
                          value: 'value1',
                          checked: true
                        }, {
                          name: 'radio2',
                          type: 'radio',
                          label: 'Radio 2',
                          value: 'value2'
                        }, {
                          name: 'radio3',
                          type: 'radio',
                          label: 'Radio 3',
                          value: 'value3'
                        }, {
                          name: 'radio4',
                          type: 'radio',
                          label: 'Radio 4',
                          value: 'value4'
                        }, {
                          name: 'radio5',
                          type: 'radio',
                          label: 'Radio 5',
                          value: 'value5'
                        }, {
                          name: 'radio6',
                          type: 'radio',
                          label: 'Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 ',
                          value: 'value6'
                        }],
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler() {
                            console.log('Confirm Cancel');
                          }
                        }, {
                          text: 'Ok',
                          handler: function handler() {
                            console.log('Confirm Ok');
                          }
                        }]
                      });

                    case 2:
                      alert = _context6.sent;
                      _context6.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "presentAlertCheckbox",
          value: function presentAlertCheckbox() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var alert;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Checkbox',
                        inputs: [{
                          name: 'checkbox1',
                          type: 'checkbox',
                          label: 'Checkbox 1',
                          value: 'value1',
                          checked: true
                        }, {
                          name: 'checkbox2',
                          type: 'checkbox',
                          label: 'Checkbox 2',
                          value: 'value2'
                        }, {
                          name: 'checkbox3',
                          type: 'checkbox',
                          label: 'Checkbox 3',
                          value: 'value3'
                        }, {
                          name: 'checkbox4',
                          type: 'checkbox',
                          label: 'Checkbox 4',
                          value: 'value4'
                        }, {
                          name: 'checkbox5',
                          type: 'checkbox',
                          label: 'Checkbox 5',
                          value: 'value5'
                        }, {
                          name: 'checkbox6',
                          type: 'checkbox',
                          label: 'Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6',
                          value: 'value6'
                        }],
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler() {
                            console.log('Confirm Cancel');
                          }
                        }, {
                          text: 'Ok',
                          handler: function handler() {
                            console.log('Confirm Ok');
                          }
                        }]
                      });

                    case 2:
                      alert = _context7.sent;
                      _context7.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }]);

        return TabsPage;
      }();

      TabsPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }];
      };

      TabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabs',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./tabs.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/tabs.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./tabs.page.scss */
        "./src/app/pages/tabs/tabs.page.scss"))["default"]]
      })], TabsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-tabs-tabs-module-es5.js.map