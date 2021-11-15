import { Moteur } from "../moteur/moteur";

export class MoteurEssence extends Moteur{
    private nom_ : string;

    constructor(nom : string, vitesse : number, kilometrage : number){
        super(vitesse, kilometrage)
        this.nom_ = nom;
    }

    get nom(){
        return this.nom_;
    }
    set nom(nom : string){
        this.nom_ = nom;
    }
}