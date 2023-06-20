import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {PatientService} from 'src/app/controller/service/Patient.service';
import {PatientDto} from 'src/app/controller/model/Patient.model';
import {PatientCriteria} from 'src/app/controller/criteria/PatientCriteria.model';



@Component({
  selector: 'app-patient-edit-admin',
  templateUrl: './patient-edit-admin.component.html'
})
export class PatientEditAdminComponent extends AbstractEditController<PatientDto, PatientCriteria, PatientService>   implements OnInit {


    private _validPatientIpp = true;
    private _validPatientAdresse = true;
    private _validPatientEmail = true;
    private _validPatientCin = true;




    constructor( private patientService: PatientService ) {
        super(patientService);
    }

    ngOnInit(): void {
}


    public setValidation(value : boolean){
        this.validPatientIpp = value;
        this.validPatientAdresse = value;
        this.validPatientEmail = value;
        this.validPatientCin = value;
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validatePatientIpp();
        this.validatePatientAdresse();
        this.validatePatientEmail();
        this.validatePatientCin();
    }
    public validatePatientIpp(){
        if (this.stringUtilService.isEmpty(this.item.ipp)) {
            this.errorMessages.push('Ipp non valide');
            this.validPatientIpp = false;
        } else {
            this.validPatientIpp = true;
        }
    }
    public validatePatientAdresse(){
        if (this.stringUtilService.isEmpty(this.item.adresse)) {
            this.errorMessages.push('Adresse non valide');
            this.validPatientAdresse = false;
        } else {
            this.validPatientAdresse = true;
        }
    }
    public validatePatientEmail(){
        if (this.stringUtilService.isEmpty(this.item.email)) {
            this.errorMessages.push('Email non valide');
            this.validPatientEmail = false;
        } else {
            this.validPatientEmail = true;
        }
    }
    public validatePatientCin(){
        if (this.stringUtilService.isEmpty(this.item.cin)) {
            this.errorMessages.push('Cin non valide');
            this.validPatientCin = false;
        } else {
            this.validPatientCin = true;
        }
    }






    get validPatientIpp(): boolean {
        return this._validPatientIpp;
    }
    set validPatientIpp(value: boolean) {
        this._validPatientIpp = value;
    }
    get validPatientAdresse(): boolean {
        return this._validPatientAdresse;
    }
    set validPatientAdresse(value: boolean) {
        this._validPatientAdresse = value;
    }
    get validPatientEmail(): boolean {
        return this._validPatientEmail;
    }
    set validPatientEmail(value: boolean) {
        this._validPatientEmail = value;
    }
    get validPatientCin(): boolean {
        return this._validPatientCin;
    }
    set validPatientCin(value: boolean) {
        this._validPatientCin = value;
    }

}
