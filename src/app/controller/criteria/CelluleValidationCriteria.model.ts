import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class CelluleValidationCriteria  extends   BaseCriteria  {

    public id: number;
    public libelle: string;
    public libelleLike: string;
    public code: string;
    public codeLike: string;
    public description: string;
    public descriptionLike: string;
    public email: string;
    public emailLike: string;
    public phone: string;
    public phoneLike: string;

}
