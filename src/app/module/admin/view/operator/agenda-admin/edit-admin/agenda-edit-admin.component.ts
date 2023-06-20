import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {AgendaService} from 'src/app/controller/service/Agenda.service';
import {AgendaDto} from 'src/app/controller/model/Agenda.model';
import {AgendaCriteria} from 'src/app/controller/criteria/AgendaCriteria.model';


import {UniteAdministrativeDto} from 'src/app/controller/model/UniteAdministrative.model';
import {UniteAdministrativeService} from 'src/app/controller/service/UniteAdministrative.service';

@Component({
  selector: 'app-agenda-edit-admin',
  templateUrl: './agenda-edit-admin.component.html'
})
export class AgendaEditAdminComponent extends AbstractEditController<AgendaDto, AgendaCriteria, AgendaService>   implements OnInit {


    private _validAgendaLibelle = true;
    private _validAgendaDaysOfMonth = true;
    private _validAgendaMonth = true;
    private _validAgendaAnnee = true;

    private _validUniteAdministrativeLibelle = true;
    private _validUniteAdministrativeCode = true;



    constructor( private agendaService: AgendaService , private uniteAdministrativeService: UniteAdministrativeService) {
        super(agendaService);
    }

    ngOnInit(): void {
    this.uniteAdministrative = new UniteAdministrativeDto();
    this.uniteAdministrativeService.findAll().subscribe((data) => this.uniteAdministratives = data);
}


    public setValidation(value : boolean){
        this.validAgendaLibelle = value;
        this.validAgendaDaysOfMonth = value;
        this.validAgendaMonth = value;
        this.validAgendaAnnee = value;
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateAgendaLibelle();
        this.validateAgendaDaysOfMonth();
        this.validateAgendaMonth();
        this.validateAgendaAnnee();
    }
    public validateAgendaLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validAgendaLibelle = false;
        } else {
            this.validAgendaLibelle = true;
        }
    }
    public validateAgendaDaysOfMonth(){
        if (this.stringUtilService.isEmpty(this.item.daysOfMonth)) {
            this.errorMessages.push('Days of month non valide');
            this.validAgendaDaysOfMonth = false;
        } else {
            this.validAgendaDaysOfMonth = true;
        }
    }
    public validateAgendaMonth(){
        if (this.stringUtilService.isEmpty(this.item.month)) {
            this.errorMessages.push('Month non valide');
            this.validAgendaMonth = false;
        } else {
            this.validAgendaMonth = true;
        }
    }
    public validateAgendaAnnee(){
        if (this.stringUtilService.isEmpty(this.item.annee)) {
            this.errorMessages.push('Annee non valide');
            this.validAgendaAnnee = false;
        } else {
            this.validAgendaAnnee = true;
        }
    }




   get uniteAdministrative(): UniteAdministrativeDto {
       return this.uniteAdministrativeService.item;
   }
  set uniteAdministrative(value: UniteAdministrativeDto) {
        this.uniteAdministrativeService.item = value;
   }
   get uniteAdministratives(): Array<UniteAdministrativeDto> {
        return this.uniteAdministrativeService.items;
   }
   set uniteAdministratives(value: Array<UniteAdministrativeDto>) {
        this.uniteAdministrativeService.items = value;
   }
   get createUniteAdministrativeDialog(): boolean {
       return this.uniteAdministrativeService.createDialog;
   }
  set createUniteAdministrativeDialog(value: boolean) {
       this.uniteAdministrativeService.createDialog= value;
   }


    get validAgendaLibelle(): boolean {
        return this._validAgendaLibelle;
    }
    set validAgendaLibelle(value: boolean) {
        this._validAgendaLibelle = value;
    }
    get validAgendaDaysOfMonth(): boolean {
        return this._validAgendaDaysOfMonth;
    }
    set validAgendaDaysOfMonth(value: boolean) {
        this._validAgendaDaysOfMonth = value;
    }
    get validAgendaMonth(): boolean {
        return this._validAgendaMonth;
    }
    set validAgendaMonth(value: boolean) {
        this._validAgendaMonth = value;
    }
    get validAgendaAnnee(): boolean {
        return this._validAgendaAnnee;
    }
    set validAgendaAnnee(value: boolean) {
        this._validAgendaAnnee = value;
    }

    get validUniteAdministrativeLibelle(): boolean {
        return this._validUniteAdministrativeLibelle;
    }
    set validUniteAdministrativeLibelle(value: boolean) {
        this._validUniteAdministrativeLibelle = value;
    }
    get validUniteAdministrativeCode(): boolean {
        return this._validUniteAdministrativeCode;
    }
    set validUniteAdministrativeCode(value: boolean) {
        this._validUniteAdministrativeCode = value;
    }
}
