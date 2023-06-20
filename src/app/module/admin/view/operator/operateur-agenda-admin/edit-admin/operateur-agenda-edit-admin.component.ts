import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {OperateurAgendaService} from 'src/app/controller/service/OperateurAgenda.service';
import {OperateurAgendaDto} from 'src/app/controller/model/OperateurAgenda.model';
import {OperateurAgendaCriteria} from 'src/app/controller/criteria/OperateurAgendaCriteria.model';


import {AgendaDto} from 'src/app/controller/model/Agenda.model';
import {AgendaService} from 'src/app/controller/service/Agenda.service';
import {OperateurDto} from 'src/app/controller/model/Operateur.model';
import {OperateurService} from 'src/app/controller/service/Operateur.service';

@Component({
  selector: 'app-operateur-agenda-edit-admin',
  templateUrl: './operateur-agenda-edit-admin.component.html'
})
export class OperateurAgendaEditAdminComponent extends AbstractEditController<OperateurAgendaDto, OperateurAgendaCriteria, OperateurAgendaService>   implements OnInit {


    private _validOperateurAgendaAgenda = true;
    private _validOperateurAgendaOperateur = true;
    private _validOperateurAgendaHeureDebut = true;
    private _validOperateurAgendaHeureFin = true;

    private _validAgendaLibelle = true;
    private _validAgendaDaysOfMonth = true;
    private _validAgendaMonth = true;
    private _validAgendaAnnee = true;
    private _validOperateurCin = true;



    constructor( private operateurAgendaService: OperateurAgendaService , private agendaService: AgendaService, private operateurService: OperateurService) {
        super(operateurAgendaService);
    }

    ngOnInit(): void {
    this.agenda = new AgendaDto();
    this.agendaService.findAll().subscribe((data) => this.agendas = data);
    this.operateur = new OperateurDto();
    this.operateurService.findAll().subscribe((data) => this.operateurs = data);
}


    public setValidation(value : boolean){
        this.validOperateurAgendaAgenda = value;
        this.validOperateurAgendaOperateur = value;
        this.validOperateurAgendaHeureDebut = value;
        this.validOperateurAgendaHeureFin = value;
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateOperateurAgendaAgenda();
        this.validateOperateurAgendaOperateur();
        this.validateOperateurAgendaHeureDebut();
        this.validateOperateurAgendaHeureFin();
    }
    public validateOperateurAgendaAgenda(){
        if (this.stringUtilService.isEmpty(this.item.agenda)) {
            this.errorMessages.push('Agenda non valide');
            this.validOperateurAgendaAgenda = false;
        } else {
            this.validOperateurAgendaAgenda = true;
        }
    }
    public validateOperateurAgendaOperateur(){
        if (this.stringUtilService.isEmpty(this.item.operateur)) {
            this.errorMessages.push('Operateur non valide');
            this.validOperateurAgendaOperateur = false;
        } else {
            this.validOperateurAgendaOperateur = true;
        }
    }
    public validateOperateurAgendaHeureDebut(){
        if (this.stringUtilService.isEmpty(this.item.heureDebut)) {
            this.errorMessages.push('Heure debut non valide');
            this.validOperateurAgendaHeureDebut = false;
        } else {
            this.validOperateurAgendaHeureDebut = true;
        }
    }
    public validateOperateurAgendaHeureFin(){
        if (this.stringUtilService.isEmpty(this.item.heureFin)) {
            this.errorMessages.push('Heure fin non valide');
            this.validOperateurAgendaHeureFin = false;
        } else {
            this.validOperateurAgendaHeureFin = true;
        }
    }



   public async openCreateAgenda(agenda: string) {
        const isPermistted = await this.roleService.isPermitted('Agenda', 'edit');
        if(isPermistted) {
             this.agenda = new AgendaDto();
             this.createAgendaDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }
   public async openCreateOperateur(operateur: string) {
        const isPermistted = await this.roleService.isPermitted('Operateur', 'edit');
        if(isPermistted) {
             this.operateur = new OperateurDto();
             this.createOperateurDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

   get agenda(): AgendaDto {
       return this.agendaService.item;
   }
  set agenda(value: AgendaDto) {
        this.agendaService.item = value;
   }
   get agendas(): Array<AgendaDto> {
        return this.agendaService.items;
   }
   set agendas(value: Array<AgendaDto>) {
        this.agendaService.items = value;
   }
   get createAgendaDialog(): boolean {
       return this.agendaService.createDialog;
   }
  set createAgendaDialog(value: boolean) {
       this.agendaService.createDialog= value;
   }
   get operateur(): OperateurDto {
       return this.operateurService.item;
   }
  set operateur(value: OperateurDto) {
        this.operateurService.item = value;
   }
   get operateurs(): Array<OperateurDto> {
        return this.operateurService.items;
   }
   set operateurs(value: Array<OperateurDto>) {
        this.operateurService.items = value;
   }
   get createOperateurDialog(): boolean {
       return this.operateurService.createDialog;
   }
  set createOperateurDialog(value: boolean) {
       this.operateurService.createDialog= value;
   }


    get validOperateurAgendaAgenda(): boolean {
        return this._validOperateurAgendaAgenda;
    }
    set validOperateurAgendaAgenda(value: boolean) {
        this._validOperateurAgendaAgenda = value;
    }
    get validOperateurAgendaOperateur(): boolean {
        return this._validOperateurAgendaOperateur;
    }
    set validOperateurAgendaOperateur(value: boolean) {
        this._validOperateurAgendaOperateur = value;
    }
    get validOperateurAgendaHeureDebut(): boolean {
        return this._validOperateurAgendaHeureDebut;
    }
    set validOperateurAgendaHeureDebut(value: boolean) {
        this._validOperateurAgendaHeureDebut = value;
    }
    get validOperateurAgendaHeureFin(): boolean {
        return this._validOperateurAgendaHeureFin;
    }
    set validOperateurAgendaHeureFin(value: boolean) {
        this._validOperateurAgendaHeureFin = value;
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
    get validOperateurCin(): boolean {
        return this._validOperateurCin;
    }
    set validOperateurCin(value: boolean) {
        this._validOperateurCin = value;
    }
}
