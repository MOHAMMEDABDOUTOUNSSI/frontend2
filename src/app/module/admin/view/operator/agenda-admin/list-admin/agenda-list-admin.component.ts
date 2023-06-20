import {Component, OnInit} from '@angular/core';
import {AgendaService} from 'src/app/controller/service/Agenda.service';
import {AgendaDto} from 'src/app/controller/model/Agenda.model';
import {AgendaCriteria} from 'src/app/controller/criteria/AgendaCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import { UniteAdministrativeService } from 'src/app/controller/service/UniteAdministrative.service';

import {UniteAdministrativeDto} from 'src/app/controller/model/UniteAdministrative.model';


@Component({
  selector: 'app-agenda-list-admin',
  templateUrl: './agenda-list-admin.component.html'
})
export class AgendaListAdminComponent extends AbstractListController<AgendaDto, AgendaCriteria, AgendaService>  implements OnInit {

    fileName = 'Agenda';

    uniteAdministratives :Array<UniteAdministrativeDto>;
  
    constructor(agendaService: AgendaService, private uniteAdministrativeService: UniteAdministrativeService) {
        super(agendaService);
        this.pdfName='Agenda.pdf';
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadUniteAdministrative();
    }

    public async loadAgendas(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Agenda', 'list');
        isPermistted ? this.service.findAll().subscribe(agendas => this.items = agendas,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'libelle', header: 'Libelle'},
            {field: 'daysOfMonth', header: 'Days of month'},
            {field: 'month', header: 'Month'},
            {field: 'annee', header: 'Annee'},
            {field: 'uniteAdministrative?.libelle', header: 'Unite administrative'},
        ];
    }


    public async loadUniteAdministrative(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Agenda', 'list');
        isPermistted ? this.uniteAdministrativeService.findAllOptimized().subscribe(uniteAdministratives => this.uniteAdministratives = uniteAdministratives,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: AgendaDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Libelle': e.libelle ,
                 'Days of month': e.daysOfMonth ,
                 'Month': e.month ,
                 'Annee': e.annee ,
                'Unite administrative': e.uniteAdministrative?.libelle ,
            }
        });

        this.criteriaData = [{
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Days of month': this.criteria.daysOfMonth ? this.criteria.daysOfMonth : environment.emptyForExport ,
            'Month Min': this.criteria.monthMin ? this.criteria.monthMin : environment.emptyForExport ,
            'Month Max': this.criteria.monthMax ? this.criteria.monthMax : environment.emptyForExport ,
            'Annee Min': this.criteria.anneeMin ? this.criteria.anneeMin : environment.emptyForExport ,
            'Annee Max': this.criteria.anneeMax ? this.criteria.anneeMax : environment.emptyForExport ,
        //'Unite administrative': this.criteria.uniteAdministrative?.libelle ? this.criteria.uniteAdministrative?.libelle : environment.emptyForExport ,
        }];
      }
}
