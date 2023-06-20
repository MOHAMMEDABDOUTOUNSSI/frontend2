import {UniteAdministrativeDto} from './UniteAdministrative.model';
import {TypePrestationDto} from './TypePrestation.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class PrestationDto  extends BaseDto{

    public id: number;
    public libelle: string;
    public code: string;
   public dureeEnMiniute: number;
    public dureeEnMiniuteMax: string ;
    public dureeEnMiniuteMin: string ;
    public typePrestation: TypePrestationDto ;
    public uniteAdministrative: UniteAdministrativeDto ;

}
