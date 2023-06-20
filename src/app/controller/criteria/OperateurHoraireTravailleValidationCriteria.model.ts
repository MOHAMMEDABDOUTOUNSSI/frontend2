import {HoraireTravailleValidationCriteria} from './HoraireTravailleValidationCriteria.model';
import {OperateurCriteria} from './OperateurCriteria.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class OperateurHoraireTravailleValidationCriteria  extends   BaseCriteria  {

    public id: number;
    public heureDebut: string;
    public heureDebutLike: string;
    public heureFin: string;
    public heureFinLike: string;
  public horaireTravailleValidation: HoraireTravailleValidationCriteria ;
  public horaireTravailleValidations: Array<HoraireTravailleValidationCriteria> ;
  public operateur: OperateurCriteria ;
  public operateurs: Array<OperateurCriteria> ;

}
