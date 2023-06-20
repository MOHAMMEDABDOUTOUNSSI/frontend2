import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {OperateurHoraireTravailleValidationDto} from '../model/OperateurHoraireTravailleValidation.model';
import {OperateurHoraireTravailleValidationCriteria} from '../criteria/OperateurHoraireTravailleValidationCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {HoraireTravailleValidationDto} from '../model/HoraireTravailleValidation.model';
import {OperateurDto} from '../model/Operateur.model';

@Injectable({
  providedIn: 'root'
})
export class OperateurHoraireTravailleValidationService extends AbstractService<OperateurHoraireTravailleValidationDto, OperateurHoraireTravailleValidationCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/operateurHoraireTravailleValidation/');
    }

    public constrcutDto(): OperateurHoraireTravailleValidationDto {
        return new OperateurHoraireTravailleValidationDto();
    }

    public constrcutCriteria(): OperateurHoraireTravailleValidationCriteria {
        return new OperateurHoraireTravailleValidationCriteria();
    }
}
