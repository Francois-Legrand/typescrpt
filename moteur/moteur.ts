export abstract class Moteur {
    private vitesse_ : number;
    private kilometrage_ : number;
    private nom_ : string;
    constructor(vitesse : number, kilometrage : number, nom : string){
        this.kilometrage_ = kilometrage;
        this.vitesse_ = vitesse;
        this.nom_ = nom;
    }

    get vitesse(){
        return this.vitesse_;
    }
    set vitesse(vitesse : number){
        this.vitesse_ = vitesse;
    }
    get kilometrage(){
        return this.kilometrage_;
    }
    set kilometrage(kilometrage : number){
        this.kilometrage_ = kilometrage;
    }
    abstract demarrer() : void;

    get nom(){
        return this.nom_;
    }
    set nom(nom : string){
        this.nom_ = nom;
    }
}