import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {UniteAdministrativeService} from 'src/app/controller/service/UniteAdministrative.service';
import {UniteAdministrativeDto} from 'src/app/controller/model/UniteAdministrative.model';
import {UniteAdministrativeCriteria} from 'src/app/controller/criteria/UniteAdministrativeCriteria.model';

import {HopitalDto} from 'src/app/controller/model/Hopital.model';
import {HopitalService} from 'src/app/controller/service/Hopital.service';
import {PrestationDto} from 'src/app/controller/model/Prestation.model';
import {PrestationService} from 'src/app/controller/service/Prestation.service';
import {TypePrestationDto} from 'src/app/controller/model/TypePrestation.model';
import {TypePrestationService} from 'src/app/controller/service/TypePrestation.service';
@Component({
  selector: 'app-unite-administrative-view-admin',
  templateUrl: './unite-administrative-view-admin.component.html'
})
export class UniteAdministrativeViewAdminComponent extends AbstractViewController<UniteAdministrativeDto, UniteAdministrativeCriteria, UniteAdministrativeService> implements OnInit {

    prestations = new PrestationDto();
    prestationss: Array<PrestationDto> = [];

    constructor(private uniteAdministrativeService: UniteAdministrativeService, private hopitalService: HopitalService, private prestationService: PrestationService, private typePrestationService: TypePrestationService){
        super(uniteAdministrativeService);
    }

    ngOnInit(): void {
        this.prestations.typePrestation = new TypePrestationDto();
        this.typePrestationService.findAll().subscribe((data) => this.typePrestations = data);
        this.hopital = new HopitalDto();
        this.hopitalService.findAll().subscribe((data) => this.hopitals = data);
    }


    get hopital(): HopitalDto {
       return this.hopitalService.item;
    }
    set hopital(value: HopitalDto) {
        this.hopitalService.item = value;
    }
    get hopitals():Array<HopitalDto> {
       return this.hopitalService.items;
    }
    set hopitals(value: Array<HopitalDto>) {
        this.hopitalService.items = value;
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


}
