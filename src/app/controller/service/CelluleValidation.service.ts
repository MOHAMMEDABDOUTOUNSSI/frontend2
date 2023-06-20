import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {CelluleValidationDto} from '../model/CelluleValidation.model';
import {CelluleValidationCriteria} from '../criteria/CelluleValidationCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class CelluleValidationService extends AbstractService<CelluleValidationDto, CelluleValidationCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/celluleValidation/');
    }

    public constrcutDto(): CelluleValidationDto {
        return new CelluleValidationDto();
    }

    public constrcutCriteria(): CelluleValidationCriteria {
        return new CelluleValidationCriteria();
    }
}
