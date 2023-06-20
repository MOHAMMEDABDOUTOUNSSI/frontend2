import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class HoraireTravailleValidationCriteria  extends   BaseCriteria  {

    public id: number;
    public libelle: string;
    public libelleLike: string;
    public daysOfWeek: string;
    public daysOfWeekLike: string;
    public month: string;
    public monthLike: string;
    public heureDebut: string;
    public heureDebutLike: string;
    public heureFin: string;
    public heureFinLike: string;

}
