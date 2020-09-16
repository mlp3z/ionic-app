(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~tab1-tab1-module~tab2-tab2-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/listas/listas.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/listas/listas.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-list (click)=\"viewChilds()\">\n\n    <ion-item-sliding *ngFor=\"let lista of todoService.listas | filtro:tabName ; index as i\" class=\"animated fadeInDown\">\n\n        <!-- #slidingItem (click)=\"slidingItem.close()\" -->\n\n        <ion-item detail color=\"light\" (click)=\"verLista(lista)\">\n\n            <ion-label>\n                <ion-icon *ngIf=\"tabName=='tab1'\" slot=\"start\" name=\"clipboard-outline\" color=\"warning\">\n\n                </ion-icon>\n                <ion-icon *ngIf=\"tabName=='tab2'\" slot=\"start\" name=\"shield-checkmark-outline\" color=\"success\">\n\n                </ion-icon>\n                {{lista.titulo}}\n\n                <ion-progress-bar *ngIf=\"tabName=='tab1'\" color=\"tertiary\" value=\"{{lista | countItems:'completadas_percent'}}\">\n                </ion-progress-bar>\n                <!-- <ion-label *ngIf=\"tabName=='tab1'\" color=\"tertiary\">\n                    Completadas: {{ lista | countItems:'completadas_count'}} Pendientes {{ lista | countItems:'pendientes_count'}}\n                </ion-label> -->\n            </ion-label>\n\n\n\n            <ion-note *ngIf=\"tabName=='tab1'\" slot=\"end\" color=\"tertiary\">\n                {{ lista | countItems:'completadas_count'}} de {{lista.items.length}} items\n            </ion-note>\n            <ion-note *ngIf=\"tabName=='tab2'\" slot=\"end\" color=\"tertiary\">\n                Fecha Fin: {{lista.fechaCompletada | date: 'dd/MM/yyyy' }}\n            </ion-note>\n\n        </ion-item>\n\n        <ion-item-options side=\"end\">\n            <ion-item-option color=\"danger\" (click)=\"eliminarLista(lista)\">\n                <!-- <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon> -->\n                <ion-icon slot=\"start\" name=\"trash-outline\"></ion-icon>\n                delete\n            </ion-item-option>\n        </ion-item-options>\n\n        <ion-item-options side=\"start\">\n            <ion-item-option color=\"warning\" (click)=\"editarLista(lista)\">\n                <ion-icon name=\"create-outline\"></ion-icon>\n                edit\n            </ion-item-option>\n        </ion-item-options>\n\n    </ion-item-sliding>\n\n</ion-list>\n\n\n<!-- <ion-label>Label 1</ion-label>\n<ion-label>Label 2</ion-label>\n<ion-label>Label 3</ion-label> -->");

/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _listas_listas_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listas/listas.component */ "./src/app/components/listas/listas.component.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");






let ComponentsModule = class ComponentsModule {
};
ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _listas_listas_component__WEBPACK_IMPORTED_MODULE_3__["ListasComponent"]
        ],
        exports: [
            _listas_listas_component__WEBPACK_IMPORTED_MODULE_3__["ListasComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["PipesModule"]
        ]
    })
], ComponentsModule);



/***/ }),

/***/ "./src/app/components/listas/listas.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/listas/listas.component.ts ***!
  \*******************************************************/
/*! exports provided: ListasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListasComponent", function() { return ListasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/todo.service */ "./src/app/services/todo.service.ts");





//viewchild
//https://fireship.io/snippets/using-viewchild-in-ionic-4-to-call-component-methods/
let ListasComponent = class ListasComponent {
    constructor(todoService, router, alertController) {
        this.todoService = todoService;
        this.router = router;
        this.alertController = alertController;
        // console.log(this.tabName);
    }
    ngOnInit() { }
    verLista(lista) {
        // console.log(lista)
        this.router.navigateByUrl(`tabs/${this.tabName}/agregar/${lista.id}`);
    }
    eliminarLista(lista) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let alert = yield this.alertController.create({
                header: 'Confirmar',
                message: `Seguro que desea eliminar la lista: ${lista.titulo}`,
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        handler: () => {
                            this.ionListViewChild.closeSlidingItems();
                        }
                    },
                    {
                        text: 'Eliminar',
                        handler: () => {
                            this.todoService.eliminarLista(lista);
                            this.ionListViewChild.closeSlidingItems();
                        }
                    }
                ]
            });
            alert.present();
        });
    }
    editarLista(lista) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //this.ionList.closeSlidingItems();
            const alert = yield this.alertController.create({
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
                        handler: () => {
                            this.ionListViewChild.closeSlidingItems();
                        }
                    },
                    {
                        text: 'Guardar',
                        handler: (data) => {
                            // console.log(data);
                            if (data.titulo.length === 0) {
                                return;
                            }
                            this.todoService.editarLista(lista.id, data.titulo);
                            this.ionListViewChild.closeSlidingItems();
                        }
                    }
                ]
            });
            alert.present();
        });
    }
    //@ViewChild(IonList) ionList:IonList;
    // @ViewChildren(IonLabel) ionLabels: IonLabel[];
    viewChilds() {
        // console.log(this.ionList);
        // console.log(this.ionLabels);
    }
};
ListasComponent.ctorParameters = () => [
    { type: src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_4__["TodoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
ListasComponent.propDecorators = {
    tabName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    ionListViewChild: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonList"], { static: true },] }]
};
ListasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-listas',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./listas.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/listas/listas.component.html")).default,
    })
], ListasComponent);



/***/ }),

/***/ "./src/app/models/lista.model.ts":
/*!***************************************!*\
  !*** ./src/app/models/lista.model.ts ***!
  \***************************************/
/*! exports provided: Lista */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lista", function() { return Lista; });
class Lista {
    constructor(titulo) {
        this.id = new Date().getTime();
        this.titulo = titulo;
        this.fechaCreacion = new Date();
        this.fechaCompletada = null;
        this.terminada = false;
        this.items = [];
    }
}


/***/ }),

/***/ "./src/app/pipes/count-items.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/pipes/count-items.pipe.ts ***!
  \*******************************************/
/*! exports provided: CountItemsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountItemsPipe", function() { return CountItemsPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let CountItemsPipe = class CountItemsPipe {
    roundToTwo(num) {
        return Math.round((num + Number.EPSILON) * 100) / 100;
    }
    transform(pLista, estado = null) {
        const total = pLista.items.length;
        const pendientes = pLista.items.filter(x => x.completado === false).length;
        const completadas = pLista.items.filter(x => x.completado === true).length;
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
        }
        // if(tabName=='tab1'){
        //     return pLista.items.filter(x => x.completado === false).length;
        // }
        // else if(tabName=='tab2'){
        //     return pLista.items.filter(x => x.completado === true).length;
        // }
        // else{
        //     return pLista.items.length
        // }
    }
};
CountItemsPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'countItems',
        pure: false
    })
], CountItemsPipe);



/***/ }),

/***/ "./src/app/pipes/filtro.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/filtro.pipe.ts ***!
  \**************************************/
/*! exports provided: FiltroPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltroPipe", function() { return FiltroPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let FiltroPipe = class FiltroPipe {
    transform(pLista, tabName) {
        // console.log(pLista,tabName);
        // return pLista
        if (tabName == 'tab1') {
            return pLista.filter(x => x.terminada === false);
        }
        else if (tabName == 'tab2') {
            return pLista.filter(x => x.terminada === true);
        }
        else {
            return pLista;
        }
    }
};
FiltroPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filtro',
        pure: false //esto es para activar la deteccion de cambios cuando se realizan en otra pages
        //por defecto es true, osea que si la lista que pasa por el pipe es modificada en otra
        //pages cuando retorne aqui(sin recargar) el pipe no 'filtrara' de nuevo la lista
    })
], FiltroPipe);



/***/ }),

/***/ "./src/app/pipes/pipes.module.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _filtro_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filtro.pipe */ "./src/app/pipes/filtro.pipe.ts");
/* harmony import */ var _count_items_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./count-items.pipe */ "./src/app/pipes/count-items.pipe.ts");




// import { CommonModule } from '@angular/common';
let PipesModule = class PipesModule {
};
PipesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_filtro_pipe__WEBPACK_IMPORTED_MODULE_2__["FiltroPipe"], _count_items_pipe__WEBPACK_IMPORTED_MODULE_3__["CountItemsPipe"]],
        exports: [
            _filtro_pipe__WEBPACK_IMPORTED_MODULE_2__["FiltroPipe"],
            _count_items_pipe__WEBPACK_IMPORTED_MODULE_3__["CountItemsPipe"]
        ],
        imports: [
        // CommonModule //no vamos a usar ngIf,ngFor asique no lo importamos
        ]
    })
], PipesModule);



/***/ }),

/***/ "./src/app/services/todo.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/todo.service.ts ***!
  \******************************************/
/*! exports provided: TodoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoService", function() { return TodoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_lista_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/lista.model */ "./src/app/models/lista.model.ts");



let TodoService = class TodoService {
    constructor() {
        // console.log('constructor TodoService')
        this.listas = [];
        // const lista1 = new Lista('estudiar tech backend');
        // const lista2 = new Lista('estudiar tech fronted');
        // this.listas.push(lista1,lista2);
        // console.log(this.listas);
        this.cargarStorage();
    }
    guardarStorage() {
        localStorage.setItem('ionic-app-data', JSON.stringify(this.listas));
    }
    cargarStorage() {
        if (localStorage.getItem('ionic-app-data'))
            this.listas = JSON.parse(localStorage.getItem('ionic-app-data'));
    }
    crearLista(titulo) {
        const nuevaLista = new _models_lista_model__WEBPACK_IMPORTED_MODULE_2__["Lista"](titulo);
        this.listas.push(nuevaLista);
        this.guardarStorage();
        return nuevaLista.id;
    }
    obtenerLista(id) {
        id = Number(id);
        let listaSearch = this.listas.find(x => x.id === id);
        return listaSearch;
    }
    eliminarLista(lista) {
        this.listas = this.listas.filter(x => x.id != lista.id);
        this.guardarStorage();
    }
    editarLista(id, titulo) {
        // console.log(id,titulo);
        let listaSearch = this.listas.find(x => x.id === id);
        // console.log(listaSearch)
        listaSearch.titulo = titulo;
        // console.log(listaSearch)
        this.guardarStorage();
    }
};
TodoService.ctorParameters = () => [];
TodoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TodoService);



/***/ })

}]);
//# sourceMappingURL=default~tab1-tab1-module~tab2-tab2-module-es2015.js.map