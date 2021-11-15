"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moteurEssence_1 = require("./moteurEssence/moteurEssence");
var moto_1 = require("./moto/moto");
var stationDeRavitaillement_1 = require("./stationDeRavitaillement/stationDeRavitaillement");
console.log("hello");
var station = new stationDeRavitaillement_1.StationDeRavitaillement(10, 20, 30);
var maMoto = new moto_1.Moto(2, 0, "suzuki", "rouge", 50000, new moteurEssence_1.MoteurEssence(400, 0, "moteurEssence"));
console.log(maMoto);
maMoto.faireLePlein(station);
//# sourceMappingURL=index.js.map