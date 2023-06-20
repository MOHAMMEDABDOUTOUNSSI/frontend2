import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {OperateurService} from 'src/app/controller/service/Operateur.service';
import {OperateurDto} from 'src/app/controller/model/Operateur.model';
import {OperateurCriteria} from 'src/app/controller/criteria/OperateurCriteria.model';

import {OperateurAgendaDto} from 'src/app/controller/model/OperateurAgenda.model';
import {OperateurAgendaService} from 'src/app/controller/service/OperateurAgenda.service';
import {HoraireTravailleValidationDto} from 'src/app/controller/model/HoraireTravailleValidation.model';
import {HoraireTravailleValidationService} from 'src/app/controller/service/HoraireTravailleValidation.service';
import {OperateurQuotaDto} from 'src/app/controller/model/OperateurQuota.model';
import {OperateurQuotaService} from 'src/app/controller/service/OperateurQuota.service';
import {CelluleValidationDto} from 'src/app/controller/model/CelluleValidation.model';
import {CelluleValidationService} from 'src/app/controller/service/CelluleValidation.service';
import {UniteAdministrativeDto} from 'src/app/controller/model/UniteAdministrative.model';
import {UniteAdministrativeService} from 'src/app/controller/service/UniteAdministrative.service';
import {AgendaDto} from 'src/app/controller/model/Agenda.model';
import {AgendaService} from 'src/app/controller/service/Agenda.service';
import {OperateurHoraireTravailleValidationDto} from 'src/app/controller/model/OperateurHoraireTravailleValidation.model';
import {OperateurHoraireTravailleValidationService} from 'src/app/controller/service/OperateurHoraireTravailleValidation.service';
import {PrestationDto} from 'src/app/controller/model/Prestation.model';
import {PrestationService} from 'src/app/controller/service/Prestation.service';
import {OperateurUniteAdministrativeDto} from 'src/app/controller/model/OperateurUniteAdministrative.model';
import {OperateurUniteAdministrativeService} from 'src/app/controller/service/OperateurUniteAdministrative.service';
@Component({
  selector: 'app-operateur-view-admin',
  templateUrl: './operateur-view-admin.component.html'
})
export class OperateurViewAdminComponent extends AbstractViewController<OperateurDto, OperateurCriteria, OperateurService> implements OnInit {

    operateurAgendas = new OperateurAgendaDto();
    operateurAgendass: Array<OperateurAgendaDto> = [];
    operateurHoraireTravailleValidations = new OperateurHoraireTravailleValidationDto();
    operateurHoraireTravailleValidationss: Array<OperateurHoraireTravailleValidationDto> = [];
    operateurUniteAdministratives = new OperateurUniteAdministrativeDto();
    operateurUniteAdministrativess: Array<OperateurUniteAdministrativeDto> = [];
    operateurQuotas = new OperateurQuotaDto();
    operateurQuotass: Array<OperateurQuotaDto> = [];

    constructor(private operateurService: OperateurService, private agendaService: AgendaService, private operateurAgendaService: OperateurAgendaService, private operateurHoraireTravailleValidationService: OperateurHoraireTravailleValidationService, private horaireTravailleValidationService: HoraireTravailleValidationService, private operateurQuotaService: OperateurQuotaService, private prestationService: PrestationService, private celluleValidationService: CelluleValidationService, private uniteAdministrativeService: UniteAdministrativeService, private operateurUniteAdministrativeService: OperateurUniteAdministrativeService){
        super(operateurService);
    }

    ngOnInit(): void {
        this.operateurAgendas.agenda = new AgendaDto();
        this.agendaService.findAll().subscribe((data) => this.agendas = data);
        this.operateurHoraireTravailleValidations.horaireTravailleValidation = new HoraireTravailleValidationDto();
        this.horaireTravailleValidationService.findAll().subscribe((data) => this.horaireTravailleValidations = data);
        this.operateurUniteAdministratives.uniteAdministrative = new UniteAdministrativeDto();
        this.uniteAdministrativeService.findAll().subscribe((data) => this.uniteAdministratives = data);
        this.operateurQuotas.prestation = new PrestationDto();
        this.prestationService.findAll().subscribe((data) => this.prestations = data);
        this.celluleValidation = new CelluleValidationDto();
        this.celluleValidationService.findAll().subscribe((data) => this.celluleValidations = data);
    }


    get prestation(): PrestationDto {
       return this.prestationService.item;
    }
    set prestation(value: PrestationDto) {
        this.prestationService.item = value;
    }
    get prestations():Array<PrestationDto> {
       return this.prestationService.items;
    }
    set prestations(value: Array<PrestationDto>) {
        this.prestationService.items = value;
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
    get horaireTravailleValidation(): HoraireTravailleValidationDto {
       return this.horaireTravailleValidationService.item;
    }
    set horaireTravailleValidation(value: HoraireTravailleValidationDto) {
        this.horaireTravailleValidationService.item = value;
    }
    get horaireTravailleValidations():Array<HoraireTravailleValidationDto> {
       return this.horaireTravailleValidationService.items;
    }
    set horaireTravailleValidations(value: Array<HoraireTravailleValidationDto>) {
        this.horaireTravailleValidationService.items = value;
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
    get celluleValidation(): CelluleValidationDto {
       return this.celluleValidationService.item;
    }
    set celluleValidation(value: CelluleValidationDto) {
        this.celluleValidationService.item = value;
    }
    get celluleValidations():Array<CelluleValidationDto> {
       return this.celluleValidationService.items;
    }
    set celluleValidations(value: Array<CelluleValidationDto>) {
        this.celluleValidationService.items = value;
    }


}
