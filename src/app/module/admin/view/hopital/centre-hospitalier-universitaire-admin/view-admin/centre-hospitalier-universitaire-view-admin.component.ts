import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {CentreHospitalierUniversitaireService} from 'src/app/controller/service/CentreHospitalierUniversitaire.service';
import {CentreHospitalierUniversitaireDto} from 'src/app/controller/model/CentreHospitalierUniversitaire.model';
import {CentreHospitalierUniversitaireCriteria} from 'src/app/controller/criteria/CentreHospitalierUniversitaireCriteria.model';

import {HopitalDto} from 'src/app/controller/model/Hopital.model';
import {HopitalService} from 'src/app/controller/service/Hopital.service';
import {UniteAdministrativeDto} from 'src/app/controller/model/UniteAdministrative.model';
import {UniteAdministrativeService} from 'src/app/controller/service/UniteAdministrative.service';
@Component({
  selector: 'app-centre-hospitalier-universitaire-view-admin',
  templateUrl: './centre-hospitalier-universitaire-view-admin.component.html'
})
export class CentreHospitalierUniversitaireViewAdminComponent extends AbstractViewController<CentreHospitalierUniversitaireDto, CentreHospitalierUniversitaireCriteria, CentreHospitalierUniversitaireService> implements OnInit {

    hopitals = new HopitalDto();
    hopitalss: Array<HopitalDto> = [];

    constructor(private centreHospitalierUniversitaireService: CentreHospitalierUniversitaireService, private hopitalService: HopitalService){
        super(centreHospitalierUniversitaireService);
    }

    ngOnInit(): void {
    }




}
