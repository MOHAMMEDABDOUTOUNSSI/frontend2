import {Component, OnInit} from '@angular/core';
import {CelluleValidationService} from 'src/app/controller/service/CelluleValidation.service';
import {CelluleValidationDto} from 'src/app/controller/model/CelluleValidation.model';
import {CelluleValidationCriteria} from 'src/app/controller/criteria/CelluleValidationCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';




@Component({
  selector: 'app-cellule-validation-list-admin',
  templateUrl: './cellule-validation-list-admin.component.html'
})
export class CelluleValidationListAdminComponent extends AbstractListController<CelluleValidationDto, CelluleValidationCriteria, CelluleValidationService>  implements OnInit {

    fileName = 'CelluleValidation';

  
    constructor(celluleValidationService: CelluleValidationService) {
        super(celluleValidationService);
        this.pdfName='CelluleValidation.pdf';
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadCelluleValidations(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('CelluleValidation', 'list');
        isPermistted ? this.service.findAll().subscribe(celluleValidations => this.items = celluleValidations,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'libelle', header: 'Libelle'},
            {field: 'code', header: 'Code'},
            {field: 'email', header: 'Email'},
            {field: 'phone', header: 'Phone'},
        ];
    }



	public initDuplicate(res: CelluleValidationDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Libelle': e.libelle ,
                 'Code': e.code ,
                 'Description': e.description ,
                 'Email': e.email ,
                 'Phone': e.phone ,
            }
        });

        this.criteriaData = [{
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
            'Description': this.criteria.description ? this.criteria.description : environment.emptyForExport ,
            'Email': this.criteria.email ? this.criteria.email : environment.emptyForExport ,
            'Phone': this.criteria.phone ? this.criteria.phone : environment.emptyForExport ,
        }];
      }
}
