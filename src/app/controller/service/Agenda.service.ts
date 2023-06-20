import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {AgendaDto} from '../model/Agenda.model';
import {AgendaCriteria} from '../criteria/AgendaCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {UniteAdministrativeDto} from '../model/UniteAdministrative.model';

@Injectable({
  providedIn: 'root'
})
export class AgendaService extends AbstractService<AgendaDto, AgendaCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/agenda/');
    }

    public constrcutDto(): AgendaDto {
        return new AgendaDto();
    }

    public constrcutCriteria(): AgendaCriteria {
        return new AgendaCriteria();
    }
}
