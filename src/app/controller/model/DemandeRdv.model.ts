import {CauseRejetDemandeRdvDto} from './CauseRejetDemandeRdv.model';
import {TemplateEmailConfirmationDto} from './TemplateEmailConfirmation.model';
import {CentreHospitalierUniversitaireDto} from './CentreHospitalierUniversitaire.model';
import {PatientDto} from './Patient.model';
import {HopitalDto} from './Hopital.model';
import {UniteAdministrativeDto} from './UniteAdministrative.model';
import {OperateurDto} from './Operateur.model';
import {StatusRdvDto} from './StatusRdv.model';
import {PrestationDto} from './Prestation.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class DemandeRdvDto  extends BaseDto{

    public id: number;
    public reference: string;
    public ipp: string;
    public nom: string;
    public prenom: string;
    public adresse: string;
    public email: string;
    public cin: string;
    public codeRamed: string;
    public observation: string;
    public ficheReferencePath: string;
   public dateDemandeRdv: Date;
   public datePrevu: Date;
   public dateEffective: Date;
   public dateValidation: Date;
   public dateRejet: Date;
   public nombreReccurenceTotal: number;
   public nombreReccurenceValide: number;
   public nombreReccurenceRejet: number;
    public dateDemandeRdvMax: string ;
    public dateDemandeRdvMin: string ;
    public datePrevuMax: string ;
    public datePrevuMin: string ;
    public dateEffectiveMax: string ;
    public dateEffectiveMin: string ;
    public dateValidationMax: string ;
    public dateValidationMin: string ;
    public dateRejetMax: string ;
    public dateRejetMin: string ;
    public nombreReccurenceTotalMax: string ;
    public nombreReccurenceTotalMin: string ;
    public nombreReccurenceValideMax: string ;
    public nombreReccurenceValideMin: string ;
    public nombreReccurenceRejetMax: string ;
    public nombreReccurenceRejetMin: string ;
    public patient: PatientDto ;
    public operateur: OperateurDto ;
    public centreHospitalierUniversitaire: CentreHospitalierUniversitaireDto ;
    public hopital: HopitalDto ;
    public uniteAdministrative: UniteAdministrativeDto ;
    public prestation: PrestationDto ;
    public statusRdv: StatusRdvDto ;
    public causeRejetDemandeRdv: CauseRejetDemandeRdvDto ;
    public templateEmailConfirmation: TemplateEmailConfirmationDto ;

}
