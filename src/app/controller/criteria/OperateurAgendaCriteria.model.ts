import {OperateurCriteria} from './OperateurCriteria.model';
import {AgendaCriteria} from './AgendaCriteria.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class OperateurAgendaCriteria  extends   BaseCriteria  {

    public id: number;
    public heureDebut: string;
    public heureDebutLike: string;
    public heureFin: string;
    public heureFinLike: string;
  public agenda: AgendaCriteria ;
  public agendas: Array<AgendaCriteria> ;
  public operateur: OperateurCriteria ;
  public operateurs: Array<OperateurCriteria> ;

}
