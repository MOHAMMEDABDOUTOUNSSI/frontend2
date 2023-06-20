import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {OperateurHoraireTravailleValidationService} from 'src/app/controller/service/OperateurHoraireTravailleValidation.service';
import {OperateurHoraireTravailleValidationDto} from 'src/app/controller/model/OperateurHoraireTravailleValidation.model';
import {OperateurHoraireTravailleValidationCriteria} from 'src/app/controller/criteria/OperateurHoraireTravailleValidationCriteria.model';


import {OperateurDto} from 'src/app/controller/model/Operateur.model';
import {OperateurService} from 'src/app/controller/service/Operateur.service';
import {HoraireTravailleValidationDto} from 'src/app/controller/model/HoraireTravailleValidation.model';
import {HoraireTravailleValidationService} from 'src/app/controller/service/HoraireTravailleValidation.service';

@Component({
  selector: 'app-operateur-horaire-travaille-validation-edit-admin',
  templateUrl: './operateur-horaire-travaille-validation-edit-admin.component.html'
})
export class OperateurHoraireTravailleValidationEditAdminComponent extends AbstractEditController<OperateurHoraireTravailleValidationDto, OperateurHoraireTravailleValidationCriteria, OperateurHoraireTravailleValidationService>   implements OnInit {


    private _validOperateurHoraireTravailleValidationOperateur = true;
    private _validOperateurHoraireTravailleValidationHeureDebut = true;
    private _validOperateurHoraireTravailleValidationHeureFin = true;

    private _validHoraireTravailleValidationLibelle = true;
    private _validHoraireTravailleValidationDaysOfWeek = true;
    private _validHoraireTravailleValidationMonth = true;
    private _validOperateurCin = true;



    constructor( private operateurHoraireTravailleValidationService: OperateurHoraireTravailleValidationService , private operateurService: OperateurService, private horaireTravailleValidationService: HoraireTravailleValidationService) {
        super(operateurHoraireTravailleValidationService);
    }

    ngOnInit(): void {
    this.horaireTravailleValidation = new HoraireTravailleValidationDto();
    this.horaireTravailleValidationService.findAll().subscribe((data) => this.horaireTravailleValidations = data);
    this.operateur = new OperateurDto();
    this.operateurService.findAll().subscribe((data) => this.operateurs = data);
}


    public setValidation(value : boolean){
        this.validOperateurHoraireTravailleValidationOperateur = value;
        this.validOperateurHoraireTravailleValidationHeureDebut = value;
        this.validOperateurHoraireTravailleValidationHeureFin = value;
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateOperateurHoraireTravailleValidationOperateur();
        this.validateOperateurHoraireTravailleValidationHeureDebut();
        this.validateOperateurHoraireTravailleValidationHeureFin();
    }
    public validateOperateurHoraireTravailleValidationOperateur(){
        if (this.stringUtilService.isEmpty(this.item.operateur)) {
            this.errorMessages.push('Operateur non valide');
            this.validOperateurHoraireTravailleValidationOperateur = false;
        } else {
            this.validOperateurHoraireTravailleValidationOperateur = true;
        }
    }
    public validateOperateurHoraireTravailleValidationHeureDebut(){
        if (this.stringUtilService.isEmpty(this.item.heureDebut)) {
            this.errorMessages.push('Heure debut non valide');
            this.validOperateurHoraireTravailleValidationHeureDebut = false;
        } else {
            this.validOperateurHoraireTravailleValidationHeureDebut = true;
        }
    }
    public validateOperateurHoraireTravailleValidationHeureFin(){
        if (this.stringUtilService.isEmpty(this.item.heureFin)) {
            this.errorMessages.push('Heure fin non valide');
            this.validOperateurHoraireTravailleValidationHeureFin = false;
        } else {
            this.validOperateurHoraireTravailleValidationHeureFin = true;
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


    get validOperateurHoraireTravailleValidationOperateur(): boolean {
        return this._validOperateurHoraireTravailleValidationOperateur;
    }
    set validOperateurHoraireTravailleValidationOperateur(value: boolean) {
        this._validOperateurHoraireTravailleValidationOperateur = value;
    }
    get validOperateurHoraireTravailleValidationHeureDebut(): boolean {
        return this._validOperateurHoraireTravailleValidationHeureDebut;
    }
    set validOperateurHoraireTravailleValidationHeureDebut(value: boolean) {
        this._validOperateurHoraireTravailleValidationHeureDebut = value;
    }
    get validOperateurHoraireTravailleValidationHeureFin(): boolean {
        return this._validOperateurHoraireTravailleValidationHeureFin;
    }
    set validOperateurHoraireTravailleValidationHeureFin(value: boolean) {
        this._validOperateurHoraireTravailleValidationHeureFin = value;
    }

    get validHoraireTravailleValidationLibelle(): boolean {
        return this._validHoraireTravailleValidationLibelle;
    }
    set validHoraireTravailleValidationLibelle(value: boolean) {
        this._validHoraireTravailleValidationLibelle = value;
    }
    get validHoraireTravailleValidationDaysOfWeek(): boolean {
        return this._validHoraireTravailleValidationDaysOfWeek;
    }
    set validHoraireTravailleValidationDaysOfWeek(value: boolean) {
        this._validHoraireTravailleValidationDaysOfWeek = value;
    }
    get validHoraireTravailleValidationMonth(): boolean {
        return this._validHoraireTravailleValidationMonth;
    }
    set validHoraireTravailleValidationMonth(value: boolean) {
        this._validHoraireTravailleValidationMonth = value;
    }
    get validOperateurCin(): boolean {
        return this._validOperateurCin;
    }
    set validOperateurCin(value: boolean) {
        this._validOperateurCin = value;
    }
}
