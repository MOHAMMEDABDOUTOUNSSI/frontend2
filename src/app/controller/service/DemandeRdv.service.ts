import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {DemandeRdvDto} from '../model/DemandeRdv.model';
import {DemandeRdvCriteria} from '../criteria/DemandeRdvCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {CauseRejetDemandeRdvDto} from '../model/CauseRejetDemandeRdv.model';
import {TemplateEmailConfirmationDto} from '../model/TemplateEmailConfirmation.model';
import {CentreHospitalierUniversitaireDto} from '../model/CentreHospitalierUniversitaire.model';
import {PatientDto} from '../model/Patient.model';
import {HopitalDto} from '../model/Hopital.model';
import {UniteAdministrativeDto} from '../model/UniteAdministrative.model';
import {OperateurDto} from '../model/Operateur.model';
import {StatusRdvDto} from '../model/StatusRdv.model';
import {PrestationDto} from '../model/Prestation.model';

@Injectable({
  providedIn: 'root'
})
export class DemandeRdvService extends AbstractService<DemandeRdvDto, DemandeRdvCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/demandeRdv/');
    }

    public constrcutDto(): DemandeRdvDto {
        return new DemandeRdvDto();
    }

    public constrcutCriteria(): DemandeRdvCriteria {
        return new DemandeRdvCriteria();
    }
}
