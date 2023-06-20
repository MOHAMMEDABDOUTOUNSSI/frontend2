import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class JourFerieDto  extends BaseDto{

    public id: number;
    public code: string;
    public libelle: string;
   public dateDebut: Date;
   public dateFin: Date;
   public nombreJoursTotal: number;
    public dateDebutMax: string ;
    public dateDebutMin: string ;
    public dateFinMax: string ;
    public dateFinMin: string ;
    public nombreJoursTotalMax: string ;
    public nombreJoursTotalMin: string ;

}
