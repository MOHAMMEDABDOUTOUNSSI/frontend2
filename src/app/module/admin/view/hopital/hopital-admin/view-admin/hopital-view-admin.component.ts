import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {HopitalService} from 'src/app/controller/service/Hopital.service';
import {HopitalDto} from 'src/app/controller/model/Hopital.model';
import {HopitalCriteria} from 'src/app/controller/criteria/HopitalCriteria.model';

import {PrestationDto} from 'src/app/controller/model/Prestation.model';
import {PrestationService} from 'src/app/controller/service/Prestation.service';
import {CentreHospitalierUniversitaireDto} from 'src/app/controller/model/CentreHospitalierUniversitaire.model';
import {CentreHospitalierUniversitaireService} from 'src/app/controller/service/CentreHospitalierUniversitaire.service';
import {UniteAdministrativeDto} from 'src/app/controller/model/UniteAdministrative.model';
import {UniteAdministrativeService} from 'src/app/controller/service/UniteAdministrative.service';
@Component({
  selector: 'app-hopital-view-admin',
  templateUrl: './hopital-view-admin.component.html'
})
export class HopitalViewAdminComponent extends AbstractViewController<HopitalDto, HopitalCriteria, HopitalService> implements OnInit {

    uniteAdministratives = new UniteAdministrativeDto();
    uniteAdministrativess: Array<UniteAdministrativeDto> = [];

    constructor(private hopitalService: HopitalService, private centreHospitalierUniversitaireService: CentreHospitalierUniversitaireService, private uniteAdministrativeService: UniteAdministrativeService){
        super(hopitalService);
    }

    ngOnInit(): void {
        this.centreHospitalierUniversitaire = new CentreHospitalierUniversitaireDto();
        this.centreHospitalierUniversitaireService.findAll().subscribe((data) => this.centreHospitalierUniversitaires = data);
    }


    get centreHospitalierUniversitaire(): CentreHospitalierUniversitaireDto {
       return this.centreHospitalierUniversitaireService.item;
    }
    set centreHospitalierUniversitaire(value: CentreHospitalierUniversitaireDto) {
        this.centreHospitalierUniversitaireService.item = value;
    }
    get centreHospitalierUniversitaires():Array<CentreHospitalierUniversitaireDto> {
       return this.centreHospitalierUniversitaireService.items;
    }
    set centreHospitalierUniversitaires(value: Array<CentreHospitalierUniversitaireDto>) {
        this.centreHospitalierUniversitaireService.items = value;
    }


}
