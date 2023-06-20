import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {CelluleValidationService} from 'src/app/controller/service/CelluleValidation.service';
import {CelluleValidationDto} from 'src/app/controller/model/CelluleValidation.model';
import {CelluleValidationCriteria} from 'src/app/controller/criteria/CelluleValidationCriteria.model';
@Component({
  selector: 'app-cellule-validation-create-admin',
  templateUrl: './cellule-validation-create-admin.component.html'
})
export class CelluleValidationCreateAdminComponent extends AbstractCreateController<CelluleValidationDto, CelluleValidationCriteria, CelluleValidationService>  implements OnInit {



   private _validCelluleValidationLibelle = true;
   private _validCelluleValidationCode = true;

    constructor( private celluleValidationService: CelluleValidationService ) {
        super(celluleValidationService);
    }

    ngOnInit(): void {
}





    public setValidation(value: boolean){
        this.validCelluleValidationLibelle = value;
        this.validCelluleValidationCode = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateCelluleValidationLibelle();
        this.validateCelluleValidationCode();
    }

    public validateCelluleValidationLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
        this.errorMessages.push('Libelle non valide');
        this.validCelluleValidationLibelle = false;
        } else {
            this.validCelluleValidationLibelle = true;
        }
    }
    public validateCelluleValidationCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validCelluleValidationCode = false;
        } else {
            this.validCelluleValidationCode = true;
        }
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



}
