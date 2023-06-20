import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class PatientCriteria  extends   BaseCriteria  {

    public id: number;
    public ipp: string;
    public ippLike: string;
    public adresse: string;
    public adresseLike: string;
    public email: string;
    public emailLike: string;
    public cin: string;
    public cinLike: string;
    public codeRamed: string;
    public codeRamedLike: string;

}
