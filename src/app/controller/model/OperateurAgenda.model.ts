import {OperateurDto} from './Operateur.model';
import {AgendaDto} from './Agenda.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class OperateurAgendaDto  extends BaseDto{

    public id: number;
    public heureDebut: string;
    public heureFin: string;
    public agenda: AgendaDto ;
    public operateur: OperateurDto ;

}
