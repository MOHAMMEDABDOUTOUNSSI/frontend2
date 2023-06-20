import {Component, OnInit} from '@angular/core';
import {PatientService} from 'src/app/controller/service/Patient.service';
import {PatientDto} from 'src/app/controller/model/Patient.model';
import {PatientCriteria} from 'src/app/controller/criteria/PatientCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';




@Component({
  selector: 'app-patient-list-admin',
  templateUrl: './patient-list-admin.component.html'
})
export class PatientListAdminComponent extends AbstractListController<PatientDto, PatientCriteria, PatientService>  implements OnInit {

    fileName = 'Patient';

  
    constructor(patientService: PatientService) {
        super(patientService);
        this.pdfName='Patient.pdf';
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadPatients(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Patient', 'list');
        isPermistted ? this.service.findAll().subscribe(patients => this.items = patients,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'ipp', header: 'Ipp'},
            {field: 'email', header: 'Email'},
            {field: 'cin', header: 'Cin'},
            {field: 'codeRamed', header: 'Code ramed'},
        ];
    }



	public initDuplicate(res: PatientDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Ipp': e.ipp ,
                 'Adresse': e.adresse ,
                 'Email': e.email ,
                 'Cin': e.cin ,
                 'Code ramed': e.codeRamed ,
            }
        });

        this.criteriaData = [{
            'Ipp': this.criteria.ipp ? this.criteria.ipp : environment.emptyForExport ,
            'Adresse': this.criteria.adresse ? this.criteria.adresse : environment.emptyForExport ,
            'Email': this.criteria.email ? this.criteria.email : environment.emptyForExport ,
            'Cin': this.criteria.cin ? this.criteria.cin : environment.emptyForExport ,
            'Code ramed': this.criteria.codeRamed ? this.criteria.codeRamed : environment.emptyForExport ,
        }];
      }
}
