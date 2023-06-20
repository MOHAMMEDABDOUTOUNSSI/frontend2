import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {PatientService} from 'src/app/controller/service/Patient.service';
import {PatientDto} from 'src/app/controller/model/Patient.model';
import {PatientCriteria} from 'src/app/controller/criteria/PatientCriteria.model';

@Component({
  selector: 'app-patient-view-admin',
  templateUrl: './patient-view-admin.component.html'
})
export class PatientViewAdminComponent extends AbstractViewController<PatientDto, PatientCriteria, PatientService> implements OnInit {


    constructor(private patientService: PatientService){
        super(patientService);
    }

    ngOnInit(): void {
    }




}
