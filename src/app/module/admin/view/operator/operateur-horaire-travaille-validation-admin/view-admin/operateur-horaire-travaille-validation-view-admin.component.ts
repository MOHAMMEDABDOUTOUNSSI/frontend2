import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {OperateurHoraireTravailleValidationService} from 'src/app/controller/service/OperateurHoraireTravailleValidation.service';
import {OperateurHoraireTravailleValidationDto} from 'src/app/controller/model/OperateurHoraireTravailleValidation.model';
import {OperateurHoraireTravailleValidationCriteria} from 'src/app/controller/criteria/OperateurHoraireTravailleValidationCriteria.model';

import {OperateurDto} from 'src/app/controller/model/Operateur.model';
import {OperateurService} from 'src/app/controller/service/Operateur.service';
import {HoraireTravailleValidationDto} from 'src/app/controller/model/HoraireTravailleValidation.model';
import {HoraireTravailleValidationService} from 'src/app/controller/service/HoraireTravailleValidation.service';
@Component({
  selector: 'app-operateur-horaire-travaille-validation-view-admin',
  templateUrl: './operateur-horaire-travaille-validation-view-admin.component.html'
})
export class OperateurHoraireTravailleValidationViewAdminComponent extends AbstractViewController<OperateurHoraireTravailleValidationDto, OperateurHoraireTravailleValidationCriteria, OperateurHoraireTravailleValidationService> implements OnInit {


    constructor(private operateurHoraireTravailleValidationService: OperateurHoraireTravailleValidationService, private operateurService: OperateurService, private horaireTravailleValidationService: HoraireTravailleValidationService){
        super(operateurHoraireTravailleValidationService);
    }

    ngOnInit(): void {
        this.horaireTravailleValidation = new HoraireTravailleValidationDto();
        this.horaireTravailleValidationService.findAll().subscribe((data) => this.horaireTravailleValidations = data);
        this.operateur = new OperateurDto();
        this.operateurService.findAll().subscribe((data) => this.operateurs = data);
    }


    get horaireTravailleValidation(): HoraireTravailleValidationDto {
       return this.horaireTravailleValidationService.item;
    }
    set horaireTravailleValidation(value: HoraireTravailleValidationDto) {
        this.horaireTravailleValidationService.item = value;
    }
    get horaireTravailleValidations():Array<HoraireTravailleValidationDto> {
       return this.horaireTravailleValidationService.items;
    }
    set horaireTravailleValidations(value: Array<HoraireTravailleValidationDto>) {
        this.horaireTravailleValidationService.items = value;
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
