import { Camion } from "./camion/camion";
import { Moteur } from "./moteur/moteur";
import { moteurDiesel } from "./moteurDiesel/moteurDiesel";
import { MoteurElectrique } from "./moteurElectrique/moteurElectrique";
import { MoteurEssence } from "./moteurEssence/moteurEssence";
import { Moto } from "./moto/moto";
import { Vehicule } from "./vehicule/vehicule";
import { Voiture } from "./voiture/voiture";

console.log("hello");


let monCamion : Vehicule = new Camion(6,0,"Peugeot","blanc",70000, new moteurDiesel("moteur diesel", 150, 0));

let monAuto : Vehicule = new Voiture(4,0,"Fiat","vert",15000, new MoteurElectrique("moteur electrique", 200, 0));

let maMoto : Vehicule = new Moto(2,0,"suzuki","rouge",50000, new MoteurEssence("moteur à essence", 400, 0));

console.log(maMoto);
maMoto.reservoi;
