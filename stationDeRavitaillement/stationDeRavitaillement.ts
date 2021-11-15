import { Vehicule } from "../vehicule/vehicule";

export class StationDeRavitaillement{
   private prixEssence_: number;
   private prixElectrique_ : number;
   private prixDiesel_ : number;

   constructor(prixEssence : number, prixElectrique : number, prixDiesel : number){
       this.prixDiesel_ = prixDiesel;
       this.prixElectrique_ = prixElectrique;
       this.prixEssence_ = prixEssence;
   }

   get prixEssence(){
       return this.prixEssence_;
   }
   set prixEssence(prixEssence : number){
       this.prixEssence_ = this.prixEssence;
   }
   get prixElectique(){
    return this.prixElectrique_;
   }
    set prixElectrique(prixElectrique : number){
    this.prixElectrique_ = this.prixElectique;
    }
}