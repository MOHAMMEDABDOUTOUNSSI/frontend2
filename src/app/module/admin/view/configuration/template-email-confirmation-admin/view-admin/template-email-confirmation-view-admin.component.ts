import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {TemplateEmailConfirmationService} from 'src/app/controller/service/TemplateEmailConfirmation.service';
import {TemplateEmailConfirmationDto} from 'src/app/controller/model/TemplateEmailConfirmation.model';
import {TemplateEmailConfirmationCriteria} from 'src/app/controller/criteria/TemplateEmailConfirmationCriteria.model';

@Component({
  selector: 'app-template-email-confirmation-view-admin',
  templateUrl: './template-email-confirmation-view-admin.component.html'
})
export class TemplateEmailConfirmationViewAdminComponent extends AbstractViewController<TemplateEmailConfirmationDto, TemplateEmailConfirmationCriteria, TemplateEmailConfirmationService> implements OnInit {


    constructor(private templateEmailConfirmationService: TemplateEmailConfirmationService){
        super(templateEmailConfirmationService);
    }

    ngOnInit(): void {
    }




}
