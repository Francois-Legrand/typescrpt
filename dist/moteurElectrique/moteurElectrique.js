"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoteurElectrique = void 0;
var moteur_1 = require("../moteur/moteur");
var MoteurElectrique = /** @class */ (function (_super) {
    __extends(MoteurElectrique, _super);
    function MoteurElectrique(nom, vitesse, kilometrage) {
        var _this = _super.call(this, vitesse, kilometrage) || this;
        _this.nom_ = nom;
        return _this;
    }
    Object.defineProperty(MoteurElectrique.prototype, "nom", {
        get: function () {
            return this.nom_;
        },
        set: function (nom) {
            this.nom_ = nom;
        },
        enumerable: false,
        configurable: true
    });
    MoteurElectrique.prototype.demarrer = function () {
        console.log("fffffffff...");
    };
    ;
    return MoteurElectrique;
}(moteur_1.Moteur));
exports.MoteurElectrique = MoteurElectrique;
//# sourceMappingURL=moteurElectrique.js.map