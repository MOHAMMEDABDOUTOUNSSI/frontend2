import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {JourFerieService} from 'src/app/controller/service/JourFerie.service';
import {JourFerieDto} from 'src/app/controller/model/JourFerie.model';
import {JourFerieCriteria} from 'src/app/controller/criteria/JourFerieCriteria.model';



@Component({
  selector: 'app-jour-ferie-edit-admin',
  templateUrl: './jour-ferie-edit-admin.component.html'
})
export class JourFerieEditAdminComponent extends AbstractEditController<JourFerieDto, JourFerieCriteria, JourFerieService>   implements OnInit {


    private _validJourFerieCode = true;
    private _validJourFerieLibelle = true;
    private _validJourFerieDateDebut = true;
    private _validJourFerieDateFin = true;




    constructor( private jourFerieService: JourFerieService ) {
        super(jourFerieService);
    }

    ngOnInit(): void {
}
    public prepareEdit() {
        this.item.dateDebut = this.jourFerieService.format(this.item.dateDebut);
        this.item.dateFin = this.jourFerieService.format(this.item.dateFin);
    }



    public setValidation(value : boolean){
        this.validJourFerieCode = value;
        this.validJourFerieLibelle = value;
        this.validJourFerieDateDebut = value;
        this.validJourFerieDateFin = value;
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateJourFerieCode();
        this.validateJourFerieLibelle();
        this.validateJourFerieDateDebut();
        this.validateJourFerieDateFin();
    }
    public validateJourFerieCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validJourFerieCode = false;
        } else {
            this.validJourFerieCode = true;
        }
    }
    public validateJourFerieLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validJourFerieLibelle = false;
        } else {
            this.validJourFerieLibelle = true;
        }
    }
    public validateJourFerieDateDebut(){
        if (this.stringUtilService.isEmpty(this.item.dateDebut)) {
            this.errorMessages.push('Date debut non valide');
            this.validJourFerieDateDebut = false;
        } else {
            this.validJourFerieDateDebut = true;
        }
    }
    public validateJourFerieDateFin(){
        if (this.stringUtilService.isEmpty(this.item.dateFin)) {
            this.errorMessages.push('Date fin non valide');
            this.validJourFerieDateFin = false;
        } else {
            this.validJourFerieDateFin = true;
        }
    }






    get validJourFerieCode(): boolean {
        return this._validJourFerieCode;
    }
    set validJourFerieCode(value: boolean) {
        this._validJourFerieCode = value;
    }
    get validJourFerieLibelle(): boolean {
        return this._validJourFerieLibelle;
    }
    set validJourFerieLibelle(value: boolean) {
        this._validJourFerieLibelle = value;
    }
    get validJourFerieDateDebut(): boolean {
        return this._validJourFerieDateDebut;
    }
    set validJourFerieDateDebut(value: boolean) {
        this._validJourFerieDateDebut = value;
    }
    get validJourFerieDateFin(): boolean {
        return this._validJourFerieDateFin;
    }
    set validJourFerieDateFin(value: boolean) {
        this._validJourFerieDateFin = value;
    }

}
