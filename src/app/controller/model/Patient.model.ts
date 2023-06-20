import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class PatientDto  extends BaseDto{

    public id: number;
    public ipp: string;
    public adresse: string;
    public email: string;
    public cin: string;
    public codeRamed: string;

}
