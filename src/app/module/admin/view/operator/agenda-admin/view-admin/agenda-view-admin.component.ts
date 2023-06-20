import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {AgendaService} from 'src/app/controller/service/Agenda.service';
import {AgendaDto} from 'src/app/controller/model/Agenda.model';
import {AgendaCriteria} from 'src/app/controller/criteria/AgendaCriteria.model';

import {UniteAdministrativeDto} from 'src/app/controller/model/UniteAdministrative.model';
import {UniteAdministrativeService} from 'src/app/controller/service/UniteAdministrative.service';
@Component({
  selector: 'app-agenda-view-admin',
  templateUrl: './agenda-view-admin.component.html'
})
export class AgendaViewAdminComponent extends AbstractViewController<AgendaDto, AgendaCriteria, AgendaService> implements OnInit {


    constructor(private agendaService: AgendaService, private uniteAdministrativeService: UniteAdministrativeService){
        super(agendaService);
    }

    ngOnInit(): void {
        this.uniteAdministrative = new UniteAdministrativeDto();
        this.uniteAdministrativeService.findAll().subscribe((data) => this.uniteAdministratives = data);
    }


    get uniteAdministrative(): UniteAdministrativeDto {
       return this.uniteAdministrativeService.item;
    }
    set uniteAdministrative(value: UniteAdministrativeDto) {
        this.uniteAdministrativeService.item = value;
    }
    get uniteAdministratives():Array<UniteAdministrativeDto> {
       return this.uniteAdministrativeService.items;
    }
    set uniteAdministratives(value: Array<UniteAdministrativeDto>) {
        this.uniteAdministrativeService.items = value;
    }


}
