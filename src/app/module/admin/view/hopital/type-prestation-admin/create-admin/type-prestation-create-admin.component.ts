import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {TypePrestationService} from 'src/app/controller/service/TypePrestation.service';
import {TypePrestationDto} from 'src/app/controller/model/TypePrestation.model';
import {TypePrestationCriteria} from 'src/app/controller/criteria/TypePrestationCriteria.model';
@Component({
  selector: 'app-type-prestation-create-admin',
  templateUrl: './type-prestation-create-admin.component.html'
})
export class TypePrestationCreateAdminComponent extends AbstractCreateController<TypePrestationDto, TypePrestationCriteria, TypePrestationService>  implements OnInit {



   private _validTypePrestationLibelle = true;
   private _validTypePrestationCode = true;

    constructor( private typePrestationService: TypePrestationService ) {
        super(typePrestationService);
    }

    ngOnInit(): void {
}





    public setValidation(value: boolean){
        this.validTypePrestationLibelle = value;
        this.validTypePrestationCode = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateTypePrestationLibelle();
        this.validateTypePrestationCode();
    }

    public validateTypePrestationLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
        this.errorMessages.push('Libelle non valide');
        this.validTypePrestationLibelle = false;
        } else {
            this.validTypePrestationLibelle = true;
        }
    }
    public validateTypePrestationCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validTypePrestationCode = false;
        } else {
            this.validTypePrestationCode = true;
        }
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



}
