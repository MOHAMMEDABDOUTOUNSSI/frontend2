import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {CentreHospitalierUniversitaireDto} from '../model/CentreHospitalierUniversitaire.model';
import {CentreHospitalierUniversitaireCriteria} from '../criteria/CentreHospitalierUniversitaireCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {HopitalDto} from '../model/Hopital.model';

@Injectable({
  providedIn: 'root'
})
export class CentreHospitalierUniversitaireService extends AbstractService<CentreHospitalierUniversitaireDto, CentreHospitalierUniversitaireCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/centreHospitalierUniversitaire/');
    }

    public constrcutDto(): CentreHospitalierUniversitaireDto {
        return new CentreHospitalierUniversitaireDto();
    }

    public constrcutCriteria(): CentreHospitalierUniversitaireCriteria {
        return new CentreHospitalierUniversitaireCriteria();
    }
}
