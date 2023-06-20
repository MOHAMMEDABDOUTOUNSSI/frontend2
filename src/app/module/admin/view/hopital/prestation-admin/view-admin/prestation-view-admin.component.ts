import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {PrestationService} from 'src/app/controller/service/Prestation.service';
import {PrestationDto} from 'src/app/controller/model/Prestation.model';
import {PrestationCriteria} from 'src/app/controller/criteria/PrestationCriteria.model';

import {UniteAdministrativeDto} from 'src/app/controller/model/UniteAdministrative.model';
import {UniteAdministrativeService} from 'src/app/controller/service/UniteAdministrative.service';
import {TypePrestationDto} from 'src/app/controller/model/TypePrestation.model';
import {TypePrestationService} from 'src/app/controller/service/TypePrestation.service';
@Component({
  selector: 'app-prestation-view-admin',
  templateUrl: './prestation-view-admin.component.html'
})
export class PrestationViewAdminComponent extends AbstractViewController<PrestationDto, PrestationCriteria, PrestationService> implements OnInit {


    constructor(private prestationService: PrestationService, private uniteAdministrativeService: UniteAdministrativeService, private typePrestationService: TypePrestationService){
        super(prestationService);
    }

    ngOnInit(): void {
        this.typePrestation = new TypePrestationDto();
        this.typePrestationService.findAll().subscribe((data) => this.typePrestations = data);
        this.uniteAdministrative = new UniteAdministrativeDto();
        this.uniteAdministrativeService.findAll().subscribe((data) => this.uniteAdministratives = data);
    }


    get typePrestation(): TypePrestationDto {
       return this.typePrestationService.item;
    }
    set typePrestation(value: TypePrestationDto) {
        this.typePrestationService.item = value;
    }
    get typePrestations():Array<TypePrestationDto> {
       return this.typePrestationService.items;
    }
    set typePrestations(value: Array<TypePrestationDto>) {
        this.typePrestationService.items = value;
    }
    get uniteAdministrative(): UniteAdministrativeDto {
       return this.uniteAdministrativeService.item;
    }
    set uniteAdministrative(value: UniteAdministrativeDto) {
        this.uniteAdministrativeService.item = value;
    }
    get uniteAdministratives():Array<UniteAdministrativeDto> {
       return this.uniteAdministrativeService.items;
    }
    set uniteAdministratives(value: Array<UniteAdministrativeDto>) {
        this.uniteAdministrativeService.items = value;
    }


}
