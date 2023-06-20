import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {StatusRdvService} from 'src/app/controller/service/StatusRdv.service';
import {StatusRdvDto} from 'src/app/controller/model/StatusRdv.model';
import {StatusRdvCriteria} from 'src/app/controller/criteria/StatusRdvCriteria.model';
@Component({
  selector: 'app-status-rdv-create-admin',
  templateUrl: './status-rdv-create-admin.component.html'
})
export class StatusRdvCreateAdminComponent extends AbstractCreateController<StatusRdvDto, StatusRdvCriteria, StatusRdvService>  implements OnInit {



   private _validStatusRdvLibelle = true;
   private _validStatusRdvCode = true;
   private _validStatusRdvStyle = true;

    constructor( private statusRdvService: StatusRdvService ) {
        super(statusRdvService);
    }

    ngOnInit(): void {
}





    public setValidation(value: boolean){
        this.validStatusRdvLibelle = value;
        this.validStatusRdvCode = value;
        this.validStatusRdvStyle = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateStatusRdvLibelle();
        this.validateStatusRdvCode();
        this.validateStatusRdvStyle();
    }

    public validateStatusRdvLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
        this.errorMessages.push('Libelle non valide');
        this.validStatusRdvLibelle = false;
        } else {
            this.validStatusRdvLibelle = true;
        }
    }
    public validateStatusRdvCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validStatusRdvCode = false;
        } else {
            this.validStatusRdvCode = true;
        }
    }
    public validateStatusRdvStyle(){
        if (this.stringUtilService.isEmpty(this.item.style)) {
        this.errorMessages.push('Style non valide');
        this.validStatusRdvStyle = false;
        } else {
            this.validStatusRdvStyle = true;
        }
    }






    get validStatusRdvLibelle(): boolean {
        return this._validStatusRdvLibelle;
    }

    set validStatusRdvLibelle(value: boolean) {
         this._validStatusRdvLibelle = value;
    }
    get validStatusRdvCode(): boolean {
        return this._validStatusRdvCode;
    }

    set validStatusRdvCode(value: boolean) {
         this._validStatusRdvCode = value;
    }
    get validStatusRdvStyle(): boolean {
        return this._validStatusRdvStyle;
    }

    set validStatusRdvStyle(value: boolean) {
         this._validStatusRdvStyle = value;
    }



}
