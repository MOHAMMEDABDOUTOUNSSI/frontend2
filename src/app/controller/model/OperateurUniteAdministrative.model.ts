import {UniteAdministrativeDto} from './UniteAdministrative.model';
import {OperateurDto} from './Operateur.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class OperateurUniteAdministrativeDto  extends BaseDto{

    public id: number;
    public uniteAdministrative: UniteAdministrativeDto ;
    public operateur: OperateurDto ;

}
