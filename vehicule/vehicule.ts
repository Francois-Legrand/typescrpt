import { Moteur } from "../moteur/moteur";
import { MoteurElectrique } from "../moteurElectrique/moteurElectrique";
import { Moto } from "../moto/moto";
import { StationDeRavitaillement } from "../stationDeRavitaillement/stationDeRavitaillement";

export abstract class Vehicule{
    private marque_ : string;
    private couleur_ : string;
    private prix_ : number;
    private moteur_ : Moteur;
    private reservoir_ : number;

    constructor(reservoir : number, marque : string, couleur : string, prix : number, moteur : Moteur){
        this.marque_ = marque;
        this.couleur_ = couleur;
        this.prix_ = prix;
        this.moteur_ = moteur;
        this.reservoir_ = reservoir;
    }
    faireLePlein(s : StationDeRavitaillement){
        if(this.moteur.nom === "moteurEssence"){
            console.log(`le pleins est fait cela vous a couté ${s.prixEssence}$`);
        }
        
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
    get reservoir(){
        return this.reservoir_;
    }
    set reservoir(reservoir : number){
        this.reservoir = reservoir;
    }
}