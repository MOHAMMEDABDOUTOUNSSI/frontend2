import {Component, OnInit} from '@angular/core';
import {JourFerieService} from 'src/app/controller/service/JourFerie.service';
import {JourFerieDto} from 'src/app/controller/model/JourFerie.model';
import {JourFerieCriteria} from 'src/app/controller/criteria/JourFerieCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';




@Component({
  selector: 'app-jour-ferie-list-admin',
  templateUrl: './jour-ferie-list-admin.component.html'
})
export class JourFerieListAdminComponent extends AbstractListController<JourFerieDto, JourFerieCriteria, JourFerieService>  implements OnInit {

    fileName = 'JourFerie';

  
    constructor(jourFerieService: JourFerieService) {
        super(jourFerieService);
        this.pdfName='JourFerie.pdf';
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadJourFeries(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('JourFerie', 'list');
        isPermistted ? this.service.findAll().subscribe(jourFeries => this.items = jourFeries,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'libelle', header: 'Libelle'},
            {field: 'dateDebut', header: 'Date debut'},
            {field: 'dateFin', header: 'Date fin'},
            {field: 'nombreJoursTotal', header: 'Nombre jours total'},
        ];
    }



	public initDuplicate(res: JourFerieDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Code': e.code ,
                 'Libelle': e.libelle ,
                'Date debut': this.datePipe.transform(e.dateDebut , 'dd/MM/yyyy hh:mm'),
                'Date fin': this.datePipe.transform(e.dateFin , 'dd/MM/yyyy hh:mm'),
                 'Nombre jours total': e.nombreJoursTotal ,
            }
        });

        this.criteriaData = [{
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Date debut Min': this.criteria.dateDebutFrom ? this.datePipe.transform(this.criteria.dateDebutFrom , this.dateFormat) : environment.emptyForExport ,
            'Date debut Max': this.criteria.dateDebutTo ? this.datePipe.transform(this.criteria.dateDebutTo , this.dateFormat) : environment.emptyForExport ,
            'Date fin Min': this.criteria.dateFinFrom ? this.datePipe.transform(this.criteria.dateFinFrom , this.dateFormat) : environment.emptyForExport ,
            'Date fin Max': this.criteria.dateFinTo ? this.datePipe.transform(this.criteria.dateFinTo , this.dateFormat) : environment.emptyForExport ,
            'Nombre jours total Min': this.criteria.nombreJoursTotalMin ? this.criteria.nombreJoursTotalMin : environment.emptyForExport ,
            'Nombre jours total Max': this.criteria.nombreJoursTotalMax ? this.criteria.nombreJoursTotalMax : environment.emptyForExport ,
        }];
      }
}
