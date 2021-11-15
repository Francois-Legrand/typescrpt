export abstract class Moteur {
    private vitesse_ : number;
    private kilometrage_ : number;

    constructor(vitesse : number, kilometrage : number){
        this.kilometrage_ = kilometrage;
        this.vitesse_ = vitesse;
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
    
}