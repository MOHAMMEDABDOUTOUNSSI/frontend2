import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {TemplateEmailConfirmationDto} from '../model/TemplateEmailConfirmation.model';
import {TemplateEmailConfirmationCriteria} from '../criteria/TemplateEmailConfirmationCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class TemplateEmailConfirmationService extends AbstractService<TemplateEmailConfirmationDto, TemplateEmailConfirmationCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/templateEmailConfirmation/');
    }

    public constrcutDto(): TemplateEmailConfirmationDto {
        return new TemplateEmailConfirmationDto();
    }

    public constrcutCriteria(): TemplateEmailConfirmationCriteria {
        return new TemplateEmailConfirmationCriteria();
    }
}
