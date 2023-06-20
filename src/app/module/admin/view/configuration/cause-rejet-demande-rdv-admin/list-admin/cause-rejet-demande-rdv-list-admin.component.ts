import {Component, OnInit} from '@angular/core';
import {CauseRejetDemandeRdvService} from 'src/app/controller/service/CauseRejetDemandeRdv.service';
import {CauseRejetDemandeRdvDto} from 'src/app/controller/model/CauseRejetDemandeRdv.model';
import {CauseRejetDemandeRdvCriteria} from 'src/app/controller/criteria/CauseRejetDemandeRdvCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';




@Component({
  selector: 'app-cause-rejet-demande-rdv-list-admin',
  templateUrl: './cause-rejet-demande-rdv-list-admin.component.html'
})
export class CauseRejetDemandeRdvListAdminComponent extends AbstractListController<CauseRejetDemandeRdvDto, CauseRejetDemandeRdvCriteria, CauseRejetDemandeRdvService>  implements OnInit {

    fileName = 'CauseRejetDemandeRdv';

  
    constructor(causeRejetDemandeRdvService: CauseRejetDemandeRdvService) {
        super(causeRejetDemandeRdvService);
        this.pdfName='CauseRejetDemandeRdv.pdf';
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadCauseRejetDemandeRdvs(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('CauseRejetDemandeRdv', 'list');
        isPermistted ? this.service.findAll().subscribe(causeRejetDemandeRdvs => this.items = causeRejetDemandeRdvs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'libelle', header: 'Libelle'},
            {field: 'code', header: 'Code'},
        ];
    }



	public initDuplicate(res: CauseRejetDemandeRdvDto) {
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
