import {HopitalDto} from './Hopital.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class CentreHospitalierUniversitaireDto  extends BaseDto{

    public id: number;
    public libelle: string;
    public code: string;
    public description: string;
     public hopitals: Array<HopitalDto>;

}
