import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class TemplateEmailConfirmationDto  extends BaseDto{

    public id: number;
    public libelle: string;
    public objet: string;
    public corps: string;
   public actif: null | boolean;

}
