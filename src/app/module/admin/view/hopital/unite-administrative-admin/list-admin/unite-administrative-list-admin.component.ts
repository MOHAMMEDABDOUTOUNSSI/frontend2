import {Component, OnInit} from '@angular/core';
import {UniteAdministrativeService} from 'src/app/controller/service/UniteAdministrative.service';
import {UniteAdministrativeDto} from 'src/app/controller/model/UniteAdministrative.model';
import {UniteAdministrativeCriteria} from 'src/app/controller/criteria/UniteAdministrativeCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import { HopitalService } from 'src/app/controller/service/Hopital.service';

import {HopitalDto} from 'src/app/controller/model/Hopital.model';
import {PrestationDto} from 'src/app/controller/model/Prestation.model';


@Component({
  selector: 'app-unite-administrative-list-admin',
  templateUrl: './unite-administrative-list-admin.component.html'
})
export class UniteAdministrativeListAdminComponent extends AbstractListController<UniteAdministrativeDto, UniteAdministrativeCriteria, UniteAdministrativeService>  implements OnInit {

    fileName = 'UniteAdministrative';

    hopitals :Array<HopitalDto>;
  
    constructor(uniteAdministrativeService: UniteAdministrativeService, private hopitalService: HopitalService) {
        super(uniteAdministrativeService);
        this.pdfName='UniteAdministrative.pdf';
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadHopital();
    }

    public async loadUniteAdministratives(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('UniteAdministrative', 'list');
        isPermistted ? this.service.findAll().subscribe(uniteAdministratives => this.items = uniteAdministratives,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'libelle', header: 'Libelle'},
            {field: 'code', header: 'Code'},
            {field: 'hopital?.libelle', header: 'Hopital'},
        ];
    }


    public async loadHopital(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('UniteAdministrative', 'list');
        isPermistted ? this.hopitalService.findAllOptimized().subscribe(hopitals => this.hopitals = hopitals,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: UniteAdministrativeDto) {
        if (res.prestations != null) {
             res.prestations.forEach(d => { d.uniteAdministrative = null; d.id = null; });
        }
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Libelle': e.libelle ,
                 'Code': e.code ,
                 'Description': e.description ,
                'Hopital': e.hopital?.libelle ,
            }
        });

        this.criteriaData = [{
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
            'Description': this.criteria.description ? this.criteria.description : environment.emptyForExport ,
        //'Hopital': this.criteria.hopital?.libelle ? this.criteria.hopital?.libelle : environment.emptyForExport ,
        }];
      }
}
