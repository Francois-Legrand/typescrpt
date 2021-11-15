import { Moteur } from "../moteur/moteur";

export class MoteurEssence extends Moteur{
   

    constructor(vitesse : number, kilometrage : number,nom : string){
        super(vitesse, kilometrage, nom)
        
    }

    demarrer(){
        console.log("broumbroumbroum...");
     };
}