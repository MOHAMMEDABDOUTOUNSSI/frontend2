import {Component, OnInit} from '@angular/core';
import {TemplateEmailConfirmationService} from 'src/app/controller/service/TemplateEmailConfirmation.service';
import {TemplateEmailConfirmationDto} from 'src/app/controller/model/TemplateEmailConfirmation.model';
import {TemplateEmailConfirmationCriteria} from 'src/app/controller/criteria/TemplateEmailConfirmationCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';




@Component({
  selector: 'app-template-email-confirmation-list-admin',
  templateUrl: './template-email-confirmation-list-admin.component.html'
})
export class TemplateEmailConfirmationListAdminComponent extends AbstractListController<TemplateEmailConfirmationDto, TemplateEmailConfirmationCriteria, TemplateEmailConfirmationService>  implements OnInit {

    fileName = 'TemplateEmailConfirmation';

     yesOrNoActif :any[] =[];
  
    constructor(templateEmailConfirmationService: TemplateEmailConfirmationService) {
        super(templateEmailConfirmationService);
        this.pdfName='TemplateEmailConfirmation.pdf';
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    this.yesOrNoActif =  [{label: 'Actif', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    }

    public async loadTemplateEmailConfirmations(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('TemplateEmailConfirmation', 'list');
        isPermistted ? this.service.findAll().subscribe(templateEmailConfirmations => this.items = templateEmailConfirmations,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'libelle', header: 'Libelle'},
            {field: 'objet', header: 'Objet'},
            {field: 'actif', header: 'Actif'},
        ];
    }



	public initDuplicate(res: TemplateEmailConfirmationDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Libelle': e.libelle ,
                 'Objet': e.objet ,
                 'Corps': e.corps ,
                'Actif': e.actif? 'Vrai' : 'Faux' ,
            }
        });

        this.criteriaData = [{
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Objet': this.criteria.objet ? this.criteria.objet : environment.emptyForExport ,
            'Corps': this.criteria.corps ? this.criteria.corps : environment.emptyForExport ,
            'Actif': this.criteria.actif ? (this.criteria.actif ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
        }];
      }
}
