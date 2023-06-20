import {OperateurCriteria} from './OperateurCriteria.model';
import {PrestationCriteria} from './PrestationCriteria.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class OperateurQuotaCriteria  extends   BaseCriteria  {

    public id: number;
     public nombreMaxRdv: number;
     public nombreMaxRdvMin: number;
     public nombreMaxRdvMax: number;
  public operateur: OperateurCriteria ;
  public operateurs: Array<OperateurCriteria> ;
  public prestation: PrestationCriteria ;
  public prestations: Array<PrestationCriteria> ;

}
