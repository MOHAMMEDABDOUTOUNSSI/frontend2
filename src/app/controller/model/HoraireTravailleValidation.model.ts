import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class HoraireTravailleValidationDto  extends BaseDto{

    public id: number;
    public libelle: string;
    public daysOfWeek: string;
    public month: string;
    public heureDebut: string;
    public heureFin: string;

}
