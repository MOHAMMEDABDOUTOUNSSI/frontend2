import {HopitalDto} from './Hopital.model';
import {PrestationDto} from './Prestation.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class UniteAdministrativeDto  extends BaseDto{

    public id: number;
    public libelle: string;
    public code: string;
    public description: string;
    public hopital: HopitalDto ;
     public prestations: Array<PrestationDto>;

}
