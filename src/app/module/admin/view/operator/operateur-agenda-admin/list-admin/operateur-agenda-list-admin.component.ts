import {Component, OnInit} from '@angular/core';
import {OperateurAgendaService} from 'src/app/controller/service/OperateurAgenda.service';
import {OperateurAgendaDto} from 'src/app/controller/model/OperateurAgenda.model';
import {OperateurAgendaCriteria} from 'src/app/controller/criteria/OperateurAgendaCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import { AgendaService } from 'src/app/controller/service/Agenda.service';
import { OperateurService } from 'src/app/controller/service/Operateur.service';

import {OperateurDto} from 'src/app/controller/model/Operateur.model';
import {AgendaDto} from 'src/app/controller/model/Agenda.model';


@Component({
  selector: 'app-operateur-agenda-list-admin',
  templateUrl: './operateur-agenda-list-admin.component.html'
})
export class OperateurAgendaListAdminComponent extends AbstractListController<OperateurAgendaDto, OperateurAgendaCriteria, OperateurAgendaService>  implements OnInit {

    fileName = 'OperateurAgenda';

    agendas :Array<AgendaDto>;
    operateurs :Array<OperateurDto>;
  
    constructor(operateurAgendaService: OperateurAgendaService, private agendaService: AgendaService, private operateurService: OperateurService) {
        super(operateurAgendaService);
        this.pdfName='OperateurAgenda.pdf';
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadAgenda();
      this.loadOperateur();
    }

    public async loadOperateurAgendas(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('OperateurAgenda', 'list');
        isPermistted ? this.service.findAll().subscribe(operateurAgendas => this.items = operateurAgendas,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'agenda?.libelle', header: 'Agenda'},
            {field: 'operateur?.cin', header: 'Operateur'},
            {field: 'heureDebut', header: 'Heure debut'},
            {field: 'heureFin', header: 'Heure fin'},
        ];
    }


    public async loadAgenda(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('OperateurAgenda', 'list');
        isPermistted ? this.agendaService.findAllOptimized().subscribe(agendas => this.agendas = agendas,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadOperateur(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('OperateurAgenda', 'list');
        isPermistted ? this.operateurService.findAllOptimized().subscribe(operateurs => this.operateurs = operateurs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: OperateurAgendaDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                'Agenda': e.agenda?.libelle ,
                'Operateur': e.operateur?.cin ,
                 'Heure debut': e.heureDebut ,
                 'Heure fin': e.heureFin ,
            }
        });

        this.criteriaData = [{
        //'Agenda': this.criteria.agenda?.libelle ? this.criteria.agenda?.libelle : environment.emptyForExport ,
        //'Operateur': this.criteria.operateur?.cin ? this.criteria.operateur?.cin : environment.emptyForExport ,
            'Heure debut': this.criteria.heureDebut ? this.criteria.heureDebut : environment.emptyForExport ,
            'Heure fin': this.criteria.heureFin ? this.criteria.heureFin : environment.emptyForExport ,
        }];
      }
}
