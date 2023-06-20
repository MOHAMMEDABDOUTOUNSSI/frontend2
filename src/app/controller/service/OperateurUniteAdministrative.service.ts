import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {OperateurUniteAdministrativeDto} from '../model/OperateurUniteAdministrative.model';
import {OperateurUniteAdministrativeCriteria} from '../criteria/OperateurUniteAdministrativeCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {UniteAdministrativeDto} from '../model/UniteAdministrative.model';
import {OperateurDto} from '../model/Operateur.model';

@Injectable({
  providedIn: 'root'
})
export class OperateurUniteAdministrativeService extends AbstractService<OperateurUniteAdministrativeDto, OperateurUniteAdministrativeCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/operateurUniteAdministrative/');
    }

    public constrcutDto(): OperateurUniteAdministrativeDto {
        return new OperateurUniteAdministrativeDto();
    }

    public constrcutCriteria(): OperateurUniteAdministrativeCriteria {
        return new OperateurUniteAdministrativeCriteria();
    }
}
