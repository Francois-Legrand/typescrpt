"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moteur = void 0;
var Moteur = /** @class */ (function () {
    function Moteur(vitesse, kilometrage) {
        this.kilometrage_ = kilometrage;
        this.vitesse_ = vitesse;
    }
    Object.defineProperty(Moteur.prototype, "vitesse", {
        get: function () {
            return this.vitesse_;
        },
        set: function (vitesse) {
            this.vitesse_ = vitesse;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Moteur.prototype, "kilometrage", {
        get: function () {
            return this.kilometrage_;
        },
        set: function (kilometrage) {
            this.kilometrage_ = kilometrage;
        },
        enumerable: false,
        configurable: true
    });
    return Moteur;
}());
exports.Moteur = Moteur;
//# sourceMappingURL=moteur.js.map