import { Moteur } from "../moteur/moteur";

export class Vehicule{
    private marque_ : string;
    private couleur_ : string;
    private prix_ : number;
    private moteur_ : Moteur;

    constructor(marque : string, couleur : string, prix : number, moteur : Moteur){
        this.marque_ = marque;
        this.couleur_ = couleur;
        this.prix_ = prix;
        this.moteur_ = moteur;
    }

    get marque(){
        return this.marque_;
    }
    set marque(marque : string){
        this.marque_ = marque;
    }
    get couleur(){
        return this.couleur_;
    }
    set couleur(couleur : string){
        this.couleur_ = couleur;
    }
    get prix(){
        return this.prix_;
    }
    set prix(prix : number){
        this.prix_ = prix;
    }
    get moteur(){
        return this.moteur_;
    }
    set moteur(moteur : Moteur){
        this.moteur_ = moteur;
    }
}