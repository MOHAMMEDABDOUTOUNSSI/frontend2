import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class JourFerieCriteria  extends   BaseCriteria  {

    public id: number;
    public code: string;
    public codeLike: string;
    public libelle: string;
    public libelleLike: string;
    public dateDebut: Date;
    public dateDebutFrom: Date;
    public dateDebutTo: Date;
    public dateFin: Date;
    public dateFinFrom: Date;
    public dateFinTo: Date;
     public nombreJoursTotal: number;
     public nombreJoursTotalMin: number;
     public nombreJoursTotalMax: number;

}
