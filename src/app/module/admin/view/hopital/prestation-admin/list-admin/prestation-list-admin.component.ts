import {Component, OnInit} from '@angular/core';
import {PrestationService} from 'src/app/controller/service/Prestation.service';
import {PrestationDto} from 'src/app/controller/model/Prestation.model';
import {PrestationCriteria} from 'src/app/controller/criteria/PrestationCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import { TypePrestationService } from 'src/app/controller/service/TypePrestation.service';
import { UniteAdministrativeService } from 'src/app/controller/service/UniteAdministrative.service';

import {UniteAdministrativeDto} from 'src/app/controller/model/UniteAdministrative.model';
import {TypePrestationDto} from 'src/app/controller/model/TypePrestation.model';


@Component({
  selector: 'app-prestation-list-admin',
  templateUrl: './prestation-list-admin.component.html'
})
export class PrestationListAdminComponent extends AbstractListController<PrestationDto, PrestationCriteria, PrestationService>  implements OnInit {

    fileName = 'Prestation';

    typePrestations :Array<TypePrestationDto>;
    uniteAdministratives :Array<UniteAdministrativeDto>;
  
    constructor(prestationService: PrestationService, private typePrestationService: TypePrestationService, private uniteAdministrativeService: UniteAdministrativeService) {
        super(prestationService);
        this.pdfName='Prestation.pdf';
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadTypePrestation();
      this.loadUniteAdministrative();
    }

    public async loadPrestations(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Prestation', 'list');
        isPermistted ? this.service.findAll().subscribe(prestations => this.items = prestations,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'libelle', header: 'Libelle'},
            {field: 'code', header: 'Code'},
            {field: 'typePrestation?.libelle', header: 'Type prestation'},
            {field: 'dureeEnMiniute', header: 'Duree en miniute'},
            {field: 'uniteAdministrative?.libelle', header: 'Unite administrative'},
        ];
    }


    public async loadTypePrestation(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Prestation', 'list');
        isPermistted ? this.typePrestationService.findAllOptimized().subscribe(typePrestations => this.typePrestations = typePrestations,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadUniteAdministrative(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Prestation', 'list');
        isPermistted ? this.uniteAdministrativeService.findAllOptimized().subscribe(uniteAdministratives => this.uniteAdministratives = uniteAdministratives,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: PrestationDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Libelle': e.libelle ,
                 'Code': e.code ,
                'Type prestation': e.typePrestation?.libelle ,
                 'Duree en miniute': e.dureeEnMiniute ,
                'Unite administrative': e.uniteAdministrative?.libelle ,
            }
        });

        this.criteriaData = [{
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
        //'Type prestation': this.criteria.typePrestation?.libelle ? this.criteria.typePrestation?.libelle : environment.emptyForExport ,
            'Duree en miniute Min': this.criteria.dureeEnMiniuteMin ? this.criteria.dureeEnMiniuteMin : environment.emptyForExport ,
            'Duree en miniute Max': this.criteria.dureeEnMiniuteMax ? this.criteria.dureeEnMiniuteMax : environment.emptyForExport ,
        //'Unite administrative': this.criteria.uniteAdministrative?.libelle ? this.criteria.uniteAdministrative?.libelle : environment.emptyForExport ,
        }];
      }
}
