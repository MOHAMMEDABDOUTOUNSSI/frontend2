import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {PrestationDto} from '../model/Prestation.model';
import {PrestationCriteria} from '../criteria/PrestationCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {UniteAdministrativeDto} from '../model/UniteAdministrative.model';
import {TypePrestationDto} from '../model/TypePrestation.model';

@Injectable({
  providedIn: 'root'
})
export class PrestationService extends AbstractService<PrestationDto, PrestationCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/prestation/');
    }

    public constrcutDto(): PrestationDto {
        return new PrestationDto();
    }

    public constrcutCriteria(): PrestationCriteria {
        return new PrestationCriteria();
    }
}
