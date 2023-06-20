import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {CauseRejetDemandeRdvService} from 'src/app/controller/service/CauseRejetDemandeRdv.service';
import {CauseRejetDemandeRdvDto} from 'src/app/controller/model/CauseRejetDemandeRdv.model';
import {CauseRejetDemandeRdvCriteria} from 'src/app/controller/criteria/CauseRejetDemandeRdvCriteria.model';

@Component({
  selector: 'app-cause-rejet-demande-rdv-view-admin',
  templateUrl: './cause-rejet-demande-rdv-view-admin.component.html'
})
export class CauseRejetDemandeRdvViewAdminComponent extends AbstractViewController<CauseRejetDemandeRdvDto, CauseRejetDemandeRdvCriteria, CauseRejetDemandeRdvService> implements OnInit {


    constructor(private causeRejetDemandeRdvService: CauseRejetDemandeRdvService){
        super(causeRejetDemandeRdvService);
    }

    ngOnInit(): void {
    }




}
