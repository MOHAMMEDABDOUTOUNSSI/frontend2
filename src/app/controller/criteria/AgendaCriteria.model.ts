import {UniteAdministrativeCriteria} from './UniteAdministrativeCriteria.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class AgendaCriteria  extends   BaseCriteria  {

    public id: number;
    public libelle: string;
    public libelleLike: string;
    public daysOfMonth: string;
    public daysOfMonthLike: string;
     public month: number;
     public monthMin: number;
     public monthMax: number;
     public annee: number;
     public anneeMin: number;
     public anneeMax: number;
  public uniteAdministrative: UniteAdministrativeCriteria ;
  public uniteAdministratives: Array<UniteAdministrativeCriteria> ;

}
