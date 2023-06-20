import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {DemandeRdvService} from 'src/app/controller/service/DemandeRdv.service';
import {DemandeRdvDto} from 'src/app/controller/model/DemandeRdv.model';
import {DemandeRdvCriteria} from 'src/app/controller/criteria/DemandeRdvCriteria.model';
import {HopitalDto} from 'src/app/controller/model/Hopital.model';
import {HopitalService} from 'src/app/controller/service/Hopital.service';
import {TemplateEmailConfirmationDto} from 'src/app/controller/model/TemplateEmailConfirmation.model';
import {TemplateEmailConfirmationService} from 'src/app/controller/service/TemplateEmailConfirmation.service';
import {CauseRejetDemandeRdvDto} from 'src/app/controller/model/CauseRejetDemandeRdv.model';
import {CauseRejetDemandeRdvService} from 'src/app/controller/service/CauseRejetDemandeRdv.service';
import {PatientDto} from 'src/app/controller/model/Patient.model';
import {PatientService} from 'src/app/controller/service/Patient.service';
import {StatusRdvDto} from 'src/app/controller/model/StatusRdv.model';
import {StatusRdvService} from 'src/app/controller/service/StatusRdv.service';
import {OperateurDto} from 'src/app/controller/model/Operateur.model';
import {OperateurService} from 'src/app/controller/service/Operateur.service';
import {PrestationDto} from 'src/app/controller/model/Prestation.model';
import {PrestationService} from 'src/app/controller/service/Prestation.service';
import {CentreHospitalierUniversitaireDto} from 'src/app/controller/model/CentreHospitalierUniversitaire.model';
import {CentreHospitalierUniversitaireService} from 'src/app/controller/service/CentreHospitalierUniversitaire.service';
import {UniteAdministrativeDto} from 'src/app/controller/model/UniteAdministrative.model';
import {UniteAdministrativeService} from 'src/app/controller/service/UniteAdministrative.service';
@Component({
  selector: 'app-demande-rdv-create-admin',
  templateUrl: './demande-rdv-create-admin.component.html'
})
export class DemandeRdvCreateAdminComponent extends AbstractCreateController<DemandeRdvDto, DemandeRdvCriteria, DemandeRdvService>  implements OnInit {



   private _validDemandeRdvReference = true;
   private _validDemandeRdvPatient = true;
   private _validDemandeRdvIpp = true;
   private _validDemandeRdvNom = true;
   private _validDemandeRdvPrenom = true;
   private _validDemandeRdvAdresse = true;
   private _validDemandeRdvEmail = true;
   private _validDemandeRdvCin = true;
   private _validDemandeRdvObservation = true;
   private _validDemandeRdvFicheReferencePath = true;
    private _validPatientIpp = true;
    private _validPatientAdresse = true;
    private _validPatientEmail = true;
    private _validPatientCin = true;
    private _validOperateurCin = true;
    private _validCentreHospitalierUniversitaireLibelle = true;
    private _validCentreHospitalierUniversitaireCode = true;
    private _validHopitalLibelle = true;
    private _validHopitalCode = true;
    private _validUniteAdministrativeLibelle = true;
    private _validUniteAdministrativeCode = true;
    private _validPrestationLibelle = true;
    private _validPrestationCode = true;
    private _validPrestationTypePrestation = true;
    private _validPrestationDureeEnMiniute = true;
    private _validStatusRdvLibelle = true;
    private _validStatusRdvCode = true;
    private _validStatusRdvStyle = true;
    private _validCauseRejetDemandeRdvLibelle = true;
    private _validCauseRejetDemandeRdvCode = true;
    private _validTemplateEmailConfirmationLibelle = true;
    private _validTemplateEmailConfirmationObjet = true;
    private _validTemplateEmailConfirmationCorps = true;

    constructor( private demandeRdvService: DemandeRdvService , private hopitalService: HopitalService, private templateEmailConfirmationService: TemplateEmailConfirmationService, private causeRejetDemandeRdvService: CauseRejetDemandeRdvService, private patientService: PatientService, private statusRdvService: StatusRdvService, private operateurService: OperateurService, private prestationService: PrestationService, private centreHospitalierUniversitaireService: CentreHospitalierUniversitaireService, private uniteAdministrativeService: UniteAdministrativeService) {
        super(demandeRdvService);
    }

    ngOnInit(): void {
    this.patient = new PatientDto();
    this.patientService.findAll().subscribe((data) => this.patients = data);
    this.operateur = new OperateurDto();
    this.operateurService.findAll().subscribe((data) => this.operateurs = data);
    this.centreHospitalierUniversitaire = new CentreHospitalierUniversitaireDto();
    this.centreHospitalierUniversitaireService.findAll().subscribe((data) => this.centreHospitalierUniversitaires = data);
    this.hopital = new HopitalDto();
    this.hopitalService.findAll().subscribe((data) => this.hopitals = data);
    this.uniteAdministrative = new UniteAdministrativeDto();
    this.uniteAdministrativeService.findAll().subscribe((data) => this.uniteAdministratives = data);
    this.prestation = new PrestationDto();
    this.prestationService.findAll().subscribe((data) => this.prestations = data);
    this.statusRdv = new StatusRdvDto();
    this.statusRdvService.findAll().subscribe((data) => this.statusRdvs = data);
    this.causeRejetDemandeRdv = new CauseRejetDemandeRdvDto();
    this.causeRejetDemandeRdvService.findAll().subscribe((data) => this.causeRejetDemandeRdvs = data);
    this.templateEmailConfirmation = new TemplateEmailConfirmationDto();
    this.templateEmailConfirmationService.findAll().subscribe((data) => this.templateEmailConfirmations = data);
}





    public setValidation(value: boolean){
        this.validDemandeRdvReference = value;
        this.validDemandeRdvPatient = value;
        this.validDemandeRdvIpp = value;
        this.validDemandeRdvNom = value;
        this.validDemandeRdvPrenom = value;
        this.validDemandeRdvAdresse = value;
        this.validDemandeRdvEmail = value;
        this.validDemandeRdvCin = value;
        this.validDemandeRdvObservation = value;
        this.validDemandeRdvFicheReferencePath = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateDemandeRdvReference();
        this.validateDemandeRdvPatient();
        this.validateDemandeRdvIpp();
        this.validateDemandeRdvNom();
        this.validateDemandeRdvPrenom();
        this.validateDemandeRdvAdresse();
        this.validateDemandeRdvEmail();
        this.validateDemandeRdvCin();
        this.validateDemandeRdvObservation();
        this.validateDemandeRdvFicheReferencePath();
    }

    public validateDemandeRdvReference(){
        if (this.stringUtilService.isEmpty(this.item.reference)) {
        this.errorMessages.push('Reference non valide');
        this.validDemandeRdvReference = false;
        } else {
            this.validDemandeRdvReference = true;
        }
    }
    public validateDemandeRdvPatient(){
        if (this.stringUtilService.isEmpty(this.item.patient)) {
        this.errorMessages.push('Patient non valide');
        this.validDemandeRdvPatient = false;
        } else {
            this.validDemandeRdvPatient = true;
        }
    }
    public validateDemandeRdvIpp(){
        if (this.stringUtilService.isEmpty(this.item.ipp)) {
        this.errorMessages.push('Ipp non valide');
        this.validDemandeRdvIpp = false;
        } else {
            this.validDemandeRdvIpp = true;
        }
    }
    public validateDemandeRdvNom(){
        if (this.stringUtilService.isEmpty(this.item.nom)) {
        this.errorMessages.push('Nom non valide');
        this.validDemandeRdvNom = false;
        } else {
            this.validDemandeRdvNom = true;
        }
    }
    public validateDemandeRdvPrenom(){
        if (this.stringUtilService.isEmpty(this.item.prenom)) {
        this.errorMessages.push('Prenom non valide');
        this.validDemandeRdvPrenom = false;
        } else {
            this.validDemandeRdvPrenom = true;
        }
    }
    public validateDemandeRdvAdresse(){
        if (this.stringUtilService.isEmpty(this.item.adresse)) {
        this.errorMessages.push('Adresse non valide');
        this.validDemandeRdvAdresse = false;
        } else {
            this.validDemandeRdvAdresse = true;
        }
    }
    public validateDemandeRdvEmail(){
        if (this.stringUtilService.isEmpty(this.item.email)) {
        this.errorMessages.push('Email non valide');
        this.validDemandeRdvEmail = false;
        } else {
            this.validDemandeRdvEmail = true;
        }
    }
    public validateDemandeRdvCin(){
        if (this.stringUtilService.isEmpty(this.item.cin)) {
        this.errorMessages.push('Cin non valide');
        this.validDemandeRdvCin = false;
        } else {
            this.validDemandeRdvCin = true;
        }
    }
    public validateDemandeRdvObservation(){
        if (this.stringUtilService.isEmpty(this.item.observation)) {
        this.errorMessages.push('Observation non valide');
        this.validDemandeRdvObservation = false;
        } else {
            this.validDemandeRdvObservation = true;
        }
    }
    public validateDemandeRdvFicheReferencePath(){
        if (this.stringUtilService.isEmpty(this.item.ficheReferencePath)) {
        this.errorMessages.push('Fiche reference path non valide');
        this.validDemandeRdvFicheReferencePath = false;
        } else {
            this.validDemandeRdvFicheReferencePath = true;
        }
    }



    get hopital(): HopitalDto {
        return this.hopitalService.item;
    }
    set hopital(value: HopitalDto) {
        this.hopitalService.item = value;
    }
    get hopitals(): Array<HopitalDto> {
        return this.hopitalService.items;
    }
    set hopitals(value: Array<HopitalDto>) {
        this.hopitalService.items = value;
    }
    get createHopitalDialog(): boolean {
       return this.hopitalService.createDialog;
    }
    set createHopitalDialog(value: boolean) {
        this.hopitalService.createDialog= value;
    }
    get causeRejetDemandeRdv(): CauseRejetDemandeRdvDto {
        return this.causeRejetDemandeRdvService.item;
    }
    set causeRejetDemandeRdv(value: CauseRejetDemandeRdvDto) {
        this.causeRejetDemandeRdvService.item = value;
    }
    get causeRejetDemandeRdvs(): Array<CauseRejetDemandeRdvDto> {
        return this.causeRejetDemandeRdvService.items;
    }
    set causeRejetDemandeRdvs(value: Array<CauseRejetDemandeRdvDto>) {
        this.causeRejetDemandeRdvService.items = value;
    }
    get createCauseRejetDemandeRdvDialog(): boolean {
       return this.causeRejetDemandeRdvService.createDialog;
    }
    set createCauseRejetDemandeRdvDialog(value: boolean) {
        this.causeRejetDemandeRdvService.createDialog= value;
    }
    get templateEmailConfirmation(): TemplateEmailConfirmationDto {
        return this.templateEmailConfirmationService.item;
    }
    set templateEmailConfirmation(value: TemplateEmailConfirmationDto) {
        this.templateEmailConfirmationService.item = value;
    }
    get templateEmailConfirmations(): Array<TemplateEmailConfirmationDto> {
        return this.templateEmailConfirmationService.items;
    }
    set templateEmailConfirmations(value: Array<TemplateEmailConfirmationDto>) {
        this.templateEmailConfirmationService.items = value;
    }
    get createTemplateEmailConfirmationDialog(): boolean {
       return this.templateEmailConfirmationService.createDialog;
    }
    set createTemplateEmailConfirmationDialog(value: boolean) {
        this.templateEmailConfirmationService.createDialog= value;
    }
    get statusRdv(): StatusRdvDto {
        return this.statusRdvService.item;
    }
    set statusRdv(value: StatusRdvDto) {
        this.statusRdvService.item = value;
    }
    get statusRdvs(): Array<StatusRdvDto> {
        return this.statusRdvService.items;
    }
    set statusRdvs(value: Array<StatusRdvDto>) {
        this.statusRdvService.items = value;
    }
    get createStatusRdvDialog(): boolean {
       return this.statusRdvService.createDialog;
    }
    set createStatusRdvDialog(value: boolean) {
        this.statusRdvService.createDialog= value;
    }
    get patient(): PatientDto {
        return this.patientService.item;
    }
    set patient(value: PatientDto) {
        this.patientService.item = value;
    }
    get patients(): Array<PatientDto> {
        return this.patientService.items;
    }
    set patients(value: Array<PatientDto>) {
        this.patientService.items = value;
    }
    get createPatientDialog(): boolean {
       return this.patientService.createDialog;
    }
    set createPatientDialog(value: boolean) {
        this.patientService.createDialog= value;
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
    get uniteAdministrative(): UniteAdministrativeDto {
        return this.uniteAdministrativeService.item;
    }
    set uniteAdministrative(value: UniteAdministrativeDto) {
        this.uniteAdministrativeService.item = value;
    }
    get uniteAdministratives(): Array<UniteAdministrativeDto> {
        return this.uniteAdministrativeService.items;
    }
    set uniteAdministratives(value: Array<UniteAdministrativeDto>) {
        this.uniteAdministrativeService.items = value;
    }
    get createUniteAdministrativeDialog(): boolean {
       return this.uniteAdministrativeService.createDialog;
    }
    set createUniteAdministrativeDialog(value: boolean) {
        this.uniteAdministrativeService.createDialog= value;
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
    get centreHospitalierUniversitaire(): CentreHospitalierUniversitaireDto {
        return this.centreHospitalierUniversitaireService.item;
    }
    set centreHospitalierUniversitaire(value: CentreHospitalierUniversitaireDto) {
        this.centreHospitalierUniversitaireService.item = value;
    }
    get centreHospitalierUniversitaires(): Array<CentreHospitalierUniversitaireDto> {
        return this.centreHospitalierUniversitaireService.items;
    }
    set centreHospitalierUniversitaires(value: Array<CentreHospitalierUniversitaireDto>) {
        this.centreHospitalierUniversitaireService.items = value;
    }
    get createCentreHospitalierUniversitaireDialog(): boolean {
       return this.centreHospitalierUniversitaireService.createDialog;
    }
    set createCentreHospitalierUniversitaireDialog(value: boolean) {
        this.centreHospitalierUniversitaireService.createDialog= value;
    }



    get validDemandeRdvReference(): boolean {
        return this._validDemandeRdvReference;
    }

    set validDemandeRdvReference(value: boolean) {
         this._validDemandeRdvReference = value;
    }
    get validDemandeRdvPatient(): boolean {
        return this._validDemandeRdvPatient;
    }

    set validDemandeRdvPatient(value: boolean) {
         this._validDemandeRdvPatient = value;
    }
    get validDemandeRdvIpp(): boolean {
        return this._validDemandeRdvIpp;
    }

    set validDemandeRdvIpp(value: boolean) {
         this._validDemandeRdvIpp = value;
    }
    get validDemandeRdvNom(): boolean {
        return this._validDemandeRdvNom;
    }

    set validDemandeRdvNom(value: boolean) {
         this._validDemandeRdvNom = value;
    }
    get validDemandeRdvPrenom(): boolean {
        return this._validDemandeRdvPrenom;
    }

    set validDemandeRdvPrenom(value: boolean) {
         this._validDemandeRdvPrenom = value;
    }
    get validDemandeRdvAdresse(): boolean {
        return this._validDemandeRdvAdresse;
    }

    set validDemandeRdvAdresse(value: boolean) {
         this._validDemandeRdvAdresse = value;
    }
    get validDemandeRdvEmail(): boolean {
        return this._validDemandeRdvEmail;
    }

    set validDemandeRdvEmail(value: boolean) {
         this._validDemandeRdvEmail = value;
    }
    get validDemandeRdvCin(): boolean {
        return this._validDemandeRdvCin;
    }

    set validDemandeRdvCin(value: boolean) {
         this._validDemandeRdvCin = value;
    }
    get validDemandeRdvObservation(): boolean {
        return this._validDemandeRdvObservation;
    }

    set validDemandeRdvObservation(value: boolean) {
         this._validDemandeRdvObservation = value;
    }
    get validDemandeRdvFicheReferencePath(): boolean {
        return this._validDemandeRdvFicheReferencePath;
    }

    set validDemandeRdvFicheReferencePath(value: boolean) {
         this._validDemandeRdvFicheReferencePath = value;
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
    get validOperateurCin(): boolean {
        return this._validOperateurCin;
    }
    set validOperateurCin(value: boolean) {
        this._validOperateurCin = value;
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
    get validHopitalLibelle(): boolean {
        return this._validHopitalLibelle;
    }
    set validHopitalLibelle(value: boolean) {
        this._validHopitalLibelle = value;
    }
    get validHopitalCode(): boolean {
        return this._validHopitalCode;
    }
    set validHopitalCode(value: boolean) {
        this._validHopitalCode = value;
    }
    get validUniteAdministrativeLibelle(): boolean {
        return this._validUniteAdministrativeLibelle;
    }
    set validUniteAdministrativeLibelle(value: boolean) {
        this._validUniteAdministrativeLibelle = value;
    }
    get validUniteAdministrativeCode(): boolean {
        return this._validUniteAdministrativeCode;
    }
    set validUniteAdministrativeCode(value: boolean) {
        this._validUniteAdministrativeCode = value;
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
