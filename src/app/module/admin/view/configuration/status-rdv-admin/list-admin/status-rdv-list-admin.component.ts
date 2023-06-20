import {Component, OnInit} from '@angular/core';
import {StatusRdvService} from 'src/app/controller/service/StatusRdv.service';
import {StatusRdvDto} from 'src/app/controller/model/StatusRdv.model';
import {StatusRdvCriteria} from 'src/app/controller/criteria/StatusRdvCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';




@Component({
  selector: 'app-status-rdv-list-admin',
  templateUrl: './status-rdv-list-admin.component.html'
})
export class StatusRdvListAdminComponent extends AbstractListController<StatusRdvDto, StatusRdvCriteria, StatusRdvService>  implements OnInit {

    fileName = 'StatusRdv';

  
    constructor(statusRdvService: StatusRdvService) {
        super(statusRdvService);
        this.pdfName='StatusRdv.pdf';
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadStatusRdvs(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('StatusRdv', 'list');
        isPermistted ? this.service.findAll().subscribe(statusRdvs => this.items = statusRdvs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'libelle', header: 'Libelle'},
            {field: 'code', header: 'Code'},
            {field: 'style', header: 'Style'},
        ];
    }



	public initDuplicate(res: StatusRdvDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Libelle': e.libelle ,
                 'Code': e.code ,
                 'Style': e.style ,
            }
        });

        this.criteriaData = [{
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
            'Style': this.criteria.style ? this.criteria.style : environment.emptyForExport ,
        }];
      }
}
