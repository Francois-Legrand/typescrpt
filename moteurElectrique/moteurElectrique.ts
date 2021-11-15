import { Moteur } from "../moteur/moteur";

export class MoteurElectrique extends Moteur{

    constructor(vitesse : number, kilometrage : number, nom : string){
        super(vitesse, kilometrage, nom);
    }

    demarrer(){
        console.log("fffffffff...");
     };
}