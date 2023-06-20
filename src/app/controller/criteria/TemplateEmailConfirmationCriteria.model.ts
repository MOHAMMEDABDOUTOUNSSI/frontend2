import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class TemplateEmailConfirmationCriteria  extends   BaseCriteria  {

    public id: number;
    public libelle: string;
    public libelleLike: string;
    public objet: string;
    public objetLike: string;
    public corps: string;
    public corpsLike: string;
    public actif: null | boolean;

}
