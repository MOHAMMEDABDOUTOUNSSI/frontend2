import {Component, OnInit} from '@angular/core';
import {TypePrestationService} from 'src/app/controller/service/TypePrestation.service';
import {TypePrestationDto} from 'src/app/controller/model/TypePrestation.model';
import {TypePrestationCriteria} from 'src/app/controller/criteria/TypePrestationCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';




@Component({
  selector: 'app-type-prestation-list-admin',
  templateUrl: './type-prestation-list-admin.component.html'
})
export class TypePrestationListAdminComponent extends AbstractListController<TypePrestationDto, TypePrestationCriteria, TypePrestationService>  implements OnInit {

    fileName = 'TypePrestation';

  
    constructor(typePrestationService: TypePrestationService) {
        super(typePrestationService);
        this.pdfName='TypePrestation.pdf';
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadTypePrestations(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('TypePrestation', 'list');
        isPermistted ? this.service.findAll().subscribe(typePrestations => this.items = typePrestations,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'libelle', header: 'Libelle'},
            {field: 'code', header: 'Code'},
        ];
    }



	public initDuplicate(res: TypePrestationDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Libelle': e.libelle ,
                 'Code': e.code ,
            }
        });

        this.criteriaData = [{
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
        }];
      }
}
