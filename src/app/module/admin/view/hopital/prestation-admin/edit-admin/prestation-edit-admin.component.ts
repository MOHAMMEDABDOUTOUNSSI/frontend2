import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {PrestationService} from 'src/app/controller/service/Prestation.service';
import {PrestationDto} from 'src/app/controller/model/Prestation.model';
import {PrestationCriteria} from 'src/app/controller/criteria/PrestationCriteria.model';


import {UniteAdministrativeDto} from 'src/app/controller/model/UniteAdministrative.model';
import {UniteAdministrativeService} from 'src/app/controller/service/UniteAdministrative.service';
import {TypePrestationDto} from 'src/app/controller/model/TypePrestation.model';
import {TypePrestationService} from 'src/app/controller/service/TypePrestation.service';

@Component({
  selector: 'app-prestation-edit-admin',
  templateUrl: './prestation-edit-admin.component.html'
})
export class PrestationEditAdminComponent extends AbstractEditController<PrestationDto, PrestationCriteria, PrestationService>   implements OnInit {


    private _validPrestationLibelle = true;
    private _validPrestationCode = true;
    private _validPrestationTypePrestation = true;
    private _validPrestationDureeEnMiniute = true;

    private _validTypePrestationLibelle = true;
    private _validTypePrestationCode = true;
    private _validUniteAdministrativeLibelle = true;
    private _validUniteAdministrativeCode = true;



    constructor( private prestationService: PrestationService , private uniteAdministrativeService: UniteAdministrativeService, private typePrestationService: TypePrestationService) {
        super(prestationService);
    }

    ngOnInit(): void {
    this.typePrestation = new TypePrestationDto();
    this.typePrestationService.findAll().subscribe((data) => this.typePrestations = data);
    this.uniteAdministrative = new UniteAdministrativeDto();
    this.uniteAdministrativeService.findAll().subscribe((data) => this.uniteAdministratives = data);
}


    public setValidation(value : boolean){
        this.validPrestationLibelle = value;
        this.validPrestationCode = value;
        this.validPrestationTypePrestation = value;
        this.validPrestationDureeEnMiniute = value;
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validatePrestationLibelle();
        this.validatePrestationCode();
        this.validatePrestationTypePrestation();
        this.validatePrestationDureeEnMiniute();
    }
    public validatePrestationLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validPrestationLibelle = false;
        } else {
            this.validPrestationLibelle = true;
        }
    }
    public validatePrestationCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validPrestationCode = false;
        } else {
            this.validPrestationCode = true;
        }
    }
    public validatePrestationTypePrestation(){
        if (this.stringUtilService.isEmpty(this.item.typePrestation)) {
            this.errorMessages.push('Type prestation non valide');
            this.validPrestationTypePrestation = false;
        } else {
            this.validPrestationTypePrestation = true;
        }
    }
    public validatePrestationDureeEnMiniute(){
        if (this.stringUtilService.isEmpty(this.item.dureeEnMiniute)) {
            this.errorMessages.push('Duree en miniute non valide');
            this.validPrestationDureeEnMiniute = false;
        } else {
            this.validPrestationDureeEnMiniute = true;
        }
    }



   public async openCreateTypePrestation(typePrestation: string) {
        const isPermistted = await this.roleService.isPermitted('TypePrestation', 'edit');
        if(isPermistted) {
             this.typePrestation = new TypePrestationDto();
             this.createTypePrestationDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }
   public async openCreateUniteAdministrative(uniteAdministrative: string) {
        const isPermistted = await this.roleService.isPermitted('UniteAdministrative', 'edit');
        if(isPermistted) {
             this.uniteAdministrative = new UniteAdministrativeDto();
             this.createUniteAdministrativeDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

   get typePrestation(): TypePrestationDto {
       return this.typePrestationService.item;
   }
  set typePrestation(value: TypePrestationDto) {
        this.typePrestationService.item = value;
   }
   get typePrestations(): Array<TypePrestationDto> {
        return this.typePrestationService.items;
   }
   set typePrestations(value: Array<TypePrestationDto>) {
        this.typePrestationService.items = value;
   }
   get createTypePrestationDialog(): boolean {
       return this.typePrestationService.createDialog;
   }
  set createTypePrestationDialog(value: boolean) {
       this.typePrestationService.createDialog= value;
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


    get validPrestationLibelle(): boolean {
        return this._validPrestationLibelle;
    }
    set validPrestationLibelle(value: boolean) {
        this._validPrestationLibelle = value;
    }
    get validPrestationCode(): boolean {
        return this._validPrestationCode;
    }
    set validPrestationCode(value: boolean) {
        this._validPrestationCode = value;
    }
    get validPrestationTypePrestation(): boolean {
        return this._validPrestationTypePrestation;
    }
    set validPrestationTypePrestation(value: boolean) {
        this._validPrestationTypePrestation = value;
    }
    get validPrestationDureeEnMiniute(): boolean {
        return this._validPrestationDureeEnMiniute;
    }
    set validPrestationDureeEnMiniute(value: boolean) {
        this._validPrestationDureeEnMiniute = value;
    }

    get validTypePrestationLibelle(): boolean {
        return this._validTypePrestationLibelle;
    }
    set validTypePrestationLibelle(value: boolean) {
        this._validTypePrestationLibelle = value;
    }
    get validTypePrestationCode(): boolean {
        return this._validTypePrestationCode;
    }
    set validTypePrestationCode(value: boolean) {
        this._validTypePrestationCode = value;
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
