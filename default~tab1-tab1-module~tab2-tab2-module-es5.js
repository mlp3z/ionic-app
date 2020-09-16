(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~tab1-tab1-module~tab2-tab2-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/listas/listas.component.html":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/listas/listas.component.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsListasListasComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-list (click)=\"viewChilds()\">\n\n    <ion-item-sliding *ngFor=\"let lista of todoService.listas | filtro:tabName ; index as i\" class=\"animated fadeInDown\">\n\n        <!-- #slidingItem (click)=\"slidingItem.close()\" -->\n\n        <ion-item detail color=\"light\" (click)=\"verLista(lista)\">\n\n            <ion-label>\n                <ion-icon *ngIf=\"tabName=='tab1'\" slot=\"start\" name=\"clipboard-outline\" color=\"warning\">\n\n                </ion-icon>\n                <ion-icon *ngIf=\"tabName=='tab2'\" slot=\"start\" name=\"shield-checkmark-outline\" color=\"success\">\n\n                </ion-icon>\n                {{lista.titulo}}\n\n                <ion-progress-bar *ngIf=\"tabName=='tab1'\" color=\"tertiary\" value=\"{{lista | countItems:'completadas_percent'}}\">\n                </ion-progress-bar>\n                <!-- <ion-label *ngIf=\"tabName=='tab1'\" color=\"tertiary\">\n                    Completadas: {{ lista | countItems:'completadas_count'}} Pendientes {{ lista | countItems:'pendientes_count'}}\n                </ion-label> -->\n            </ion-label>\n\n\n\n            <ion-note *ngIf=\"tabName=='tab1'\" slot=\"end\" color=\"tertiary\">\n                {{ lista | countItems:'completadas_count'}} de {{lista.items.length}} items\n            </ion-note>\n            <ion-note *ngIf=\"tabName=='tab2'\" slot=\"end\" color=\"tertiary\">\n                Fecha Fin: {{lista.fechaCompletada | date: 'dd/MM/yyyy' }}\n            </ion-note>\n\n        </ion-item>\n\n        <ion-item-options side=\"end\">\n            <ion-item-option color=\"danger\" (click)=\"eliminarLista(lista)\">\n                <!-- <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon> -->\n                <ion-icon slot=\"start\" name=\"trash-outline\"></ion-icon>\n                delete\n            </ion-item-option>\n        </ion-item-options>\n\n        <ion-item-options side=\"start\">\n            <ion-item-option color=\"warning\" (click)=\"editarLista(lista)\">\n                <ion-icon name=\"create-outline\"></ion-icon>\n                edit\n            </ion-item-option>\n        </ion-item-options>\n\n    </ion-item-sliding>\n\n</ion-list>\n\n\n<!-- <ion-label>Label 1</ion-label>\n<ion-label>Label 2</ion-label>\n<ion-label>Label 3</ion-label> -->";
      /***/
    },

    /***/
    "./src/app/components/components.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/components/components.module.ts ***!
      \*************************************************/

    /*! exports provided: ComponentsModule */

    /***/
    function srcAppComponentsComponentsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
        return ComponentsModule;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _listas_listas_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./listas/listas.component */
      "./src/app/components/listas/listas.component.ts");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../pipes/pipes.module */
      "./src/app/pipes/pipes.module.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var ComponentsModule = function ComponentsModule() {
        _classCallCheck(this, ComponentsModule);
      };

      ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_listas_listas_component__WEBPACK_IMPORTED_MODULE_3__["ListasComponent"]],
        exports: [_listas_listas_component__WEBPACK_IMPORTED_MODULE_3__["ListasComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["PipesModule"]]
      })], ComponentsModule);
      /***/
    },

    /***/
    "./src/app/components/listas/listas.component.ts":
    /*!*******************************************************!*\
      !*** ./src/app/components/listas/listas.component.ts ***!
      \*******************************************************/

    /*! exports provided: ListasComponent */

    /***/
    function srcAppComponentsListasListasComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListasComponent", function () {
        return ListasComponent;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/todo.service */
      "./src/app/services/todo.service.ts"); //viewchild
      //https://fireship.io/snippets/using-viewchild-in-ionic-4-to-call-component-methods/


      var ListasComponent = /*#__PURE__*/function () {
        function ListasComponent(todoService, router, alertController) {
          _classCallCheck(this, ListasComponent);

          this.todoService = todoService;
          this.router = router;
          this.alertController = alertController; // console.log(this.tabName);
        }

        _createClass(ListasComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "verLista",
          value: function verLista(lista) {
            // console.log(lista)
            this.router.navigateByUrl("tabs/".concat(this.tabName, "/agregar/").concat(lista.id));
          }
        }, {
          key: "eliminarLista",
          value: function eliminarLista(lista) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        header: 'Confirmar',
                        message: "Seguro que desea eliminar la lista: ".concat(lista.titulo),
                        buttons: [{
                          text: 'Cancelar',
                          role: 'cancel',
                          handler: function handler() {
                            _this.ionListViewChild.closeSlidingItems();
                          }
                        }, {
                          text: 'Eliminar',
                          handler: function handler() {
                            _this.todoService.eliminarLista(lista);

                            _this.ionListViewChild.closeSlidingItems();
                          }
                        }]
                      });

                    case 2:
                      alert = _context.sent;
                      alert.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "editarLista",
          value: function editarLista(lista) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this2 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertController.create({
                        header: 'Editar Lista',
                        inputs: [{
                          name: 'titulo',
                          type: 'text',
                          value: lista.titulo,
                          placeholder: 'nombre de la lista'
                        }],
                        buttons: [{
                          text: 'Cancelar',
                          role: 'cancel',
                          handler: function handler() {
                            _this2.ionListViewChild.closeSlidingItems();
                          }
                        }, {
                          text: 'Guardar',
                          handler: function handler(data) {
                            // console.log(data);
                            if (data.titulo.length === 0) {
                              return;
                            }

                            _this2.todoService.editarLista(lista.id, data.titulo);

                            _this2.ionListViewChild.closeSlidingItems();
                          }
                        }]
                      });

                    case 2:
                      alert = _context2.sent;
                      alert.present();

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          } //@ViewChild(IonList) ionList:IonList;
          // @ViewChildren(IonLabel) ionLabels: IonLabel[];

        }, {
          key: "viewChilds",
          value: function viewChilds() {// console.log(this.ionList);
            // console.log(this.ionLabels);
          }
        }]);

        return ListasComponent;
      }();

      ListasComponent.ctorParameters = function () {
        return [{
          type: src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_4__["TodoService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }];
      };

      ListasComponent.propDecorators = {
        tabName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        ionListViewChild: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonList"], {
            "static": true
          }]
        }]
      };
      ListasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-listas',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./listas.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/listas/listas.component.html"))["default"]
      })], ListasComponent);
      /***/
    },

    /***/
    "./src/app/models/lista.model.ts":
    /*!***************************************!*\
      !*** ./src/app/models/lista.model.ts ***!
      \***************************************/

    /*! exports provided: Lista */

    /***/
    function srcAppModelsListaModelTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Lista", function () {
        return Lista;
      });

      var Lista = function Lista(titulo) {
        _classCallCheck(this, Lista);

        this.id = new Date().getTime();
        this.titulo = titulo;
        this.fechaCreacion = new Date();
        this.fechaCompletada = null;
        this.terminada = false;
        this.items = [];
      };
      /***/

    },

    /***/
    "./src/app/pipes/count-items.pipe.ts":
    /*!*******************************************!*\
      !*** ./src/app/pipes/count-items.pipe.ts ***!
      \*******************************************/

    /*! exports provided: CountItemsPipe */

    /***/
    function srcAppPipesCountItemsPipeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CountItemsPipe", function () {
        return CountItemsPipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var CountItemsPipe = /*#__PURE__*/function () {
        function CountItemsPipe() {
          _classCallCheck(this, CountItemsPipe);
        }

        _createClass(CountItemsPipe, [{
          key: "roundToTwo",
          value: function roundToTwo(num) {
            return Math.round((num + Number.EPSILON) * 100) / 100;
          }
        }, {
          key: "transform",
          value: function transform(pLista) {
            var estado = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var total = pLista.items.length;
            var pendientes = pLista.items.filter(function (x) {
              return x.completado === false;
            }).length;
            var completadas = pLista.items.filter(function (x) {
              return x.completado === true;
            }).length;

            switch (estado) {
              case 'pendientes_count':
                return pendientes;

              case 'completadas_count':
                return completadas;

              case 'pendientes_percent':
                return this.roundToTwo(pendientes / total);

              case 'completadas_percent':
                return this.roundToTwo(completadas / total);

              default:
                return total;
            } // if(tabName=='tab1'){
            //     return pLista.items.filter(x => x.completado === false).length;
            // }
            // else if(tabName=='tab2'){
            //     return pLista.items.filter(x => x.completado === true).length;
            // }
            // else{
            //     return pLista.items.length
            // }

          }
        }]);

        return CountItemsPipe;
      }();

      CountItemsPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'countItems',
        pure: false
      })], CountItemsPipe);
      /***/
    },

    /***/
    "./src/app/pipes/filtro.pipe.ts":
    /*!**************************************!*\
      !*** ./src/app/pipes/filtro.pipe.ts ***!
      \**************************************/

    /*! exports provided: FiltroPipe */

    /***/
    function srcAppPipesFiltroPipeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FiltroPipe", function () {
        return FiltroPipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var FiltroPipe = /*#__PURE__*/function () {
        function FiltroPipe() {
          _classCallCheck(this, FiltroPipe);
        }

        _createClass(FiltroPipe, [{
          key: "transform",
          value: function transform(pLista, tabName) {
            // console.log(pLista,tabName);
            // return pLista
            if (tabName == 'tab1') {
              return pLista.filter(function (x) {
                return x.terminada === false;
              });
            } else if (tabName == 'tab2') {
              return pLista.filter(function (x) {
                return x.terminada === true;
              });
            } else {
              return pLista;
            }
          }
        }]);

        return FiltroPipe;
      }();

      FiltroPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filtro',
        pure: false //esto es para activar la deteccion de cambios cuando se realizan en otra pages
        //por defecto es true, osea que si la lista que pasa por el pipe es modificada en otra
        //pages cuando retorne aqui(sin recargar) el pipe no 'filtrara' de nuevo la lista

      })], FiltroPipe);
      /***/
    },

    /***/
    "./src/app/pipes/pipes.module.ts":
    /*!***************************************!*\
      !*** ./src/app/pipes/pipes.module.ts ***!
      \***************************************/

    /*! exports provided: PipesModule */

    /***/
    function srcAppPipesPipesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PipesModule", function () {
        return PipesModule;
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


      var _filtro_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./filtro.pipe */
      "./src/app/pipes/filtro.pipe.ts");
      /* harmony import */


      var _count_items_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./count-items.pipe */
      "./src/app/pipes/count-items.pipe.ts"); // import { CommonModule } from '@angular/common';


      var PipesModule = function PipesModule() {
        _classCallCheck(this, PipesModule);
      };

      PipesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_filtro_pipe__WEBPACK_IMPORTED_MODULE_2__["FiltroPipe"], _count_items_pipe__WEBPACK_IMPORTED_MODULE_3__["CountItemsPipe"]],
        exports: [_filtro_pipe__WEBPACK_IMPORTED_MODULE_2__["FiltroPipe"], _count_items_pipe__WEBPACK_IMPORTED_MODULE_3__["CountItemsPipe"]],
        imports: [// CommonModule //no vamos a usar ngIf,ngFor asique no lo importamos
        ]
      })], PipesModule);
      /***/
    },

    /***/
    "./src/app/services/todo.service.ts":
    /*!******************************************!*\
      !*** ./src/app/services/todo.service.ts ***!
      \******************************************/

    /*! exports provided: TodoService */

    /***/
    function srcAppServicesTodoServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TodoService", function () {
        return TodoService;
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


      var _models_lista_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../models/lista.model */
      "./src/app/models/lista.model.ts");

      var TodoService = /*#__PURE__*/function () {
        function TodoService() {
          _classCallCheck(this, TodoService);

          // console.log('constructor TodoService')
          this.listas = []; // const lista1 = new Lista('estudiar tech backend');
          // const lista2 = new Lista('estudiar tech fronted');
          // this.listas.push(lista1,lista2);
          // console.log(this.listas);

          this.cargarStorage();
        }

        _createClass(TodoService, [{
          key: "guardarStorage",
          value: function guardarStorage() {
            localStorage.setItem('ionic-app-data', JSON.stringify(this.listas));
          }
        }, {
          key: "cargarStorage",
          value: function cargarStorage() {
            if (localStorage.getItem('ionic-app-data')) this.listas = JSON.parse(localStorage.getItem('ionic-app-data'));
          }
        }, {
          key: "crearLista",
          value: function crearLista(titulo) {
            var nuevaLista = new _models_lista_model__WEBPACK_IMPORTED_MODULE_2__["Lista"](titulo);
            this.listas.push(nuevaLista);
            this.guardarStorage();
            return nuevaLista.id;
          }
        }, {
          key: "obtenerLista",
          value: function obtenerLista(id) {
            id = Number(id);
            var listaSearch = this.listas.find(function (x) {
              return x.id === id;
            });
            return listaSearch;
          }
        }, {
          key: "eliminarLista",
          value: function eliminarLista(lista) {
            this.listas = this.listas.filter(function (x) {
              return x.id != lista.id;
            });
            this.guardarStorage();
          }
        }, {
          key: "editarLista",
          value: function editarLista(id, titulo) {
            // console.log(id,titulo);
            var listaSearch = this.listas.find(function (x) {
              return x.id === id;
            }); // console.log(listaSearch)

            listaSearch.titulo = titulo; // console.log(listaSearch)

            this.guardarStorage();
          }
        }]);

        return TodoService;
      }();

      TodoService.ctorParameters = function () {
        return [];
      };

      TodoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], TodoService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~tab1-tab1-module~tab2-tab2-module-es5.js.map