import {Component, OnInit} from '@angular/core';
import {CentreHospitalierUniversitaireService} from 'src/app/controller/service/CentreHospitalierUniversitaire.service';
import {CentreHospitalierUniversitaireDto} from 'src/app/controller/model/CentreHospitalierUniversitaire.model';
import {CentreHospitalierUniversitaireCriteria} from 'src/app/controller/criteria/CentreHospitalierUniversitaireCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';


import {HopitalDto} from 'src/app/controller/model/Hopital.model';


@Component({
  selector: 'app-centre-hospitalier-universitaire-list-admin',
  templateUrl: './centre-hospitalier-universitaire-list-admin.component.html'
})
export class CentreHospitalierUniversitaireListAdminComponent extends AbstractListController<CentreHospitalierUniversitaireDto, CentreHospitalierUniversitaireCriteria, CentreHospitalierUniversitaireService>  implements OnInit {

    fileName = 'CentreHospitalierUniversitaire';

  
    constructor(centreHospitalierUniversitaireService: CentreHospitalierUniversitaireService) {
        super(centreHospitalierUniversitaireService);
        this.pdfName='CentreHospitalierUniversitaire.pdf';
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadCentreHospitalierUniversitaires(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('CentreHospitalierUniversitaire', 'list');
        isPermistted ? this.service.findAll().subscribe(centreHospitalierUniversitaires => this.items = centreHospitalierUniversitaires,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'libelle', header: 'Libelle'},
            {field: 'code', header: 'Code'},
        ];
    }



	public initDuplicate(res: CentreHospitalierUniversitaireDto) {
        if (res.hopitals != null) {
             res.hopitals.forEach(d => { d.centreHospitalierUniversitaire = null; d.id = null; });
        }
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Libelle': e.libelle ,
                 'Code': e.code ,
                 'Description': e.description ,
            }
        });

        this.criteriaData = [{
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
            'Description': this.criteria.description ? this.criteria.description : environment.emptyForExport ,
        }];
      }
}
