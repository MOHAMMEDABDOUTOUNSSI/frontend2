import {Component, OnInit} from '@angular/core';
import {OperateurService} from 'src/app/controller/service/Operateur.service';
import {OperateurDto} from 'src/app/controller/model/Operateur.model';
import {OperateurCriteria} from 'src/app/controller/criteria/OperateurCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import { CelluleValidationService } from 'src/app/controller/service/CelluleValidation.service';

import {OperateurAgendaDto} from 'src/app/controller/model/OperateurAgenda.model';
import {OperateurHoraireTravailleValidationDto} from 'src/app/controller/model/OperateurHoraireTravailleValidation.model';
import {OperateurUniteAdministrativeDto} from 'src/app/controller/model/OperateurUniteAdministrative.model';
import {OperateurQuotaDto} from 'src/app/controller/model/OperateurQuota.model';
import {CelluleValidationDto} from 'src/app/controller/model/CelluleValidation.model';


@Component({
  selector: 'app-operateur-list-admin',
  templateUrl: './operateur-list-admin.component.html'
})
export class OperateurListAdminComponent extends AbstractListController<OperateurDto, OperateurCriteria, OperateurService>  implements OnInit {

    fileName = 'Operateur';

    celluleValidations :Array<CelluleValidationDto>;
  
    constructor(operateurService: OperateurService, private celluleValidationService: CelluleValidationService) {
        super(operateurService);
        this.pdfName='Operateur.pdf';
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadCelluleValidation();
    }

    public async loadOperateurs(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Operateur', 'list');
        isPermistted ? this.service.findAll().subscribe(operateurs => this.items = operateurs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'cin', header: 'Cin'},
            {field: 'dateNaissance', header: 'Date naissance'},
            {field: 'passport', header: 'Passport'},
            {field: 'celluleValidation?.libelle', header: 'Cellule validation'},
        ];
    }


    public async loadCelluleValidation(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Operateur', 'list');
        isPermistted ? this.celluleValidationService.findAllOptimized().subscribe(celluleValidations => this.celluleValidations = celluleValidations,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: OperateurDto) {
        if (res.operateurAgendas != null) {
             res.operateurAgendas.forEach(d => { d.operateur = null; d.id = null; });
        }
        if (res.operateurHoraireTravailleValidations != null) {
             res.operateurHoraireTravailleValidations.forEach(d => { d.operateur = null; d.id = null; });
        }
        if (res.operateurUniteAdministratives != null) {
             res.operateurUniteAdministratives.forEach(d => { d.operateur = null; d.id = null; });
        }
        if (res.operateurQuotas != null) {
             res.operateurQuotas.forEach(d => { d.operateur = null; d.id = null; });
        }
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Cin': e.cin ,
                'Date naissance': this.datePipe.transform(e.dateNaissance , 'dd/MM/yyyy hh:mm'),
                 'Passport': e.passport ,
                'Cellule validation': e.celluleValidation?.libelle ,
            }
        });

        this.criteriaData = [{
            'Cin': this.criteria.cin ? this.criteria.cin : environment.emptyForExport ,
            'Date naissance Min': this.criteria.dateNaissanceFrom ? this.datePipe.transform(this.criteria.dateNaissanceFrom , this.dateFormat) : environment.emptyForExport ,
            'Date naissance Max': this.criteria.dateNaissanceTo ? this.datePipe.transform(this.criteria.dateNaissanceTo , this.dateFormat) : environment.emptyForExport ,
            'Passport': this.criteria.passport ? this.criteria.passport : environment.emptyForExport ,
        //'Cellule validation': this.criteria.celluleValidation?.libelle ? this.criteria.celluleValidation?.libelle : environment.emptyForExport ,
        }];
      }
}
