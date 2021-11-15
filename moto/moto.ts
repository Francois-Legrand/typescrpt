import { Moteur } from "../moteur/moteur";
import { Vehicule } from "../vehicule/vehicule";

export class Moto extends Vehicule{
    private nbRoue_ : number;

    constructor(nbRoue : number, marque : string, couleur : string, prix : number, moteur : Moteur){
        super(marque, couleur, prix, moteur)
        this.nbRoue_ = nbRoue;
    }

    get nbRoue(){
        return this.nbRoue_;
    }
    set nbRoue(nbRoue : number){
        this.nbRoue = nbRoue;
    }
}