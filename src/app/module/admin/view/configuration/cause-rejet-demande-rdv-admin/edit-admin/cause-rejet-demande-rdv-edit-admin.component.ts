import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {CauseRejetDemandeRdvService} from 'src/app/controller/service/CauseRejetDemandeRdv.service';
import {CauseRejetDemandeRdvDto} from 'src/app/controller/model/CauseRejetDemandeRdv.model';
import {CauseRejetDemandeRdvCriteria} from 'src/app/controller/criteria/CauseRejetDemandeRdvCriteria.model';



@Component({
  selector: 'app-cause-rejet-demande-rdv-edit-admin',
  templateUrl: './cause-rejet-demande-rdv-edit-admin.component.html'
})
export class CauseRejetDemandeRdvEditAdminComponent extends AbstractEditController<CauseRejetDemandeRdvDto, CauseRejetDemandeRdvCriteria, CauseRejetDemandeRdvService>   implements OnInit {


    private _validCauseRejetDemandeRdvLibelle = true;
    private _validCauseRejetDemandeRdvCode = true;




    constructor( private causeRejetDemandeRdvService: CauseRejetDemandeRdvService ) {
        super(causeRejetDemandeRdvService);
    }

    ngOnInit(): void {
}


    public setValidation(value : boolean){
        this.validCauseRejetDemandeRdvLibelle = value;
        this.validCauseRejetDemandeRdvCode = value;
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateCauseRejetDemandeRdvLibelle();
        this.validateCauseRejetDemandeRdvCode();
    }
    public validateCauseRejetDemandeRdvLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validCauseRejetDemandeRdvLibelle = false;
        } else {
            this.validCauseRejetDemandeRdvLibelle = true;
        }
    }
    public validateCauseRejetDemandeRdvCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validCauseRejetDemandeRdvCode = false;
        } else {
            this.validCauseRejetDemandeRdvCode = true;
        }
    }






    get validCauseRejetDemandeRdvLibelle(): boolean {
        return this._validCauseRejetDemandeRdvLibelle;
    }
    set validCauseRejetDemandeRdvLibelle(value: boolean) {
        this._validCauseRejetDemandeRdvLibelle = value;
    }
    get validCauseRejetDemandeRdvCode(): boolean {
        return this._validCauseRejetDemandeRdvCode;
    }
    set validCauseRejetDemandeRdvCode(value: boolean) {
        this._validCauseRejetDemandeRdvCode = value;
    }

}
