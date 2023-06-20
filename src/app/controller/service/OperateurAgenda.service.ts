import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {OperateurAgendaDto} from '../model/OperateurAgenda.model';
import {OperateurAgendaCriteria} from '../criteria/OperateurAgendaCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {OperateurDto} from '../model/Operateur.model';
import {AgendaDto} from '../model/Agenda.model';

@Injectable({
  providedIn: 'root'
})
export class OperateurAgendaService extends AbstractService<OperateurAgendaDto, OperateurAgendaCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/operateurAgenda/');
    }

    public constrcutDto(): OperateurAgendaDto {
        return new OperateurAgendaDto();
    }

    public constrcutCriteria(): OperateurAgendaCriteria {
        return new OperateurAgendaCriteria();
    }
}
