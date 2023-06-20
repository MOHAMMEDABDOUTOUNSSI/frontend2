import {HopitalCriteria} from './HopitalCriteria.model';
import {PrestationCriteria} from './PrestationCriteria.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class UniteAdministrativeCriteria  extends   BaseCriteria  {

    public id: number;
    public libelle: string;
    public libelleLike: string;
    public code: string;
    public codeLike: string;
    public description: string;
    public descriptionLike: string;
  public hopital: HopitalCriteria ;
  public hopitals: Array<HopitalCriteria> ;
      public prestations: Array<PrestationCriteria>;

}
