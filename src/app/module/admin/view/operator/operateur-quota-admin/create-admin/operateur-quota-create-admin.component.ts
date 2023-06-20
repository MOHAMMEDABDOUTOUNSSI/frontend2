import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {OperateurQuotaService} from 'src/app/controller/service/OperateurQuota.service';
import {OperateurQuotaDto} from 'src/app/controller/model/OperateurQuota.model';
import {OperateurQuotaCriteria} from 'src/app/controller/criteria/OperateurQuotaCriteria.model';
import {OperateurDto} from 'src/app/controller/model/Operateur.model';
import {OperateurService} from 'src/app/controller/service/Operateur.service';
import {PrestationDto} from 'src/app/controller/model/Prestation.model';
import {PrestationService} from 'src/app/controller/service/Prestation.service';
@Component({
  selector: 'app-operateur-quota-create-admin',
  templateUrl: './operateur-quota-create-admin.component.html'
})
export class OperateurQuotaCreateAdminComponent extends AbstractCreateController<OperateurQuotaDto, OperateurQuotaCriteria, OperateurQuotaService>  implements OnInit {



   private _validOperateurQuotaOperateur = true;
   private _validOperateurQuotaPrestation = true;
   private _validOperateurQuotaNombreMaxRdv = true;
    private _validOperateurCin = true;
    private _validPrestationLibelle = true;
    private _validPrestationCode = true;
    private _validPrestationTypePrestation = true;
    private _validPrestationDureeEnMiniute = true;

    constructor( private operateurQuotaService: OperateurQuotaService , private operateurService: OperateurService, private prestationService: PrestationService) {
        super(operateurQuotaService);
    }

    ngOnInit(): void {
    this.operateur = new OperateurDto();
    this.operateurService.findAll().subscribe((data) => this.operateurs = data);
    this.prestation = new PrestationDto();
    this.prestationService.findAll().subscribe((data) => this.prestations = data);
}





    public setValidation(value: boolean){
        this.validOperateurQuotaOperateur = value;
        this.validOperateurQuotaPrestation = value;
        this.validOperateurQuotaNombreMaxRdv = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateOperateurQuotaOperateur();
        this.validateOperateurQuotaPrestation();
        this.validateOperateurQuotaNombreMaxRdv();
    }

    public validateOperateurQuotaOperateur(){
        if (this.stringUtilService.isEmpty(this.item.operateur)) {
        this.errorMessages.push('Operateur non valide');
        this.validOperateurQuotaOperateur = false;
        } else {
            this.validOperateurQuotaOperateur = true;
        }
    }
    public validateOperateurQuotaPrestation(){
        if (this.stringUtilService.isEmpty(this.item.prestation)) {
        this.errorMessages.push('Prestation non valide');
        this.validOperateurQuotaPrestation = false;
        } else {
            this.validOperateurQuotaPrestation = true;
        }
    }
    public validateOperateurQuotaNombreMaxRdv(){
        if (this.stringUtilService.isEmpty(this.item.nombreMaxRdv)) {
        this.errorMessages.push('Nombre max rdv non valide');
        this.validOperateurQuotaNombreMaxRdv = false;
        } else {
            this.validOperateurQuotaNombreMaxRdv = true;
        }
    }


    public async openCreateOperateur(operateur: string) {
    const isPermistted = await this.roleService.isPermitted('Operateur', 'add');
    if(isPermistted) {
         this.operateur = new OperateurDto();
         this.createOperateurDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }

    get prestation(): PrestationDto {
        return this.prestationService.item;
    }
    set prestation(value: PrestationDto) {
        this.prestationService.item = value;
    }
    get prestations(): Array<PrestationDto> {
        return this.prestationService.items;
    }
    set prestations(value: Array<PrestationDto>) {
        this.prestationService.items = value;
    }
    get createPrestationDialog(): boolean {
       return this.prestationService.createDialog;
    }
    set createPrestationDialog(value: boolean) {
        this.prestationService.createDialog= value;
    }
    get operateur(): OperateurDto {
        return this.operateurService.item;
    }
    set operateur(value: OperateurDto) {
        this.operateurService.item = value;
    }
    get operateurs(): Array<OperateurDto> {
        return this.operateurService.items;
    }
    set operateurs(value: Array<OperateurDto>) {
        this.operateurService.items = value;
    }
    get createOperateurDialog(): boolean {
       return this.operateurService.createDialog;
    }
    set createOperateurDialog(value: boolean) {
        this.operateurService.createDialog= value;
    }



    get validOperateurQuotaOperateur(): boolean {
        return this._validOperateurQuotaOperateur;
    }

    set validOperateurQuotaOperateur(value: boolean) {
         this._validOperateurQuotaOperateur = value;
    }
    get validOperateurQuotaPrestation(): boolean {
        return this._validOperateurQuotaPrestation;
    }

    set validOperateurQuotaPrestation(value: boolean) {
         this._validOperateurQuotaPrestation = value;
    }
    get validOperateurQuotaNombreMaxRdv(): boolean {
        return this._validOperateurQuotaNombreMaxRdv;
    }

    set validOperateurQuotaNombreMaxRdv(value: boolean) {
         this._validOperateurQuotaNombreMaxRdv = value;
    }

    get validOperateurCin(): boolean {
        return this._validOperateurCin;
    }
    set validOperateurCin(value: boolean) {
        this._validOperateurCin = value;
    }
    get validPrestationLibelle(): boolean {
        return this._validPrestationLibelle;
    }
    set validPrestationLibelle(value: boolean) {
        this._validPrestationLibelle = value;
    }
    get validPrestationCode(): boolean {
        return this._validPrestationCode;
    }
    set validPrestationCode(value: boolean) {
        this._validPrestationCode = value;
    }
    get validPrestationTypePrestation(): boolean {
        return this._validPrestationTypePrestation;
    }
    set validPrestationTypePrestation(value: boolean) {
        this._validPrestationTypePrestation = value;
    }
    get validPrestationDureeEnMiniute(): boolean {
        return this._validPrestationDureeEnMiniute;
    }
    set validPrestationDureeEnMiniute(value: boolean) {
        this._validPrestationDureeEnMiniute = value;
    }


}
