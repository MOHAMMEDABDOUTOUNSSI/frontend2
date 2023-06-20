import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {TypePrestationService} from 'src/app/controller/service/TypePrestation.service';
import {TypePrestationDto} from 'src/app/controller/model/TypePrestation.model';
import {TypePrestationCriteria} from 'src/app/controller/criteria/TypePrestationCriteria.model';

@Component({
  selector: 'app-type-prestation-view-admin',
  templateUrl: './type-prestation-view-admin.component.html'
})
export class TypePrestationViewAdminComponent extends AbstractViewController<TypePrestationDto, TypePrestationCriteria, TypePrestationService> implements OnInit {


    constructor(private typePrestationService: TypePrestationService){
        super(typePrestationService);
    }

    ngOnInit(): void {
    }




}
