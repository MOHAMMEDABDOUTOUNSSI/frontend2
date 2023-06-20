import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {HoraireTravailleValidationService} from 'src/app/controller/service/HoraireTravailleValidation.service';
import {HoraireTravailleValidationDto} from 'src/app/controller/model/HoraireTravailleValidation.model';
import {HoraireTravailleValidationCriteria} from 'src/app/controller/criteria/HoraireTravailleValidationCriteria.model';

@Component({
  selector: 'app-horaire-travaille-validation-view-admin',
  templateUrl: './horaire-travaille-validation-view-admin.component.html'
})
export class HoraireTravailleValidationViewAdminComponent extends AbstractViewController<HoraireTravailleValidationDto, HoraireTravailleValidationCriteria, HoraireTravailleValidationService> implements OnInit {


    constructor(private horaireTravailleValidationService: HoraireTravailleValidationService){
        super(horaireTravailleValidationService);
    }

    ngOnInit(): void {
    }




}
