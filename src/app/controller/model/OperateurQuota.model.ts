import {OperateurDto} from './Operateur.model';
import {PrestationDto} from './Prestation.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class OperateurQuotaDto  extends BaseDto{

    public id: number;
   public nombreMaxRdv: number;
    public nombreMaxRdvMax: string ;
    public nombreMaxRdvMin: string ;
    public operateur: OperateurDto ;
    public prestation: PrestationDto ;

}
