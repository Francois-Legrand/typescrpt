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
exports.Camion = void 0;
var vehicule_1 = require("../vehicule/vehicule");
var Camion = /** @class */ (function (_super) {
    __extends(Camion, _super);
    function Camion(nbRoue, reservoir, marque, couleur, prix, moteur) {
        var _this = _super.call(this, reservoir, marque, couleur, prix, moteur) || this;
        _this.nbRoue_ = nbRoue;
        return _this;
    }
    Object.defineProperty(Camion.prototype, "nbRoue", {
        get: function () {
            return this.nbRoue_;
        },
        set: function (nbRoue) {
            this.nbRoue = nbRoue;
        },
        enumerable: false,
        configurable: true
    });
    return Camion;
}(vehicule_1.Vehicule));
exports.Camion = Camion;
//# sourceMappingURL=camion.js.map