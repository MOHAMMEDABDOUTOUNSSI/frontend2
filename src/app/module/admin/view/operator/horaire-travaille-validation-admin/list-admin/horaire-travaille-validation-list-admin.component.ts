import {Component, OnInit} from '@angular/core';
import {HoraireTravailleValidationService} from 'src/app/controller/service/HoraireTravailleValidation.service';
import {HoraireTravailleValidationDto} from 'src/app/controller/model/HoraireTravailleValidation.model';
import {HoraireTravailleValidationCriteria} from 'src/app/controller/criteria/HoraireTravailleValidationCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';




@Component({
  selector: 'app-horaire-travaille-validation-list-admin',
  templateUrl: './horaire-travaille-validation-list-admin.component.html'
})
export class HoraireTravailleValidationListAdminComponent extends AbstractListController<HoraireTravailleValidationDto, HoraireTravailleValidationCriteria, HoraireTravailleValidationService>  implements OnInit {

    fileName = 'HoraireTravailleValidation';

  
    constructor(horaireTravailleValidationService: HoraireTravailleValidationService) {
        super(horaireTravailleValidationService);
        this.pdfName='HoraireTravailleValidation.pdf';
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadHoraireTravailleValidations(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('HoraireTravailleValidation', 'list');
        isPermistted ? this.service.findAll().subscribe(horaireTravailleValidations => this.items = horaireTravailleValidations,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'libelle', header: 'Libelle'},
            {field: 'daysOfWeek', header: 'Days of week'},
            {field: 'month', header: 'Month'},
            {field: 'heureDebut', header: 'Heure debut'},
            {field: 'heureFin', header: 'Heure fin'},
        ];
    }



	public initDuplicate(res: HoraireTravailleValidationDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Libelle': e.libelle ,
                 'Days of week': e.daysOfWeek ,
                 'Month': e.month ,
                 'Heure debut': e.heureDebut ,
                 'Heure fin': e.heureFin ,
            }
        });

        this.criteriaData = [{
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Days of week': this.criteria.daysOfWeek ? this.criteria.daysOfWeek : environment.emptyForExport ,
            'Month': this.criteria.month ? this.criteria.month : environment.emptyForExport ,
            'Heure debut': this.criteria.heureDebut ? this.criteria.heureDebut : environment.emptyForExport ,
            'Heure fin': this.criteria.heureFin ? this.criteria.heureFin : environment.emptyForExport ,
        }];
      }
}
