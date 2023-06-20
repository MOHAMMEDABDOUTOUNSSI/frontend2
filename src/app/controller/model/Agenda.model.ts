import {UniteAdministrativeDto} from './UniteAdministrative.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class AgendaDto  extends BaseDto{

    public id: number;
    public libelle: string;
    public daysOfMonth: string;
   public month: number;
   public annee: number;
    public monthMax: string ;
    public monthMin: string ;
    public anneeMax: string ;
    public anneeMin: string ;
    public uniteAdministrative: UniteAdministrativeDto ;

}
