import {CentreHospitalierUniversitaireDto} from './CentreHospitalierUniversitaire.model';
import {UniteAdministrativeDto} from './UniteAdministrative.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class HopitalDto  extends BaseDto{

    public id: number;
    public libelle: string;
    public code: string;
    public description: string;
    public centreHospitalierUniversitaire: CentreHospitalierUniversitaireDto ;
     public uniteAdministratives: Array<UniteAdministrativeDto>;

}
