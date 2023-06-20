import {Component, OnInit} from '@angular/core';
import {DemandeRdvService} from 'src/app/controller/service/DemandeRdv.service';
import {DemandeRdvDto} from 'src/app/controller/model/DemandeRdv.model';
import {DemandeRdvCriteria} from 'src/app/controller/criteria/DemandeRdvCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import { PatientService } from 'src/app/controller/service/Patient.service';
import { OperateurService } from 'src/app/controller/service/Operateur.service';
import { CentreHospitalierUniversitaireService } from 'src/app/controller/service/CentreHospitalierUniversitaire.service';
import { HopitalService } from 'src/app/controller/service/Hopital.service';
import { UniteAdministrativeService } from 'src/app/controller/service/UniteAdministrative.service';
import { PrestationService } from 'src/app/controller/service/Prestation.service';
import { StatusRdvService } from 'src/app/controller/service/StatusRdv.service';
import { CauseRejetDemandeRdvService } from 'src/app/controller/service/CauseRejetDemandeRdv.service';
import { TemplateEmailConfirmationService } from 'src/app/controller/service/TemplateEmailConfirmation.service';

import {CauseRejetDemandeRdvDto} from 'src/app/controller/model/CauseRejetDemandeRdv.model';
import {TemplateEmailConfirmationDto} from 'src/app/controller/model/TemplateEmailConfirmation.model';
import {CentreHospitalierUniversitaireDto} from 'src/app/controller/model/CentreHospitalierUniversitaire.model';
import {PatientDto} from 'src/app/controller/model/Patient.model';
import {HopitalDto} from 'src/app/controller/model/Hopital.model';
import {UniteAdministrativeDto} from 'src/app/controller/model/UniteAdministrative.model';
import {OperateurDto} from 'src/app/controller/model/Operateur.model';
import {StatusRdvDto} from 'src/app/controller/model/StatusRdv.model';
import {PrestationDto} from 'src/app/controller/model/Prestation.model';


@Component({
  selector: 'app-demande-rdv-list-admin',
  templateUrl: './demande-rdv-list-admin.component.html'
})
export class DemandeRdvListAdminComponent extends AbstractListController<DemandeRdvDto, DemandeRdvCriteria, DemandeRdvService>  implements OnInit {

    fileName = 'DemandeRdv';

    patients :Array<PatientDto>;
    operateurs :Array<OperateurDto>;
    centreHospitalierUniversitaires :Array<CentreHospitalierUniversitaireDto>;
    hopitals :Array<HopitalDto>;
    uniteAdministratives :Array<UniteAdministrativeDto>;
    prestations :Array<PrestationDto>;
    statusRdvs :Array<StatusRdvDto>;
    causeRejetDemandeRdvs :Array<CauseRejetDemandeRdvDto>;
    templateEmailConfirmations :Array<TemplateEmailConfirmationDto>;
  
    constructor(demandeRdvService: DemandeRdvService, private patientService: PatientService, private operateurService: OperateurService, private centreHospitalierUniversitaireService: CentreHospitalierUniversitaireService, private hopitalService: HopitalService, private uniteAdministrativeService: UniteAdministrativeService, private prestationService: PrestationService, private statusRdvService: StatusRdvService, private causeRejetDemandeRdvService: CauseRejetDemandeRdvService, private templateEmailConfirmationService: TemplateEmailConfirmationService) {
        super(demandeRdvService);
        this.pdfName='DemandeRdv.pdf';
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadPatient();
      this.loadOperateur();
      this.loadCentreHospitalierUniversitaire();
      this.loadHopital();
      this.loadUniteAdministrative();
      this.loadPrestation();
      this.loadStatusRdv();
      this.loadCauseRejetDemandeRdv();
      this.loadTemplateEmailConfirmation();
    }

    public async loadDemandeRdvs(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('DemandeRdv', 'list');
        isPermistted ? this.service.findAll().subscribe(demandeRdvs => this.items = demandeRdvs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'reference', header: 'Reference'},
            {field: 'patient?.ipp', header: 'Patient'},
            {field: 'ipp', header: 'Ipp'},
            {field: 'nom', header: 'Nom'},
            {field: 'prenom', header: 'Prenom'},
            {field: 'email', header: 'Email'},
            {field: 'cin', header: 'Cin'},
            {field: 'codeRamed', header: 'Code ramed'},
            {field: 'operateur?.cin', header: 'Operateur'},
            {field: 'centreHospitalierUniversitaire?.libelle', header: 'Centre hospitalier universitaire'},
            {field: 'hopital?.libelle', header: 'Hopital'},
            {field: 'uniteAdministrative?.libelle', header: 'Unite administrative'},
            {field: 'prestation?.libelle', header: 'Prestation'},
            {field: 'statusRdv?.libelle', header: 'Status rdv'},
            {field: 'ficheReferencePath', header: 'Fiche reference path'},
            {field: 'causeRejetDemandeRdv?.libelle', header: 'Cause rejet demande rdv'},
            {field: 'dateDemandeRdv', header: 'Date demande rdv'},
            {field: 'datePrevu', header: 'Date prevu'},
            {field: 'dateEffective', header: 'Date effective'},
            {field: 'dateValidation', header: 'Date validation'},
            {field: 'dateRejet', header: 'Date rejet'},
            {field: 'nombreReccurenceTotal', header: 'Nombre reccurence total'},
            {field: 'nombreReccurenceValide', header: 'Nombre reccurence valide'},
            {field: 'nombreReccurenceRejet', header: 'Nombre reccurence rejet'},
            {field: 'templateEmailConfirmation?.libelle', header: 'Template email confirmation'},
        ];
    }


    public async loadPatient(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('DemandeRdv', 'list');
        isPermistted ? this.patientService.findAllOptimized().subscribe(patients => this.patients = patients,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadOperateur(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('DemandeRdv', 'list');
        isPermistted ? this.operateurService.findAllOptimized().subscribe(operateurs => this.operateurs = operateurs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadCentreHospitalierUniversitaire(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('DemandeRdv', 'list');
        isPermistted ? this.centreHospitalierUniversitaireService.findAllOptimized().subscribe(centreHospitalierUniversitaires => this.centreHospitalierUniversitaires = centreHospitalierUniversitaires,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadHopital(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('DemandeRdv', 'list');
        isPermistted ? this.hopitalService.findAllOptimized().subscribe(hopitals => this.hopitals = hopitals,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadUniteAdministrative(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('DemandeRdv', 'list');
        isPermistted ? this.uniteAdministrativeService.findAllOptimized().subscribe(uniteAdministratives => this.uniteAdministratives = uniteAdministratives,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadPrestation(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('DemandeRdv', 'list');
        isPermistted ? this.prestationService.findAllOptimized().subscribe(prestations => this.prestations = prestations,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadStatusRdv(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('DemandeRdv', 'list');
        isPermistted ? this.statusRdvService.findAllOptimized().subscribe(statusRdvs => this.statusRdvs = statusRdvs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadCauseRejetDemandeRdv(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('DemandeRdv', 'list');
        isPermistted ? this.causeRejetDemandeRdvService.findAllOptimized().subscribe(causeRejetDemandeRdvs => this.causeRejetDemandeRdvs = causeRejetDemandeRdvs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadTemplateEmailConfirmation(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('DemandeRdv', 'list');
        isPermistted ? this.templateEmailConfirmationService.findAllOptimized().subscribe(templateEmailConfirmations => this.templateEmailConfirmations = templateEmailConfirmations,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: DemandeRdvDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Reference': e.reference ,
                'Patient': e.patient?.ipp ,
                 'Ipp': e.ipp ,
                 'Nom': e.nom ,
                 'Prenom': e.prenom ,
                 'Adresse': e.adresse ,
                 'Email': e.email ,
                 'Cin': e.cin ,
                 'Code ramed': e.codeRamed ,
                 'Observation': e.observation ,
                'Operateur': e.operateur?.cin ,
                'Centre hospitalier universitaire': e.centreHospitalierUniversitaire?.libelle ,
                'Hopital': e.hopital?.libelle ,
                'Unite administrative': e.uniteAdministrative?.libelle ,
                'Prestation': e.prestation?.libelle ,
                'Status rdv': e.statusRdv?.libelle ,
                 'Fiche reference path': e.ficheReferencePath ,
                'Cause rejet demande rdv': e.causeRejetDemandeRdv?.libelle ,
                'Date demande rdv': this.datePipe.transform(e.dateDemandeRdv , 'dd/MM/yyyy hh:mm'),
                'Date prevu': this.datePipe.transform(e.datePrevu , 'dd/MM/yyyy hh:mm'),
                'Date effective': this.datePipe.transform(e.dateEffective , 'dd/MM/yyyy hh:mm'),
                'Date validation': this.datePipe.transform(e.dateValidation , 'dd/MM/yyyy hh:mm'),
                'Date rejet': this.datePipe.transform(e.dateRejet , 'dd/MM/yyyy hh:mm'),
                 'Nombre reccurence total': e.nombreReccurenceTotal ,
                 'Nombre reccurence valide': e.nombreReccurenceValide ,
                 'Nombre reccurence rejet': e.nombreReccurenceRejet ,
                'Template email confirmation': e.templateEmailConfirmation?.libelle ,
            }
        });

        this.criteriaData = [{
            'Reference': this.criteria.reference ? this.criteria.reference : environment.emptyForExport ,
        //'Patient': this.criteria.patient?.ipp ? this.criteria.patient?.ipp : environment.emptyForExport ,
            'Ipp': this.criteria.ipp ? this.criteria.ipp : environment.emptyForExport ,
            'Nom': this.criteria.nom ? this.criteria.nom : environment.emptyForExport ,
            'Prenom': this.criteria.prenom ? this.criteria.prenom : environment.emptyForExport ,
            'Adresse': this.criteria.adresse ? this.criteria.adresse : environment.emptyForExport ,
            'Email': this.criteria.email ? this.criteria.email : environment.emptyForExport ,
            'Cin': this.criteria.cin ? this.criteria.cin : environment.emptyForExport ,
            'Code ramed': this.criteria.codeRamed ? this.criteria.codeRamed : environment.emptyForExport ,
            'Observation': this.criteria.observation ? this.criteria.observation : environment.emptyForExport ,
        //'Operateur': this.criteria.operateur?.cin ? this.criteria.operateur?.cin : environment.emptyForExport ,
        //'Centre hospitalier universitaire': this.criteria.centreHospitalierUniversitaire?.libelle ? this.criteria.centreHospitalierUniversitaire?.libelle : environment.emptyForExport ,
        //'Hopital': this.criteria.hopital?.libelle ? this.criteria.hopital?.libelle : environment.emptyForExport ,
        //'Unite administrative': this.criteria.uniteAdministrative?.libelle ? this.criteria.uniteAdministrative?.libelle : environment.emptyForExport ,
        //'Prestation': this.criteria.prestation?.libelle ? this.criteria.prestation?.libelle : environment.emptyForExport ,
        //'Status rdv': this.criteria.statusRdv?.libelle ? this.criteria.statusRdv?.libelle : environment.emptyForExport ,
            'Fiche reference path': this.criteria.ficheReferencePath ? this.criteria.ficheReferencePath : environment.emptyForExport ,
        //'Cause rejet demande rdv': this.criteria.causeRejetDemandeRdv?.libelle ? this.criteria.causeRejetDemandeRdv?.libelle : environment.emptyForExport ,
            'Date demande rdv Min': this.criteria.dateDemandeRdvFrom ? this.datePipe.transform(this.criteria.dateDemandeRdvFrom , this.dateFormat) : environment.emptyForExport ,
            'Date demande rdv Max': this.criteria.dateDemandeRdvTo ? this.datePipe.transform(this.criteria.dateDemandeRdvTo , this.dateFormat) : environment.emptyForExport ,
            'Date prevu Min': this.criteria.datePrevuFrom ? this.datePipe.transform(this.criteria.datePrevuFrom , this.dateFormat) : environment.emptyForExport ,
            'Date prevu Max': this.criteria.datePrevuTo ? this.datePipe.transform(this.criteria.datePrevuTo , this.dateFormat) : environment.emptyForExport ,
            'Date effective Min': this.criteria.dateEffectiveFrom ? this.datePipe.transform(this.criteria.dateEffectiveFrom , this.dateFormat) : environment.emptyForExport ,
            'Date effective Max': this.criteria.dateEffectiveTo ? this.datePipe.transform(this.criteria.dateEffectiveTo , this.dateFormat) : environment.emptyForExport ,
            'Date validation Min': this.criteria.dateValidationFrom ? this.datePipe.transform(this.criteria.dateValidationFrom , this.dateFormat) : environment.emptyForExport ,
            'Date validation Max': this.criteria.dateValidationTo ? this.datePipe.transform(this.criteria.dateValidationTo , this.dateFormat) : environment.emptyForExport ,
            'Date rejet Min': this.criteria.dateRejetFrom ? this.datePipe.transform(this.criteria.dateRejetFrom , this.dateFormat) : environment.emptyForExport ,
            'Date rejet Max': this.criteria.dateRejetTo ? this.datePipe.transform(this.criteria.dateRejetTo , this.dateFormat) : environment.emptyForExport ,
            'Nombre reccurence total Min': this.criteria.nombreReccurenceTotalMin ? this.criteria.nombreReccurenceTotalMin : environment.emptyForExport ,
            'Nombre reccurence total Max': this.criteria.nombreReccurenceTotalMax ? this.criteria.nombreReccurenceTotalMax : environment.emptyForExport ,
            'Nombre reccurence valide Min': this.criteria.nombreReccurenceValideMin ? this.criteria.nombreReccurenceValideMin : environment.emptyForExport ,
            'Nombre reccurence valide Max': this.criteria.nombreReccurenceValideMax ? this.criteria.nombreReccurenceValideMax : environment.emptyForExport ,
            'Nombre reccurence rejet Min': this.criteria.nombreReccurenceRejetMin ? this.criteria.nombreReccurenceRejetMin : environment.emptyForExport ,
            'Nombre reccurence rejet Max': this.criteria.nombreReccurenceRejetMax ? this.criteria.nombreReccurenceRejetMax : environment.emptyForExport ,
        //'Template email confirmation': this.criteria.templateEmailConfirmation?.libelle ? this.criteria.templateEmailConfirmation?.libelle : environment.emptyForExport ,
        }];
      }
}
