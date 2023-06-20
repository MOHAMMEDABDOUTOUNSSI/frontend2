import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {CentreHospitalierUniversitaireService} from 'src/app/controller/service/CentreHospitalierUniversitaire.service';
import {CentreHospitalierUniversitaireDto} from 'src/app/controller/model/CentreHospitalierUniversitaire.model';
import {CentreHospitalierUniversitaireCriteria} from 'src/app/controller/criteria/CentreHospitalierUniversitaireCriteria.model';


import {HopitalDto} from 'src/app/controller/model/Hopital.model';
import {HopitalService} from 'src/app/controller/service/Hopital.service';
import {UniteAdministrativeDto} from 'src/app/controller/model/UniteAdministrative.model';
import {UniteAdministrativeService} from 'src/app/controller/service/UniteAdministrative.service';

@Component({
  selector: 'app-centre-hospitalier-universitaire-edit-admin',
  templateUrl: './centre-hospitalier-universitaire-edit-admin.component.html'
})
export class CentreHospitalierUniversitaireEditAdminComponent extends AbstractEditController<CentreHospitalierUniversitaireDto, CentreHospitalierUniversitaireCriteria, CentreHospitalierUniversitaireService>   implements OnInit {

    private _hopitalsElement = new HopitalDto();

    private _validCentreHospitalierUniversitaireLibelle = true;
    private _validCentreHospitalierUniversitaireCode = true;

    private _validHopitalsLibelle = true;
    private _validHopitalsCode = true;



    constructor( private centreHospitalierUniversitaireService: CentreHospitalierUniversitaireService , private hopitalService: HopitalService) {
        super(centreHospitalierUniversitaireService);
    }

    ngOnInit(): void {

}


    public validateHopitals(){
        this.errorMessages = new Array();
        this.validateHopitalsLibelle();
        this.validateHopitalsCode();
    }
    public setValidation(value : boolean){
        this.validCentreHospitalierUniversitaireLibelle = value;
        this.validCentreHospitalierUniversitaireCode = value;
        this.validHopitalsLibelle = value;
        this.validHopitalsCode = value;
        }
   public addHopitals() {
        if( this.item.hopitals == null )
            this.item.hopitals = new Array<HopitalDto>();
       this.validateHopitals();
       if (this.errorMessages.length === 0) {
            if(this.hopitalsElement.id == null){
                this.item.hopitals.push(this.hopitalsElement);
            }else{
                const index = this.item.hopitals.findIndex(e => e.id == this.hopitalsElement.id);
                this.item.hopitals[index] = this.hopitalsElement;
            }
          this.hopitalsElement = new HopitalDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs', detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
        }
   }

    public deleteHopital(p: HopitalDto) {
        this.item.hopitals.forEach((element, index) => {
            if (element === p) { this.item.hopitals.splice(index, 1); }
        });
    }

    public editHopital(p: HopitalDto) {
        this.hopitalsElement = {... p};
        this.activeTab = 0;
    }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateCentreHospitalierUniversitaireLibelle();
        this.validateCentreHospitalierUniversitaireCode();
    }
    public validateCentreHospitalierUniversitaireLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validCentreHospitalierUniversitaireLibelle = false;
        } else {
            this.validCentreHospitalierUniversitaireLibelle = true;
        }
    }
    public validateCentreHospitalierUniversitaireCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validCentreHospitalierUniversitaireCode = false;
        } else {
            this.validCentreHospitalierUniversitaireCode = true;
        }
    }


    private validateHopitalsLibelle(){
        if (this.hopitalsElement.libelle == null) {
        this.errorMessages.push('Libelle de la hopital est  invalide');
            this.validHopitalsLibelle = false;
        } else {
            this.validHopitalsLibelle = true;
        }
    }
    private validateHopitalsCode(){
        if (this.hopitalsElement.code == null) {
        this.errorMessages.push('Code de la hopital est  invalide');
            this.validHopitalsCode = false;
        } else {
            this.validHopitalsCode = true;
        }
    }



    get hopitalsElement(): HopitalDto {
        if( this._hopitalsElement == null )
            this._hopitalsElement = new HopitalDto();
         return this._hopitalsElement;
    }

    set hopitalsElement(value: HopitalDto) {
        this._hopitalsElement = value;
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

    get validHopitalsLibelle(): boolean {
        return this._validHopitalsLibelle;
    }
    set validHopitalsLibelle(value: boolean) {
        this._validHopitalsLibelle = value;
    }
    get validHopitalsCode(): boolean {
        return this._validHopitalsCode;
    }
    set validHopitalsCode(value: boolean) {
        this._validHopitalsCode = value;
    }
}
