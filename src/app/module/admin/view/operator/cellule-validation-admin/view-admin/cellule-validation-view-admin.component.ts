import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {CelluleValidationService} from 'src/app/controller/service/CelluleValidation.service';
import {CelluleValidationDto} from 'src/app/controller/model/CelluleValidation.model';
import {CelluleValidationCriteria} from 'src/app/controller/criteria/CelluleValidationCriteria.model';

@Component({
  selector: 'app-cellule-validation-view-admin',
  templateUrl: './cellule-validation-view-admin.component.html'
})
export class CelluleValidationViewAdminComponent extends AbstractViewController<CelluleValidationDto, CelluleValidationCriteria, CelluleValidationService> implements OnInit {


    constructor(private celluleValidationService: CelluleValidationService){
        super(celluleValidationService);
    }

    ngOnInit(): void {
    }




}
