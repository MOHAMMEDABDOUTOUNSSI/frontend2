import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {UniteAdministrativeService} from 'src/app/controller/service/UniteAdministrative.service';
import {UniteAdministrativeDto} from 'src/app/controller/model/UniteAdministrative.model';
import {UniteAdministrativeCriteria} from 'src/app/controller/criteria/UniteAdministrativeCriteria.model';


import {HopitalDto} from 'src/app/controller/model/Hopital.model';
import {HopitalService} from 'src/app/controller/service/Hopital.service';
import {PrestationDto} from 'src/app/controller/model/Prestation.model';
import {PrestationService} from 'src/app/controller/service/Prestation.service';
import {TypePrestationDto} from 'src/app/controller/model/TypePrestation.model';
import {TypePrestationService} from 'src/app/controller/service/TypePrestation.service';

@Component({
  selector: 'app-unite-administrative-edit-admin',
  templateUrl: './unite-administrative-edit-admin.component.html'
})
export class UniteAdministrativeEditAdminComponent extends AbstractEditController<UniteAdministrativeDto, UniteAdministrativeCriteria, UniteAdministrativeService>   implements OnInit {

    private _prestationsElement = new PrestationDto();

    private _validUniteAdministrativeLibelle = true;
    private _validUniteAdministrativeCode = true;

    private _validPrestationsLibelle = true;
    private _validPrestationsCode = true;
    private _validPrestationsTypePrestation = true;
    private _validPrestationsDureeEnMiniute = true;
    private _validHopitalLibelle = true;
    private _validHopitalCode = true;



    constructor( private uniteAdministrativeService: UniteAdministrativeService , private hopitalService: HopitalService, private prestationService: PrestationService, private typePrestationService: TypePrestationService) {
        super(uniteAdministrativeService);
    }

    ngOnInit(): void {
        this.prestationsElement.typePrestation = new TypePrestationDto();
        this.typePrestationService.findAll().subscribe((data) => this.typePrestations = data);

    this.hopital = new HopitalDto();
    this.hopitalService.findAll().subscribe((data) => this.hopitals = data);
}


    public validatePrestations(){
        this.errorMessages = new Array();
        this.validatePrestationsLibelle();
        this.validatePrestationsCode();
        this.validatePrestationsTypePrestation();
        this.validatePrestationsDureeEnMiniute();
    }
    public setValidation(value : boolean){
        this.validUniteAdministrativeLibelle = value;
        this.validUniteAdministrativeCode = value;
        this.validPrestationsLibelle = value;
        this.validPrestationsCode = value;
        this.validPrestationsTypePrestation = value;
        this.validPrestationsDureeEnMiniute = value;
        }
   public addPrestations() {
        if( this.item.prestations == null )
            this.item.prestations = new Array<PrestationDto>();
       this.validatePrestations();
       if (this.errorMessages.length === 0) {
            if(this.prestationsElement.id == null){
                this.item.prestations.push(this.prestationsElement);
            }else{
                const index = this.item.prestations.findIndex(e => e.id == this.prestationsElement.id);
                this.item.prestations[index] = this.prestationsElement;
            }
          this.prestationsElement = new PrestationDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs', detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
        }
   }

    public deletePrestation(p: PrestationDto) {
        this.item.prestations.forEach((element, index) => {
            if (element === p) { this.item.prestations.splice(index, 1); }
        });
    }

    public editPrestation(p: PrestationDto) {
        this.prestationsElement = {... p};
        this.activeTab = 0;
    }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateUniteAdministrativeLibelle();
        this.validateUniteAdministrativeCode();
    }
    public validateUniteAdministrativeLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validUniteAdministrativeLibelle = false;
        } else {
            this.validUniteAdministrativeLibelle = true;
        }
    }
    public validateUniteAdministrativeCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validUniteAdministrativeCode = false;
        } else {
            this.validUniteAdministrativeCode = true;
        }
    }


    private validatePrestationsLibelle(){
        if (this.prestationsElement.libelle == null) {
        this.errorMessages.push('Libelle de la prestation est  invalide');
            this.validPrestationsLibelle = false;
        } else {
            this.validPrestationsLibelle = true;
        }
    }
    private validatePrestationsCode(){
        if (this.prestationsElement.code == null) {
        this.errorMessages.push('Code de la prestation est  invalide');
            this.validPrestationsCode = false;
        } else {
            this.validPrestationsCode = true;
        }
    }
    private validatePrestationsTypePrestation(){
        if (this.prestationsElement.typePrestation == null) {
        this.errorMessages.push('TypePrestation de la prestation est  invalide');
            this.validPrestationsTypePrestation = false;
        } else {
            this.validPrestationsTypePrestation = true;
        }
    }
    private validatePrestationsDureeEnMiniute(){
        if (this.prestationsElement.dureeEnMiniute == null) {
        this.errorMessages.push('DureeEnMiniute de la prestation est  invalide');
            this.validPrestationsDureeEnMiniute = false;
        } else {
            this.validPrestationsDureeEnMiniute = true;
        }
    }

   public async openCreateHopital(hopital: string) {
        const isPermistted = await this.roleService.isPermitted('Hopital', 'edit');
        if(isPermistted) {
             this.hopital = new HopitalDto();
             this.createHopitalDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
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

   get hopital(): HopitalDto {
       return this.hopitalService.item;
   }
  set hopital(value: HopitalDto) {
        this.hopitalService.item = value;
   }
   get hopitals(): Array<HopitalDto> {
        return this.hopitalService.items;
   }
   set hopitals(value: Array<HopitalDto>) {
        this.hopitalService.items = value;
   }
   get createHopitalDialog(): boolean {
       return this.hopitalService.createDialog;
   }
  set createHopitalDialog(value: boolean) {
       this.hopitalService.createDialog= value;
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

    get prestationsElement(): PrestationDto {
        if( this._prestationsElement == null )
            this._prestationsElement = new PrestationDto();
         return this._prestationsElement;
    }

    set prestationsElement(value: PrestationDto) {
        this._prestationsElement = value;
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

    get validPrestationsLibelle(): boolean {
        return this._validPrestationsLibelle;
    }
    set validPrestationsLibelle(value: boolean) {
        this._validPrestationsLibelle = value;
    }
    get validPrestationsCode(): boolean {
        return this._validPrestationsCode;
    }
    set validPrestationsCode(value: boolean) {
        this._validPrestationsCode = value;
    }
    get validPrestationsTypePrestation(): boolean {
        return this._validPrestationsTypePrestation;
    }
    set validPrestationsTypePrestation(value: boolean) {
        this._validPrestationsTypePrestation = value;
    }
    get validPrestationsDureeEnMiniute(): boolean {
        return this._validPrestationsDureeEnMiniute;
    }
    set validPrestationsDureeEnMiniute(value: boolean) {
        this._validPrestationsDureeEnMiniute = value;
    }
    get validHopitalLibelle(): boolean {
        return this._validHopitalLibelle;
    }
    set validHopitalLibelle(value: boolean) {
        this._validHopitalLibelle = value;
    }
    get validHopitalCode(): boolean {
        return this._validHopitalCode;
    }
    set validHopitalCode(value: boolean) {
        this._validHopitalCode = value;
    }
}
