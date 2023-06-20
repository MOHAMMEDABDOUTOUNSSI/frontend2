import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {OperateurQuotaService} from 'src/app/controller/service/OperateurQuota.service';
import {OperateurQuotaDto} from 'src/app/controller/model/OperateurQuota.model';
import {OperateurQuotaCriteria} from 'src/app/controller/criteria/OperateurQuotaCriteria.model';

import {OperateurDto} from 'src/app/controller/model/Operateur.model';
import {OperateurService} from 'src/app/controller/service/Operateur.service';
import {PrestationDto} from 'src/app/controller/model/Prestation.model';
import {PrestationService} from 'src/app/controller/service/Prestation.service';
@Component({
  selector: 'app-operateur-quota-view-admin',
  templateUrl: './operateur-quota-view-admin.component.html'
})
export class OperateurQuotaViewAdminComponent extends AbstractViewController<OperateurQuotaDto, OperateurQuotaCriteria, OperateurQuotaService> implements OnInit {


    constructor(private operateurQuotaService: OperateurQuotaService, private operateurService: OperateurService, private prestationService: PrestationService){
        super(operateurQuotaService);
    }

    ngOnInit(): void {
        this.operateur = new OperateurDto();
        this.operateurService.findAll().subscribe((data) => this.operateurs = data);
        this.prestation = new PrestationDto();
        this.prestationService.findAll().subscribe((data) => this.prestations = data);
    }


    get prestation(): PrestationDto {
       return this.prestationService.item;
    }
    set prestation(value: PrestationDto) {
        this.prestationService.item = value;
    }
    get prestations():Array<PrestationDto> {
       return this.prestationService.items;
    }
    set prestations(value: Array<PrestationDto>) {
        this.prestationService.items = value;
    }
    get operateur(): OperateurDto {
       return this.operateurService.item;
    }
    set operateur(value: OperateurDto) {
        this.operateurService.item = value;
    }
    get operateurs():Array<OperateurDto> {
       return this.operateurService.items;
    }
    set operateurs(value: Array<OperateurDto>) {
        this.operateurService.items = value;
    }


}
