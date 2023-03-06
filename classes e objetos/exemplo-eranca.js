var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
    Funcionario.prototype.pagarImporto = function (taxa) {
        if (taxa === void 0) { taxa = 7.5; }
        console.log("Pagando ".concat((this.salario * taxa) / 100, " de imposto"));
    };
    return Funcionario;
}());
var Secretario = /** @class */ (function (_super) {
    __extends(Secretario, _super);
    function Secretario() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Secretario;
}(Funcionario));
var Executivo = /** @class */ (function (_super) {
    __extends(Executivo, _super);
    function Executivo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Executivo.prototype.pagarImporto = function (taxa) {
        if (taxa === void 0) { taxa = 27.5; }
        console.log("Executivo paga mais!");
        _super.prototype.pagarImporto.call(this, taxa);
    };
    return Executivo;
}(Funcionario));
var sarah = new Secretario("Sarah", 2000);
sarah.pagarImporto();
var karen = new Funcionario("Warlley", 1500);
karen.pagarImporto();
var jorge = new Executivo("Jorge", 30000);
jorge.pagarImporto();
