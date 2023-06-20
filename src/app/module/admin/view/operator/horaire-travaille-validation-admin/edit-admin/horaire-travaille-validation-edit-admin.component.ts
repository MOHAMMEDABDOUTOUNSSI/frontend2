import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {HoraireTravailleValidationService} from 'src/app/controller/service/HoraireTravailleValidation.service';
import {HoraireTravailleValidationDto} from 'src/app/controller/model/HoraireTravailleValidation.model';
import {HoraireTravailleValidationCriteria} from 'src/app/controller/criteria/HoraireTravailleValidationCriteria.model';



@Component({
  selector: 'app-horaire-travaille-validation-edit-admin',
  templateUrl: './horaire-travaille-validation-edit-admin.component.html'
})
export class HoraireTravailleValidationEditAdminComponent extends AbstractEditController<HoraireTravailleValidationDto, HoraireTravailleValidationCriteria, HoraireTravailleValidationService>   implements OnInit {


    private _validHoraireTravailleValidationLibelle = true;
    private _validHoraireTravailleValidationDaysOfWeek = true;
    private _validHoraireTravailleValidationMonth = true;




    constructor( private horaireTravailleValidationService: HoraireTravailleValidationService ) {
        super(horaireTravailleValidationService);
    }

    ngOnInit(): void {
}


    public setValidation(value : boolean){
        this.validHoraireTravailleValidationLibelle = value;
        this.validHoraireTravailleValidationDaysOfWeek = value;
        this.validHoraireTravailleValidationMonth = value;
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateHoraireTravailleValidationLibelle();
        this.validateHoraireTravailleValidationDaysOfWeek();
        this.validateHoraireTravailleValidationMonth();
    }
    public validateHoraireTravailleValidationLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validHoraireTravailleValidationLibelle = false;
        } else {
            this.validHoraireTravailleValidationLibelle = true;
        }
    }
    public validateHoraireTravailleValidationDaysOfWeek(){
        if (this.stringUtilService.isEmpty(this.item.daysOfWeek)) {
            this.errorMessages.push('Days of week non valide');
            this.validHoraireTravailleValidationDaysOfWeek = false;
        } else {
            this.validHoraireTravailleValidationDaysOfWeek = true;
        }
    }
    public validateHoraireTravailleValidationMonth(){
        if (this.stringUtilService.isEmpty(this.item.month)) {
            this.errorMessages.push('Month non valide');
            this.validHoraireTravailleValidationMonth = false;
        } else {
            this.validHoraireTravailleValidationMonth = true;
        }
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

}
