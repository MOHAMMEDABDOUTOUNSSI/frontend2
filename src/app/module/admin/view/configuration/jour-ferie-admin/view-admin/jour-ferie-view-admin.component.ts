import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {JourFerieService} from 'src/app/controller/service/JourFerie.service';
import {JourFerieDto} from 'src/app/controller/model/JourFerie.model';
import {JourFerieCriteria} from 'src/app/controller/criteria/JourFerieCriteria.model';

@Component({
  selector: 'app-jour-ferie-view-admin',
  templateUrl: './jour-ferie-view-admin.component.html'
})
export class JourFerieViewAdminComponent extends AbstractViewController<JourFerieDto, JourFerieCriteria, JourFerieService> implements OnInit {


    constructor(private jourFerieService: JourFerieService){
        super(jourFerieService);
    }

    ngOnInit(): void {
    }




}
