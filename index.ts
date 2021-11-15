import { Camion } from "./camion/camion";
import { Moteur } from "./moteur/moteur";
import { moteurDiesel } from "./moteurDiesel/moteurDiesel";
import { MoteurElectrique } from "./moteurElectrique/moteurElectrique";
import { MoteurEssence } from "./moteurEssence/moteurEssence";
import { Moto } from "./moto/moto";
import { StationDeRavitaillement } from "./stationDeRavitaillement/stationDeRavitaillement";
import { Vehicule } from "./vehicule/vehicule";
import { Voiture } from "./voiture/voiture";

console.log("hello");

let station : StationDeRavitaillement = new StationDeRavitaillement(10,20,30);


let maMoto : Vehicule = new Moto(2,0,"suzuki","rouge",50000, new MoteurEssence(400, 0, "moteurEssence"));

console.log(maMoto);
maMoto.faireLePlein(station);
