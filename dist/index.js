"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var camion_1 = require("./camion/camion");
var moteurDiesel_1 = require("./moteurDiesel/moteurDiesel");
var moteurElectrique_1 = require("./moteurElectrique/moteurElectrique");
var moteurEssence_1 = require("./moteurEssence/moteurEssence");
var moto_1 = require("./moto/moto");
var voiture_1 = require("./voiture/voiture");
console.log("hello");
var monCamion = new camion_1.Camion(6, 0, "Peugeot", "blanc", 70000, new moteurDiesel_1.moteurDiesel("moteur diesel", 150, 0));
var monAuto = new voiture_1.Voiture(4, 0, "Fiat", "vert", 15000, new moteurElectrique_1.MoteurElectrique("moteur electrique", 200, 0));
var maMoto = new moto_1.Moto(2, 0, "suzuki", "rouge", 50000, new moteurEssence_1.MoteurEssence("moteur à essence", 400, 0));
console.log(monAuto);
monAuto.moteur.demarrer();
//# sourceMappingURL=index.js.map