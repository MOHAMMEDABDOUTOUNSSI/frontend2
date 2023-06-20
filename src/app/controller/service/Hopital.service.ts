import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {HopitalDto} from '../model/Hopital.model';
import {HopitalCriteria} from '../criteria/HopitalCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {CentreHospitalierUniversitaireDto} from '../model/CentreHospitalierUniversitaire.model';
import {UniteAdministrativeDto} from '../model/UniteAdministrative.model';

@Injectable({
  providedIn: 'root'
})
export class HopitalService extends AbstractService<HopitalDto, HopitalCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/hopital/');
    }

    public constrcutDto(): HopitalDto {
        return new HopitalDto();
    }

    public constrcutCriteria(): HopitalCriteria {
        return new HopitalCriteria();
    }
}
