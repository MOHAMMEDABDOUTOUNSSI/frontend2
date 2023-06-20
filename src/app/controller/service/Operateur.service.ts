import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {OperateurDto} from '../model/Operateur.model';
import {OperateurCriteria} from '../criteria/OperateurCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {OperateurAgendaDto} from '../model/OperateurAgenda.model';
import {OperateurHoraireTravailleValidationDto} from '../model/OperateurHoraireTravailleValidation.model';
import {OperateurUniteAdministrativeDto} from '../model/OperateurUniteAdministrative.model';
import {OperateurQuotaDto} from '../model/OperateurQuota.model';
import {CelluleValidationDto} from '../model/CelluleValidation.model';

@Injectable({
  providedIn: 'root'
})
export class OperateurService extends AbstractService<OperateurDto, OperateurCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/operateur/');
    }

    public constrcutDto(): OperateurDto {
        return new OperateurDto();
    }

    public constrcutCriteria(): OperateurCriteria {
        return new OperateurCriteria();
    }
}
