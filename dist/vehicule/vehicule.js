"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicule = void 0;
var Vehicule = /** @class */ (function () {
    function Vehicule(reservoir, marque, couleur, prix, moteur) {
        this.marque_ = marque;
        this.couleur_ = couleur;
        this.prix_ = prix;
        this.moteur_ = moteur;
        this.reservoir_ = reservoir;
    }
    Object.defineProperty(Vehicule.prototype, "marque", {
        get: function () {
            return this.marque_;
        },
        set: function (marque) {
            this.marque_ = marque;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicule.prototype, "couleur", {
        get: function () {
            return this.couleur_;
        },
        set: function (couleur) {
            this.couleur_ = couleur;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicule.prototype, "prix", {
        get: function () {
            return this.prix_;
        },
        set: function (prix) {
            this.prix_ = prix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicule.prototype, "moteur", {
        get: function () {
            return this.moteur_;
        },
        set: function (moteur) {
            this.moteur_ = moteur;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicule.prototype, "reservoir", {
        get: function () {
            return this.reservoir_;
        },
        set: function (reservoir) {
            this.reservoir = reservoir;
        },
        enumerable: false,
        configurable: true
    });
    return Vehicule;
}());
exports.Vehicule = Vehicule;
//# sourceMappingURL=vehicule.js.map