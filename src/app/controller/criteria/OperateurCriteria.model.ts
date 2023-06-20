import {OperateurAgendaCriteria} from './OperateurAgendaCriteria.model';
import {OperateurHoraireTravailleValidationCriteria} from './OperateurHoraireTravailleValidationCriteria.model';
import {OperateurUniteAdministrativeCriteria} from './OperateurUniteAdministrativeCriteria.model';
import {OperateurQuotaCriteria} from './OperateurQuotaCriteria.model';
import {CelluleValidationCriteria} from './CelluleValidationCriteria.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class OperateurCriteria  extends   BaseCriteria  {

    public id: number;
    public cin: string;
    public cinLike: string;
    public dateNaissance: Date;
    public dateNaissanceFrom: Date;
    public dateNaissanceTo: Date;
    public passport: string;
    public passportLike: string;
  public celluleValidation: CelluleValidationCriteria ;
  public celluleValidations: Array<CelluleValidationCriteria> ;
      public operateurAgendas: Array<OperateurAgendaCriteria>;
      public operateurHoraireTravailleValidations: Array<OperateurHoraireTravailleValidationCriteria>;
      public operateurUniteAdministratives: Array<OperateurUniteAdministrativeCriteria>;
      public operateurQuotas: Array<OperateurQuotaCriteria>;

}
