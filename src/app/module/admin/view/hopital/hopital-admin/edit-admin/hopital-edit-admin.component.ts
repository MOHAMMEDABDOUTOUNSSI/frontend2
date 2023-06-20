import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {HopitalService} from 'src/app/controller/service/Hopital.service';
import {HopitalDto} from 'src/app/controller/model/Hopital.model';
import {HopitalCriteria} from 'src/app/controller/criteria/HopitalCriteria.model';


import {PrestationDto} from 'src/app/controller/model/Prestation.model';
import {PrestationService} from 'src/app/controller/service/Prestation.service';
import {CentreHospitalierUniversitaireDto} from 'src/app/controller/model/CentreHospitalierUniversitaire.model';
import {CentreHospitalierUniversitaireService} from 'src/app/controller/service/CentreHospitalierUniversitaire.service';
import {UniteAdministrativeDto} from 'src/app/controller/model/UniteAdministrative.model';
import {UniteAdministrativeService} from 'src/app/controller/service/UniteAdministrative.service';

@Component({
  selector: 'app-hopital-edit-admin',
  templateUrl: './hopital-edit-admin.component.html'
})
export class HopitalEditAdminComponent extends AbstractEditController<HopitalDto, HopitalCriteria, HopitalService>   implements OnInit {

    private _uniteAdministrativesElement = new UniteAdministrativeDto();

    private _validHopitalLibelle = true;
    private _validHopitalCode = true;

    private _validCentreHospitalierUniversitaireLibelle = true;
    private _validCentreHospitalierUniversitaireCode = true;
    private _validUniteAdministrativesLibelle = true;
    private _validUniteAdministrativesCode = true;



    constructor( private hopitalService: HopitalService , private centreHospitalierUniversitaireService: CentreHospitalierUniversitaireService, private uniteAdministrativeService: UniteAdministrativeService) {
        super(hopitalService);
    }

    ngOnInit(): void {

    this.centreHospitalierUniversitaire = new CentreHospitalierUniversitaireDto();
    this.centreHospitalierUniversitaireService.findAll().subscribe((data) => this.centreHospitalierUniversitaires = data);
}


    public validateUniteAdministratives(){
        this.errorMessages = new Array();
        this.validateUniteAdministrativesLibelle();
        this.validateUniteAdministrativesCode();
    }
    public setValidation(value : boolean){
        this.validHopitalLibelle = value;
        this.validHopitalCode = value;
        this.validUniteAdministrativesLibelle = value;
        this.validUniteAdministrativesCode = value;
        }
   public addUniteAdministratives() {
        if( this.item.uniteAdministratives == null )
            this.item.uniteAdministratives = new Array<UniteAdministrativeDto>();
       this.validateUniteAdministratives();
       if (this.errorMessages.length === 0) {
            if(this.uniteAdministrativesElement.id == null){
                this.item.uniteAdministratives.push(this.uniteAdministrativesElement);
            }else{
                const index = this.item.uniteAdministratives.findIndex(e => e.id == this.uniteAdministrativesElement.id);
                this.item.uniteAdministratives[index] = this.uniteAdministrativesElement;
            }
          this.uniteAdministrativesElement = new UniteAdministrativeDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs', detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
        }
   }

    public deleteUniteAdministrative(p: UniteAdministrativeDto) {
        this.item.uniteAdministratives.forEach((element, index) => {
            if (element === p) { this.item.uniteAdministratives.splice(index, 1); }
        });
    }

    public editUniteAdministrative(p: UniteAdministrativeDto) {
        this.uniteAdministrativesElement = {... p};
        this.activeTab = 0;
    }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateHopitalLibelle();
        this.validateHopitalCode();
    }
    public validateHopitalLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validHopitalLibelle = false;
        } else {
            this.validHopitalLibelle = true;
        }
    }
    public validateHopitalCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validHopitalCode = false;
        } else {
            this.validHopitalCode = true;
        }
    }


    private validateUniteAdministrativesLibelle(){
        if (this.uniteAdministrativesElement.libelle == null) {
        this.errorMessages.push('Libelle de la uniteAdministrative est  invalide');
            this.validUniteAdministrativesLibelle = false;
        } else {
            this.validUniteAdministrativesLibelle = true;
        }
    }
    private validateUniteAdministrativesCode(){
        if (this.uniteAdministrativesElement.code == null) {
        this.errorMessages.push('Code de la uniteAdministrative est  invalide');
            this.validUniteAdministrativesCode = false;
        } else {
            this.validUniteAdministrativesCode = true;
        }
    }

   public async openCreateCentreHospitalierUniversitaire(centreHospitalierUniversitaire: string) {
        const isPermistted = await this.roleService.isPermitted('CentreHospitalierUniversitaire', 'edit');
        if(isPermistted) {
             this.centreHospitalierUniversitaire = new CentreHospitalierUniversitaireDto();
             this.createCentreHospitalierUniversitaireDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

   get centreHospitalierUniversitaire(): CentreHospitalierUniversitaireDto {
       return this.centreHospitalierUniversitaireService.item;
   }
  set centreHospitalierUniversitaire(value: CentreHospitalierUniversitaireDto) {
        this.centreHospitalierUniversitaireService.item = value;
   }
   get centreHospitalierUniversitaires(): Array<CentreHospitalierUniversitaireDto> {
        return this.centreHospitalierUniversitaireService.items;
   }
   set centreHospitalierUniversitaires(value: Array<CentreHospitalierUniversitaireDto>) {
        this.centreHospitalierUniversitaireService.items = value;
   }
   get createCentreHospitalierUniversitaireDialog(): boolean {
       return this.centreHospitalierUniversitaireService.createDialog;
   }
  set createCentreHospitalierUniversitaireDialog(value: boolean) {
       this.centreHospitalierUniversitaireService.createDialog= value;
   }

    get uniteAdministrativesElement(): UniteAdministrativeDto {
        if( this._uniteAdministrativesElement == null )
            this._uniteAdministrativesElement = new UniteAdministrativeDto();
         return this._uniteAdministrativesElement;
    }

    set uniteAdministrativesElement(value: UniteAdministrativeDto) {
        this._uniteAdministrativesElement = value;
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

    get validCentreHospitalierUniversitaireLibelle(): boolean {
        return this._validCentreHospitalierUniversitaireLibelle;
    }
    set validCentreHospitalierUniversitaireLibelle(value: boolean) {
        this._validCentreHospitalierUniversitaireLibelle = value;
    }
    get validCentreHospitalierUniversitaireCode(): boolean {
        return this._validCentreHospitalierUniversitaireCode;
    }
    set validCentreHospitalierUniversitaireCode(value: boolean) {
        this._validCentreHospitalierUniversitaireCode = value;
    }
    get validUniteAdministrativesLibelle(): boolean {
        return this._validUniteAdministrativesLibelle;
    }
    set validUniteAdministrativesLibelle(value: boolean) {
        this._validUniteAdministrativesLibelle = value;
    }
    get validUniteAdministrativesCode(): boolean {
        return this._validUniteAdministrativesCode;
    }
    set validUniteAdministrativesCode(value: boolean) {
        this._validUniteAdministrativesCode = value;
    }
}
