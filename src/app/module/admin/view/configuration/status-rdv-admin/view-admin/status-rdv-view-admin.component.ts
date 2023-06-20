import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {StatusRdvService} from 'src/app/controller/service/StatusRdv.service';
import {StatusRdvDto} from 'src/app/controller/model/StatusRdv.model';
import {StatusRdvCriteria} from 'src/app/controller/criteria/StatusRdvCriteria.model';

@Component({
  selector: 'app-status-rdv-view-admin',
  templateUrl: './status-rdv-view-admin.component.html'
})
export class StatusRdvViewAdminComponent extends AbstractViewController<StatusRdvDto, StatusRdvCriteria, StatusRdvService> implements OnInit {


    constructor(private statusRdvService: StatusRdvService){
        super(statusRdvService);
    }

    ngOnInit(): void {
    }




}
