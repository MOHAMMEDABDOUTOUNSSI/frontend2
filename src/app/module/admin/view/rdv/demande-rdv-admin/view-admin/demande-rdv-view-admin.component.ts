import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

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
  selector: 'app-demande-rdv-view-admin',
  templateUrl: './demande-rdv-view-admin.component.html'
})
export class DemandeRdvViewAdminComponent extends AbstractViewController<DemandeRdvDto, DemandeRdvCriteria, DemandeRdvService> implements OnInit {


    constructor(private demandeRdvService: DemandeRdvService, private hopitalService: HopitalService, private templateEmailConfirmationService: TemplateEmailConfirmationService, private causeRejetDemandeRdvService: CauseRejetDemandeRdvService, private patientService: PatientService, private statusRdvService: StatusRdvService, private operateurService: OperateurService, private prestationService: PrestationService, private centreHospitalierUniversitaireService: CentreHospitalierUniversitaireService, private uniteAdministrativeService: UniteAdministrativeService){
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


    get hopital(): HopitalDto {
       return this.hopitalService.item;
    }
    set hopital(value: HopitalDto) {
        this.hopitalService.item = value;
    }
    get hopitals():Array<HopitalDto> {
       return this.hopitalService.items;
    }
    set hopitals(value: Array<HopitalDto>) {
        this.hopitalService.items = value;
    }
    get causeRejetDemandeRdv(): CauseRejetDemandeRdvDto {
       return this.causeRejetDemandeRdvService.item;
    }
    set causeRejetDemandeRdv(value: CauseRejetDemandeRdvDto) {
        this.causeRejetDemandeRdvService.item = value;
    }
    get causeRejetDemandeRdvs():Array<CauseRejetDemandeRdvDto> {
       return this.causeRejetDemandeRdvService.items;
    }
    set causeRejetDemandeRdvs(value: Array<CauseRejetDemandeRdvDto>) {
        this.causeRejetDemandeRdvService.items = value;
    }
    get templateEmailConfirmation(): TemplateEmailConfirmationDto {
       return this.templateEmailConfirmationService.item;
    }
    set templateEmailConfirmation(value: TemplateEmailConfirmationDto) {
        this.templateEmailConfirmationService.item = value;
    }
    get templateEmailConfirmations():Array<TemplateEmailConfirmationDto> {
       return this.templateEmailConfirmationService.items;
    }
    set templateEmailConfirmations(value: Array<TemplateEmailConfirmationDto>) {
        this.templateEmailConfirmationService.items = value;
    }
    get statusRdv(): StatusRdvDto {
       return this.statusRdvService.item;
    }
    set statusRdv(value: StatusRdvDto) {
        this.statusRdvService.item = value;
    }
    get statusRdvs():Array<StatusRdvDto> {
       return this.statusRdvService.items;
    }
    set statusRdvs(value: Array<StatusRdvDto>) {
        this.statusRdvService.items = value;
    }
    get patient(): PatientDto {
       return this.patientService.item;
    }
    set patient(value: PatientDto) {
        this.patientService.item = value;
    }
    get patients():Array<PatientDto> {
       return this.patientService.items;
    }
    set patients(value: Array<PatientDto>) {
        this.patientService.items = value;
    }
    get prestation(): PrestationDto {
       return this.prestationService.item;
    }
    set prestation(value: PrestationDto) {
        this.prestationService.item = value;
    }
    get prestations():Array<PrestationDto> {
       return this.prestationService.items;
    }
    set prestations(value: Array<PrestationDto>) {
        this.prestationService.items = value;
    }
    get uniteAdministrative(): UniteAdministrativeDto {
       return this.uniteAdministrativeService.item;
    }
    set uniteAdministrative(value: UniteAdministrativeDto) {
        this.uniteAdministrativeService.item = value;
    }
    get uniteAdministratives():Array<UniteAdministrativeDto> {
       return this.uniteAdministrativeService.items;
    }
    set uniteAdministratives(value: Array<UniteAdministrativeDto>) {
        this.uniteAdministrativeService.items = value;
    }
    get operateur(): OperateurDto {
       return this.operateurService.item;
    }
    set operateur(value: OperateurDto) {
        this.operateurService.item = value;
    }
    get operateurs():Array<OperateurDto> {
       return this.operateurService.items;
    }
    set operateurs(value: Array<OperateurDto>) {
        this.operateurService.items = value;
    }
    get centreHospitalierUniversitaire(): CentreHospitalierUniversitaireDto {
       return this.centreHospitalierUniversitaireService.item;
    }
    set centreHospitalierUniversitaire(value: CentreHospitalierUniversitaireDto) {
        this.centreHospitalierUniversitaireService.item = value;
    }
    get centreHospitalierUniversitaires():Array<CentreHospitalierUniversitaireDto> {
       return this.centreHospitalierUniversitaireService.items;
    }
    set centreHospitalierUniversitaires(value: Array<CentreHospitalierUniversitaireDto>) {
        this.centreHospitalierUniversitaireService.items = value;
    }


}
