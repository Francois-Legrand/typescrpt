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
exports.moteurDiesel = void 0;
var moteur_1 = require("../moteur/moteur");
var moteurDiesel = /** @class */ (function (_super) {
    __extends(moteurDiesel, _super);
    function moteurDiesel(vitesse, kilometrage, nom) {
        return _super.call(this, vitesse, kilometrage, nom) || this;
    }
    moteurDiesel.prototype.demarrer = function () {
        console.log("ploumploumploum...");
    };
    ;
    return moteurDiesel;
}(moteur_1.Moteur));
exports.moteurDiesel = moteurDiesel;
//# sourceMappingURL=moteurDiesel.js.map