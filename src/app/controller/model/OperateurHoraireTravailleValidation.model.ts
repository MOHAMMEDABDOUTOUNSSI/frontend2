import {HoraireTravailleValidationDto} from './HoraireTravailleValidation.model';
import {OperateurDto} from './Operateur.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class OperateurHoraireTravailleValidationDto  extends BaseDto{

    public id: number;
    public heureDebut: string;
    public heureFin: string;
    public horaireTravailleValidation: HoraireTravailleValidationDto ;
    public operateur: OperateurDto ;

}
