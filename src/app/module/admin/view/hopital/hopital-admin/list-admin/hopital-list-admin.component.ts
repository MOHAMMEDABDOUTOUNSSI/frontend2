import {Component, OnInit} from '@angular/core';
import {HopitalService} from 'src/app/controller/service/Hopital.service';
import {HopitalDto} from 'src/app/controller/model/Hopital.model';
import {HopitalCriteria} from 'src/app/controller/criteria/HopitalCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import { CentreHospitalierUniversitaireService } from 'src/app/controller/service/CentreHospitalierUniversitaire.service';

import {CentreHospitalierUniversitaireDto} from 'src/app/controller/model/CentreHospitalierUniversitaire.model';
import {UniteAdministrativeDto} from 'src/app/controller/model/UniteAdministrative.model';


@Component({
  selector: 'app-hopital-list-admin',
  templateUrl: './hopital-list-admin.component.html'
})
export class HopitalListAdminComponent extends AbstractListController<HopitalDto, HopitalCriteria, HopitalService>  implements OnInit {

    fileName = 'Hopital';

    centreHospitalierUniversitaires :Array<CentreHospitalierUniversitaireDto>;
  
    constructor(hopitalService: HopitalService, private centreHospitalierUniversitaireService: CentreHospitalierUniversitaireService) {
        super(hopitalService);
        this.pdfName='Hopital.pdf';
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadCentreHospitalierUniversitaire();
    }

    public async loadHopitals(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Hopital', 'list');
        isPermistted ? this.service.findAll().subscribe(hopitals => this.items = hopitals,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'libelle', header: 'Libelle'},
            {field: 'code', header: 'Code'},
            {field: 'centreHospitalierUniversitaire?.libelle', header: 'Centre hospitalier universitaire'},
        ];
    }


    public async loadCentreHospitalierUniversitaire(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Hopital', 'list');
        isPermistted ? this.centreHospitalierUniversitaireService.findAllOptimized().subscribe(centreHospitalierUniversitaires => this.centreHospitalierUniversitaires = centreHospitalierUniversitaires,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: HopitalDto) {
        if (res.uniteAdministratives != null) {
             res.uniteAdministratives.forEach(d => { d.hopital = null; d.id = null; });
        }
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Libelle': e.libelle ,
                 'Code': e.code ,
                 'Description': e.description ,
                'Centre hospitalier universitaire': e.centreHospitalierUniversitaire?.libelle ,
            }
        });

        this.criteriaData = [{
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
            'Description': this.criteria.description ? this.criteria.description : environment.emptyForExport ,
        //'Centre hospitalier universitaire': this.criteria.centreHospitalierUniversitaire?.libelle ? this.criteria.centreHospitalierUniversitaire?.libelle : environment.emptyForExport ,
        }];
      }
}
