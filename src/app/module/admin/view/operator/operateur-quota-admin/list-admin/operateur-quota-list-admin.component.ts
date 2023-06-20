import {Component, OnInit} from '@angular/core';
import {OperateurQuotaService} from 'src/app/controller/service/OperateurQuota.service';
import {OperateurQuotaDto} from 'src/app/controller/model/OperateurQuota.model';
import {OperateurQuotaCriteria} from 'src/app/controller/criteria/OperateurQuotaCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import { OperateurService } from 'src/app/controller/service/Operateur.service';
import { PrestationService } from 'src/app/controller/service/Prestation.service';

import {OperateurDto} from 'src/app/controller/model/Operateur.model';
import {PrestationDto} from 'src/app/controller/model/Prestation.model';


@Component({
  selector: 'app-operateur-quota-list-admin',
  templateUrl: './operateur-quota-list-admin.component.html'
})
export class OperateurQuotaListAdminComponent extends AbstractListController<OperateurQuotaDto, OperateurQuotaCriteria, OperateurQuotaService>  implements OnInit {

    fileName = 'OperateurQuota';

    operateurs :Array<OperateurDto>;
    prestations :Array<PrestationDto>;
  
    constructor(operateurQuotaService: OperateurQuotaService, private operateurService: OperateurService, private prestationService: PrestationService) {
        super(operateurQuotaService);
        this.pdfName='OperateurQuota.pdf';
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadOperateur();
      this.loadPrestation();
    }

    public async loadOperateurQuotas(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('OperateurQuota', 'list');
        isPermistted ? this.service.findAll().subscribe(operateurQuotas => this.items = operateurQuotas,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'operateur?.cin', header: 'Operateur'},
            {field: 'prestation?.libelle', header: 'Prestation'},
            {field: 'nombreMaxRdv', header: 'Nombre max rdv'},
        ];
    }


    public async loadOperateur(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('OperateurQuota', 'list');
        isPermistted ? this.operateurService.findAllOptimized().subscribe(operateurs => this.operateurs = operateurs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadPrestation(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('OperateurQuota', 'list');
        isPermistted ? this.prestationService.findAllOptimized().subscribe(prestations => this.prestations = prestations,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: OperateurQuotaDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                'Operateur': e.operateur?.cin ,
                'Prestation': e.prestation?.libelle ,
                 'Nombre max rdv': e.nombreMaxRdv ,
            }
        });

        this.criteriaData = [{
        //'Operateur': this.criteria.operateur?.cin ? this.criteria.operateur?.cin : environment.emptyForExport ,
        //'Prestation': this.criteria.prestation?.libelle ? this.criteria.prestation?.libelle : environment.emptyForExport ,
            'Nombre max rdv Min': this.criteria.nombreMaxRdvMin ? this.criteria.nombreMaxRdvMin : environment.emptyForExport ,
            'Nombre max rdv Max': this.criteria.nombreMaxRdvMax ? this.criteria.nombreMaxRdvMax : environment.emptyForExport ,
        }];
      }
}
