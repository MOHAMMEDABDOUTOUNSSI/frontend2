import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {OperateurAgendaService} from 'src/app/controller/service/OperateurAgenda.service';
import {OperateurAgendaDto} from 'src/app/controller/model/OperateurAgenda.model';
import {OperateurAgendaCriteria} from 'src/app/controller/criteria/OperateurAgendaCriteria.model';

import {AgendaDto} from 'src/app/controller/model/Agenda.model';
import {AgendaService} from 'src/app/controller/service/Agenda.service';
import {OperateurDto} from 'src/app/controller/model/Operateur.model';
import {OperateurService} from 'src/app/controller/service/Operateur.service';
@Component({
  selector: 'app-operateur-agenda-view-admin',
  templateUrl: './operateur-agenda-view-admin.component.html'
})
export class OperateurAgendaViewAdminComponent extends AbstractViewController<OperateurAgendaDto, OperateurAgendaCriteria, OperateurAgendaService> implements OnInit {


    constructor(private operateurAgendaService: OperateurAgendaService, private agendaService: AgendaService, private operateurService: OperateurService){
        super(operateurAgendaService);
    }

    ngOnInit(): void {
        this.agenda = new AgendaDto();
        this.agendaService.findAll().subscribe((data) => this.agendas = data);
        this.operateur = new OperateurDto();
        this.operateurService.findAll().subscribe((data) => this.operateurs = data);
    }


    get agenda(): AgendaDto {
       return this.agendaService.item;
    }
    set agenda(value: AgendaDto) {
        this.agendaService.item = value;
    }
    get agendas():Array<AgendaDto> {
       return this.agendaService.items;
    }
    set agendas(value: Array<AgendaDto>) {
        this.agendaService.items = value;
    }
    get operateur(): OperateurDto {
       return this.operateurService.item;
    }
    set operateur(value: OperateurDto) {
        this.operateurService.item = value;
    }
    get operateurs():Array<OperateurDto> {
       return this.operateurService.items;
    }
    set operateurs(value: Array<OperateurDto>) {
        this.operateurService.items = value;
    }


}
