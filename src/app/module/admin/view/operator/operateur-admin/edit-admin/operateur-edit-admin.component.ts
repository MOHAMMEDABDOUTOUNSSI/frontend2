import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

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
  selector: 'app-operateur-edit-admin',
  templateUrl: './operateur-edit-admin.component.html'
})
export class OperateurEditAdminComponent extends AbstractEditController<OperateurDto, OperateurCriteria, OperateurService>   implements OnInit {

    private _operateurAgendasElement = new OperateurAgendaDto();
    private _operateurHoraireTravailleValidationsElement = new OperateurHoraireTravailleValidationDto();
    private _operateurUniteAdministrativesElement = new OperateurUniteAdministrativeDto();
    private _operateurQuotasElement = new OperateurQuotaDto();

    private _validOperateurCin = true;

    private _validCelluleValidationLibelle = true;
    private _validCelluleValidationCode = true;
    private _validOperateurAgendasAgenda = true;
    private _validOperateurAgendasOperateur = true;
    private _validOperateurAgendasHeureDebut = true;
    private _validOperateurAgendasHeureFin = true;
    private _validOperateurHoraireTravailleValidationsOperateur = true;
    private _validOperateurHoraireTravailleValidationsHeureDebut = true;
    private _validOperateurHoraireTravailleValidationsHeureFin = true;
    private _validOperateurQuotasOperateur = true;
    private _validOperateurQuotasPrestation = true;
    private _validOperateurQuotasNombreMaxRdv = true;


    private _operateurUniteAdministratives: Array<OperateurUniteAdministrativeDto> = [];

    constructor( private operateurService: OperateurService , private agendaService: AgendaService, private operateurAgendaService: OperateurAgendaService, private operateurHoraireTravailleValidationService: OperateurHoraireTravailleValidationService, private horaireTravailleValidationService: HoraireTravailleValidationService, private operateurQuotaService: OperateurQuotaService, private prestationService: PrestationService, private celluleValidationService: CelluleValidationService, private uniteAdministrativeService: UniteAdministrativeService, private operateurUniteAdministrativeService: OperateurUniteAdministrativeService) {
        super(operateurService);
    }

    ngOnInit(): void {
        this.operateurAgendasElement.agenda = new AgendaDto();
        this.agendaService.findAll().subscribe((data) => this.agendas = data);

        this.operateurHoraireTravailleValidationsElement.horaireTravailleValidation = new HoraireTravailleValidationDto();
        this.horaireTravailleValidationService.findAll().subscribe((data) => this.horaireTravailleValidations = data);

        this.uniteAdministrativeService.findAll().subscribe(data => this.prepareOperateurUniteAdministratives(data));
        this.operateurUniteAdministrativesElement.uniteAdministrative = new UniteAdministrativeDto();
        this.uniteAdministrativeService.findAll().subscribe((data) => this.uniteAdministratives = data);

        this.operateurQuotasElement.prestation = new PrestationDto();
        this.prestationService.findAll().subscribe((data) => this.prestations = data);

    this.celluleValidation = new CelluleValidationDto();
    this.celluleValidationService.findAll().subscribe((data) => this.celluleValidations = data);
}
    public prepareEdit() {
        this.item.dateNaissance = this.operateurService.format(this.item.dateNaissance);
    }



    prepareOperateurUniteAdministratives(uniteAdministratives: Array<UniteAdministrativeDto>): void{
        if( uniteAdministratives != null){
            uniteAdministratives.forEach(e => {
                const operateurUniteAdministrative = new OperateurUniteAdministrativeDto();
                operateurUniteAdministrative.uniteAdministrative = e;
                this.operateurUniteAdministratives.push(operateurUniteAdministrative);
            });
        }
    }
    public validateOperateurAgendas(){
        this.errorMessages = new Array();
        this.validateOperateurAgendasAgenda();
        this.validateOperateurAgendasOperateur();
        this.validateOperateurAgendasHeureDebut();
        this.validateOperateurAgendasHeureFin();
    }
    public validateOperateurHoraireTravailleValidations(){
        this.errorMessages = new Array();
        this.validateOperateurHoraireTravailleValidationsOperateur();
        this.validateOperateurHoraireTravailleValidationsHeureDebut();
        this.validateOperateurHoraireTravailleValidationsHeureFin();
    }
    public validateOperateurQuotas(){
        this.errorMessages = new Array();
        this.validateOperateurQuotasOperateur();
        this.validateOperateurQuotasPrestation();
        this.validateOperateurQuotasNombreMaxRdv();
    }
    public setValidation(value : boolean){
        this.validOperateurCin = value;
        this.validOperateurAgendasAgenda = value;
        this.validOperateurAgendasOperateur = value;
        this.validOperateurAgendasHeureDebut = value;
        this.validOperateurAgendasHeureFin = value;
        this.validOperateurHoraireTravailleValidationsOperateur = value;
        this.validOperateurHoraireTravailleValidationsHeureDebut = value;
        this.validOperateurHoraireTravailleValidationsHeureFin = value;
        this.validOperateurQuotasOperateur = value;
        this.validOperateurQuotasPrestation = value;
        this.validOperateurQuotasNombreMaxRdv = value;
        }
   public addOperateurAgendas() {
        if( this.item.operateurAgendas == null )
            this.item.operateurAgendas = new Array<OperateurAgendaDto>();
       this.validateOperateurAgendas();
       if (this.errorMessages.length === 0) {
            if(this.operateurAgendasElement.id == null){
                this.item.operateurAgendas.push(this.operateurAgendasElement);
            }else{
                const index = this.item.operateurAgendas.findIndex(e => e.id == this.operateurAgendasElement.id);
                this.item.operateurAgendas[index] = this.operateurAgendasElement;
            }
          this.operateurAgendasElement = new OperateurAgendaDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs', detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
        }
   }

    public deleteOperateurAgenda(p: OperateurAgendaDto) {
        this.item.operateurAgendas.forEach((element, index) => {
            if (element === p) { this.item.operateurAgendas.splice(index, 1); }
        });
    }

    public editOperateurAgenda(p: OperateurAgendaDto) {
        this.operateurAgendasElement = {... p};
        this.activeTab = 0;
    }
   public addOperateurHoraireTravailleValidations() {
        if( this.item.operateurHoraireTravailleValidations == null )
            this.item.operateurHoraireTravailleValidations = new Array<OperateurHoraireTravailleValidationDto>();
       this.validateOperateurHoraireTravailleValidations();
       if (this.errorMessages.length === 0) {
            if(this.operateurHoraireTravailleValidationsElement.id == null){
                this.item.operateurHoraireTravailleValidations.push(this.operateurHoraireTravailleValidationsElement);
            }else{
                const index = this.item.operateurHoraireTravailleValidations.findIndex(e => e.id == this.operateurHoraireTravailleValidationsElement.id);
                this.item.operateurHoraireTravailleValidations[index] = this.operateurHoraireTravailleValidationsElement;
            }
          this.operateurHoraireTravailleValidationsElement = new OperateurHoraireTravailleValidationDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs', detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
        }
   }

    public deleteOperateurHoraireTravailleValidation(p: OperateurHoraireTravailleValidationDto) {
        this.item.operateurHoraireTravailleValidations.forEach((element, index) => {
            if (element === p) { this.item.operateurHoraireTravailleValidations.splice(index, 1); }
        });
    }

    public editOperateurHoraireTravailleValidation(p: OperateurHoraireTravailleValidationDto) {
        this.operateurHoraireTravailleValidationsElement = {... p};
        this.activeTab = 0;
    }
   public addOperateurQuotas() {
        if( this.item.operateurQuotas == null )
            this.item.operateurQuotas = new Array<OperateurQuotaDto>();
       this.validateOperateurQuotas();
       if (this.errorMessages.length === 0) {
            if(this.operateurQuotasElement.id == null){
                this.item.operateurQuotas.push(this.operateurQuotasElement);
            }else{
                const index = this.item.operateurQuotas.findIndex(e => e.id == this.operateurQuotasElement.id);
                this.item.operateurQuotas[index] = this.operateurQuotasElement;
            }
          this.operateurQuotasElement = new OperateurQuotaDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs', detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
        }
   }

    public deleteOperateurQuota(p: OperateurQuotaDto) {
        this.item.operateurQuotas.forEach((element, index) => {
            if (element === p) { this.item.operateurQuotas.splice(index, 1); }
        });
    }

    public editOperateurQuota(p: OperateurQuotaDto) {
        this.operateurQuotasElement = {... p};
        this.activeTab = 0;
    }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateOperateurCin();
    }
    public validateOperateurCin(){
        if (this.stringUtilService.isEmpty(this.item.cin)) {
            this.errorMessages.push('Cin non valide');
            this.validOperateurCin = false;
        } else {
            this.validOperateurCin = true;
        }
    }


    private validateOperateurAgendasAgenda(){
        if (this.operateurAgendasElement.agenda == null) {
        this.errorMessages.push('Agenda de la operateurAgenda est  invalide');
            this.validOperateurAgendasAgenda = false;
        } else {
            this.validOperateurAgendasAgenda = true;
        }
    }
    private validateOperateurAgendasOperateur(){
        if (this.operateurAgendasElement.operateur == null) {
        this.errorMessages.push('Operateur de la operateurAgenda est  invalide');
            this.validOperateurAgendasOperateur = false;
        } else {
            this.validOperateurAgendasOperateur = true;
        }
    }
    private validateOperateurAgendasHeureDebut(){
        if (this.operateurAgendasElement.heureDebut == null) {
        this.errorMessages.push('HeureDebut de la operateurAgenda est  invalide');
            this.validOperateurAgendasHeureDebut = false;
        } else {
            this.validOperateurAgendasHeureDebut = true;
        }
    }
    private validateOperateurAgendasHeureFin(){
        if (this.operateurAgendasElement.heureFin == null) {
        this.errorMessages.push('HeureFin de la operateurAgenda est  invalide');
            this.validOperateurAgendasHeureFin = false;
        } else {
            this.validOperateurAgendasHeureFin = true;
        }
    }
    private validateOperateurHoraireTravailleValidationsOperateur(){
        if (this.operateurHoraireTravailleValidationsElement.operateur == null) {
        this.errorMessages.push('Operateur de la operateurHoraireTravailleValidation est  invalide');
            this.validOperateurHoraireTravailleValidationsOperateur = false;
        } else {
            this.validOperateurHoraireTravailleValidationsOperateur = true;
        }
    }
    private validateOperateurHoraireTravailleValidationsHeureDebut(){
        if (this.operateurHoraireTravailleValidationsElement.heureDebut == null) {
        this.errorMessages.push('HeureDebut de la operateurHoraireTravailleValidation est  invalide');
            this.validOperateurHoraireTravailleValidationsHeureDebut = false;
        } else {
            this.validOperateurHoraireTravailleValidationsHeureDebut = true;
        }
    }
    private validateOperateurHoraireTravailleValidationsHeureFin(){
        if (this.operateurHoraireTravailleValidationsElement.heureFin == null) {
        this.errorMessages.push('HeureFin de la operateurHoraireTravailleValidation est  invalide');
            this.validOperateurHoraireTravailleValidationsHeureFin = false;
        } else {
            this.validOperateurHoraireTravailleValidationsHeureFin = true;
        }
    }
    private validateOperateurQuotasOperateur(){
        if (this.operateurQuotasElement.operateur == null) {
        this.errorMessages.push('Operateur de la operateurQuota est  invalide');
            this.validOperateurQuotasOperateur = false;
        } else {
            this.validOperateurQuotasOperateur = true;
        }
    }
    private validateOperateurQuotasPrestation(){
        if (this.operateurQuotasElement.prestation == null) {
        this.errorMessages.push('Prestation de la operateurQuota est  invalide');
            this.validOperateurQuotasPrestation = false;
        } else {
            this.validOperateurQuotasPrestation = true;
        }
    }
    private validateOperateurQuotasNombreMaxRdv(){
        if (this.operateurQuotasElement.nombreMaxRdv == null) {
        this.errorMessages.push('NombreMaxRdv de la operateurQuota est  invalide');
            this.validOperateurQuotasNombreMaxRdv = false;
        } else {
            this.validOperateurQuotasNombreMaxRdv = true;
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
   public async openCreateHoraireTravailleValidation(horaireTravailleValidation: string) {
        const isPermistted = await this.roleService.isPermitted('HoraireTravailleValidation', 'edit');
        if(isPermistted) {
             this.horaireTravailleValidation = new HoraireTravailleValidationDto();
             this.createHoraireTravailleValidationDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }
   public async openCreateCelluleValidation(celluleValidation: string) {
        const isPermistted = await this.roleService.isPermitted('CelluleValidation', 'edit');
        if(isPermistted) {
             this.celluleValidation = new CelluleValidationDto();
             this.createCelluleValidationDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

   get prestation(): PrestationDto {
       return this.prestationService.item;
   }
  set prestation(value: PrestationDto) {
        this.prestationService.item = value;
   }
   get prestations(): Array<PrestationDto> {
        return this.prestationService.items;
   }
   set prestations(value: Array<PrestationDto>) {
        this.prestationService.items = value;
   }
   get createPrestationDialog(): boolean {
       return this.prestationService.createDialog;
   }
  set createPrestationDialog(value: boolean) {
       this.prestationService.createDialog= value;
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
   get horaireTravailleValidation(): HoraireTravailleValidationDto {
       return this.horaireTravailleValidationService.item;
   }
  set horaireTravailleValidation(value: HoraireTravailleValidationDto) {
        this.horaireTravailleValidationService.item = value;
   }
   get horaireTravailleValidations(): Array<HoraireTravailleValidationDto> {
        return this.horaireTravailleValidationService.items;
   }
   set horaireTravailleValidations(value: Array<HoraireTravailleValidationDto>) {
        this.horaireTravailleValidationService.items = value;
   }
   get createHoraireTravailleValidationDialog(): boolean {
       return this.horaireTravailleValidationService.createDialog;
   }
  set createHoraireTravailleValidationDialog(value: boolean) {
       this.horaireTravailleValidationService.createDialog= value;
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
   get celluleValidation(): CelluleValidationDto {
       return this.celluleValidationService.item;
   }
  set celluleValidation(value: CelluleValidationDto) {
        this.celluleValidationService.item = value;
   }
   get celluleValidations(): Array<CelluleValidationDto> {
        return this.celluleValidationService.items;
   }
   set celluleValidations(value: Array<CelluleValidationDto>) {
        this.celluleValidationService.items = value;
   }
   get createCelluleValidationDialog(): boolean {
       return this.celluleValidationService.createDialog;
   }
  set createCelluleValidationDialog(value: boolean) {
       this.celluleValidationService.createDialog= value;
   }

    get operateurUniteAdministratives(): Array<OperateurUniteAdministrativeDto> {
        if( this._operateurUniteAdministratives == null )
            this._operateurUniteAdministratives = new Array();
         return this._operateurUniteAdministratives;
    }

    set operateurUniteAdministratives(value: Array<OperateurUniteAdministrativeDto>) {
        this._operateurUniteAdministratives = value;
    }
    get operateurAgendasElement(): OperateurAgendaDto {
        if( this._operateurAgendasElement == null )
            this._operateurAgendasElement = new OperateurAgendaDto();
         return this._operateurAgendasElement;
    }

    set operateurAgendasElement(value: OperateurAgendaDto) {
        this._operateurAgendasElement = value;
    }
    get operateurHoraireTravailleValidationsElement(): OperateurHoraireTravailleValidationDto {
        if( this._operateurHoraireTravailleValidationsElement == null )
            this._operateurHoraireTravailleValidationsElement = new OperateurHoraireTravailleValidationDto();
         return this._operateurHoraireTravailleValidationsElement;
    }

    set operateurHoraireTravailleValidationsElement(value: OperateurHoraireTravailleValidationDto) {
        this._operateurHoraireTravailleValidationsElement = value;
    }
    get operateurUniteAdministrativesElement(): OperateurUniteAdministrativeDto {
        if( this._operateurUniteAdministrativesElement == null )
            this._operateurUniteAdministrativesElement = new OperateurUniteAdministrativeDto();
         return this._operateurUniteAdministrativesElement;
    }

    set operateurUniteAdministrativesElement(value: OperateurUniteAdministrativeDto) {
        this._operateurUniteAdministrativesElement = value;
    }
    get operateurQuotasElement(): OperateurQuotaDto {
        if( this._operateurQuotasElement == null )
            this._operateurQuotasElement = new OperateurQuotaDto();
         return this._operateurQuotasElement;
    }

    set operateurQuotasElement(value: OperateurQuotaDto) {
        this._operateurQuotasElement = value;
    }

    get validOperateurCin(): boolean {
        return this._validOperateurCin;
    }
    set validOperateurCin(value: boolean) {
        this._validOperateurCin = value;
    }

    get validCelluleValidationLibelle(): boolean {
        return this._validCelluleValidationLibelle;
    }
    set validCelluleValidationLibelle(value: boolean) {
        this._validCelluleValidationLibelle = value;
    }
    get validCelluleValidationCode(): boolean {
        return this._validCelluleValidationCode;
    }
    set validCelluleValidationCode(value: boolean) {
        this._validCelluleValidationCode = value;
    }
    get validOperateurAgendasAgenda(): boolean {
        return this._validOperateurAgendasAgenda;
    }
    set validOperateurAgendasAgenda(value: boolean) {
        this._validOperateurAgendasAgenda = value;
    }
    get validOperateurAgendasOperateur(): boolean {
        return this._validOperateurAgendasOperateur;
    }
    set validOperateurAgendasOperateur(value: boolean) {
        this._validOperateurAgendasOperateur = value;
    }
    get validOperateurAgendasHeureDebut(): boolean {
        return this._validOperateurAgendasHeureDebut;
    }
    set validOperateurAgendasHeureDebut(value: boolean) {
        this._validOperateurAgendasHeureDebut = value;
    }
    get validOperateurAgendasHeureFin(): boolean {
        return this._validOperateurAgendasHeureFin;
    }
    set validOperateurAgendasHeureFin(value: boolean) {
        this._validOperateurAgendasHeureFin = value;
    }
    get validOperateurHoraireTravailleValidationsOperateur(): boolean {
        return this._validOperateurHoraireTravailleValidationsOperateur;
    }
    set validOperateurHoraireTravailleValidationsOperateur(value: boolean) {
        this._validOperateurHoraireTravailleValidationsOperateur = value;
    }
    get validOperateurHoraireTravailleValidationsHeureDebut(): boolean {
        return this._validOperateurHoraireTravailleValidationsHeureDebut;
    }
    set validOperateurHoraireTravailleValidationsHeureDebut(value: boolean) {
        this._validOperateurHoraireTravailleValidationsHeureDebut = value;
    }
    get validOperateurHoraireTravailleValidationsHeureFin(): boolean {
        return this._validOperateurHoraireTravailleValidationsHeureFin;
    }
    set validOperateurHoraireTravailleValidationsHeureFin(value: boolean) {
        this._validOperateurHoraireTravailleValidationsHeureFin = value;
    }
    get validOperateurQuotasOperateur(): boolean {
        return this._validOperateurQuotasOperateur;
    }
    set validOperateurQuotasOperateur(value: boolean) {
        this._validOperateurQuotasOperateur = value;
    }
    get validOperateurQuotasPrestation(): boolean {
        return this._validOperateurQuotasPrestation;
    }
    set validOperateurQuotasPrestation(value: boolean) {
        this._validOperateurQuotasPrestation = value;
    }
    get validOperateurQuotasNombreMaxRdv(): boolean {
        return this._validOperateurQuotasNombreMaxRdv;
    }
    set validOperateurQuotasNombreMaxRdv(value: boolean) {
        this._validOperateurQuotasNombreMaxRdv = value;
    }
}
