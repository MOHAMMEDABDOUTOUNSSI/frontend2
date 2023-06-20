import {UniteAdministrativeCriteria} from './UniteAdministrativeCriteria.model';
import {OperateurCriteria} from './OperateurCriteria.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class OperateurUniteAdministrativeCriteria  extends   BaseCriteria  {

    public id: number;
  public uniteAdministrative: UniteAdministrativeCriteria ;
  public uniteAdministratives: Array<UniteAdministrativeCriteria> ;
  public operateur: OperateurCriteria ;
  public operateurs: Array<OperateurCriteria> ;

}
