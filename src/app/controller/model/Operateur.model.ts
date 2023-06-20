import {OperateurAgendaDto} from './OperateurAgenda.model';
import {OperateurHoraireTravailleValidationDto} from './OperateurHoraireTravailleValidation.model';
import {OperateurUniteAdministrativeDto} from './OperateurUniteAdministrative.model';
import {OperateurQuotaDto} from './OperateurQuota.model';
import {CelluleValidationDto} from './CelluleValidation.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class OperateurDto  extends BaseDto{

    public id: number;
    public cin: string;
   public dateNaissance: Date;
    public passport: string;
    public dateNaissanceMax: string ;
    public dateNaissanceMin: string ;
    public celluleValidation: CelluleValidationDto ;
     public operateurAgendas: Array<OperateurAgendaDto>;
     public operateurHoraireTravailleValidations: Array<OperateurHoraireTravailleValidationDto>;
     public operateurUniteAdministratives: Array<OperateurUniteAdministrativeDto>;
     public operateurQuotas: Array<OperateurQuotaDto>;

}
