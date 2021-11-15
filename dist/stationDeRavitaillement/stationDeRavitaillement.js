"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StationDeRavitaillement = void 0;
var StationDeRavitaillement = /** @class */ (function () {
    function StationDeRavitaillement(prixEssence, prixElectrique, prixDiesel) {
        this.prixDiesel_ = prixDiesel;
        this.prixElectrique_ = prixElectrique;
        this.prixEssence_ = prixEssence;
    }
    Object.defineProperty(StationDeRavitaillement.prototype, "prixEssence", {
        get: function () {
            return this.prixEssence_;
        },
        set: function (prixEssence) {
            this.prixEssence_ = this.prixEssence;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StationDeRavitaillement.prototype, "prixElectique", {
        get: function () {
            return this.prixElectrique_;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StationDeRavitaillement.prototype, "prixElectrique", {
        set: function (prixElectrique) {
            this.prixElectrique_ = this.prixElectique;
        },
        enumerable: false,
        configurable: true
    });
    return StationDeRavitaillement;
}());
exports.StationDeRavitaillement = StationDeRavitaillement;
//# sourceMappingURL=stationDeRavitaillement.js.map