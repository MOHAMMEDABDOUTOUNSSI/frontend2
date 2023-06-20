import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class CelluleValidationDto  extends BaseDto{

    public id: number;
    public libelle: string;
    public code: string;
    public description: string;
    public email: string;
    public phone: string;

}
