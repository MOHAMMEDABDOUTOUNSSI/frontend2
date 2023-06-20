import {Component, OnInit} from '@angular/core';
import {OperateurHoraireTravailleValidationService} from 'src/app/controller/service/OperateurHoraireTravailleValidation.service';
import {OperateurHoraireTravailleValidationDto} from 'src/app/controller/model/OperateurHoraireTravailleValidation.model';
import {OperateurHoraireTravailleValidationCriteria} from 'src/app/controller/criteria/OperateurHoraireTravailleValidationCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import { HoraireTravailleValidationService } from 'src/app/controller/service/HoraireTravailleValidation.service';
import { OperateurService } from 'src/app/controller/service/Operateur.service';

import {HoraireTravailleValidationDto} from 'src/app/controller/model/HoraireTravailleValidation.model';
import {OperateurDto} from 'src/app/controller/model/Operateur.model';


@Component({
  selector: 'app-operateur-horaire-travaille-validation-list-admin',
  templateUrl: './operateur-horaire-travaille-validation-list-admin.component.html'
})
export class OperateurHoraireTravailleValidationListAdminComponent extends AbstractListController<OperateurHoraireTravailleValidationDto, OperateurHoraireTravailleValidationCriteria, OperateurHoraireTravailleValidationService>  implements OnInit {

    fileName = 'OperateurHoraireTravailleValidation';

    horaireTravailleValidations :Array<HoraireTravailleValidationDto>;
    operateurs :Array<OperateurDto>;
  
    constructor(operateurHoraireTravailleValidationService: OperateurHoraireTravailleValidationService, private horaireTravailleValidationService: HoraireTravailleValidationService, private operateurService: OperateurService) {
        super(operateurHoraireTravailleValidationService);
        this.pdfName='OperateurHoraireTravailleValidation.pdf';
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadHoraireTravailleValidation();
      this.loadOperateur();
    }

    public async loadOperateurHoraireTravailleValidations(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('OperateurHoraireTravailleValidation', 'list');
        isPermistted ? this.service.findAll().subscribe(operateurHoraireTravailleValidations => this.items = operateurHoraireTravailleValidations,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'horaireTravailleValidation?.libelle', header: 'Horaire travaille validation'},
            {field: 'operateur?.cin', header: 'Operateur'},
            {field: 'heureDebut', header: 'Heure debut'},
            {field: 'heureFin', header: 'Heure fin'},
        ];
    }


    public async loadHoraireTravailleValidation(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('OperateurHoraireTravailleValidation', 'list');
        isPermistted ? this.horaireTravailleValidationService.findAllOptimized().subscribe(horaireTravailleValidations => this.horaireTravailleValidations = horaireTravailleValidations,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadOperateur(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('OperateurHoraireTravailleValidation', 'list');
        isPermistted ? this.operateurService.findAllOptimized().subscribe(operateurs => this.operateurs = operateurs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: OperateurHoraireTravailleValidationDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                'Horaire travaille validation': e.horaireTravailleValidation?.libelle ,
                'Operateur': e.operateur?.cin ,
                 'Heure debut': e.heureDebut ,
                 'Heure fin': e.heureFin ,
            }
        });

        this.criteriaData = [{
        //'Horaire travaille validation': this.criteria.horaireTravailleValidation?.libelle ? this.criteria.horaireTravailleValidation?.libelle : environment.emptyForExport ,
        //'Operateur': this.criteria.operateur?.cin ? this.criteria.operateur?.cin : environment.emptyForExport ,
            'Heure debut': this.criteria.heureDebut ? this.criteria.heureDebut : environment.emptyForExport ,
            'Heure fin': this.criteria.heureFin ? this.criteria.heureFin : environment.emptyForExport ,
        }];
      }
}
