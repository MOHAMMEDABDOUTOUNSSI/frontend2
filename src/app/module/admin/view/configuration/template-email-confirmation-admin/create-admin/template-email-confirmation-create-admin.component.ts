import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {TemplateEmailConfirmationService} from 'src/app/controller/service/TemplateEmailConfirmation.service';
import {TemplateEmailConfirmationDto} from 'src/app/controller/model/TemplateEmailConfirmation.model';
import {TemplateEmailConfirmationCriteria} from 'src/app/controller/criteria/TemplateEmailConfirmationCriteria.model';
@Component({
  selector: 'app-template-email-confirmation-create-admin',
  templateUrl: './template-email-confirmation-create-admin.component.html'
})
export class TemplateEmailConfirmationCreateAdminComponent extends AbstractCreateController<TemplateEmailConfirmationDto, TemplateEmailConfirmationCriteria, TemplateEmailConfirmationService>  implements OnInit {



   private _validTemplateEmailConfirmationLibelle = true;
   private _validTemplateEmailConfirmationObjet = true;
   private _validTemplateEmailConfirmationCorps = true;

    constructor( private templateEmailConfirmationService: TemplateEmailConfirmationService ) {
        super(templateEmailConfirmationService);
    }

    ngOnInit(): void {
}





    public setValidation(value: boolean){
        this.validTemplateEmailConfirmationLibelle = value;
        this.validTemplateEmailConfirmationObjet = value;
        this.validTemplateEmailConfirmationCorps = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateTemplateEmailConfirmationLibelle();
        this.validateTemplateEmailConfirmationObjet();
        this.validateTemplateEmailConfirmationCorps();
    }

    public validateTemplateEmailConfirmationLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
        this.errorMessages.push('Libelle non valide');
        this.validTemplateEmailConfirmationLibelle = false;
        } else {
            this.validTemplateEmailConfirmationLibelle = true;
        }
    }
    public validateTemplateEmailConfirmationObjet(){
        if (this.stringUtilService.isEmpty(this.item.objet)) {
        this.errorMessages.push('Objet non valide');
        this.validTemplateEmailConfirmationObjet = false;
        } else {
            this.validTemplateEmailConfirmationObjet = true;
        }
    }
    public validateTemplateEmailConfirmationCorps(){
        if (this.stringUtilService.isEmpty(this.item.corps)) {
        this.errorMessages.push('Corps non valide');
        this.validTemplateEmailConfirmationCorps = false;
        } else {
            this.validTemplateEmailConfirmationCorps = true;
        }
    }






    get validTemplateEmailConfirmationLibelle(): boolean {
        return this._validTemplateEmailConfirmationLibelle;
    }

    set validTemplateEmailConfirmationLibelle(value: boolean) {
         this._validTemplateEmailConfirmationLibelle = value;
    }
    get validTemplateEmailConfirmationObjet(): boolean {
        return this._validTemplateEmailConfirmationObjet;
    }

    set validTemplateEmailConfirmationObjet(value: boolean) {
         this._validTemplateEmailConfirmationObjet = value;
    }
    get validTemplateEmailConfirmationCorps(): boolean {
        return this._validTemplateEmailConfirmationCorps;
    }

    set validTemplateEmailConfirmationCorps(value: boolean) {
         this._validTemplateEmailConfirmationCorps = value;
    }



}
