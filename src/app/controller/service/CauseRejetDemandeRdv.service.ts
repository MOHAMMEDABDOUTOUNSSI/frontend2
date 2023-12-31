import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {CauseRejetDemandeRdvDto} from '../model/CauseRejetDemandeRdv.model';
import {CauseRejetDemandeRdvCriteria} from '../criteria/CauseRejetDemandeRdvCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class CauseRejetDemandeRdvService extends AbstractService<CauseRejetDemandeRdvDto, CauseRejetDemandeRdvCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/causeRejetDemandeRdv/');
    }

    public constrcutDto(): CauseRejetDemandeRdvDto {
        return new CauseRejetDemandeRdvDto();
    }

    public constrcutCriteria(): CauseRejetDemandeRdvCriteria {
        return new CauseRejetDemandeRdvCriteria();
    }
}
