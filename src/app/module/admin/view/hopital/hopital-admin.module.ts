import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextareaModule} from 'primeng/inputtextarea';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {PanelModule} from 'primeng/panel';
import {InputNumberModule} from 'primeng/inputnumber';
import {BadgeModule} from 'primeng/badge';
import { MultiSelectModule } from 'primeng/multiselect';
import {TranslateModule} from '@ngx-translate/core';
import {FileUploadModule} from "primeng/fileupload";

import { HopitalCreateAdminComponent } from './hopital-admin/create-admin/hopital-create-admin.component';
import { HopitalEditAdminComponent } from './hopital-admin/edit-admin/hopital-edit-admin.component';
import { HopitalViewAdminComponent } from './hopital-admin/view-admin/hopital-view-admin.component';
import { HopitalListAdminComponent } from './hopital-admin/list-admin/hopital-list-admin.component';
import { UniteAdministrativeCreateAdminComponent } from './unite-administrative-admin/create-admin/unite-administrative-create-admin.component';
import { UniteAdministrativeEditAdminComponent } from './unite-administrative-admin/edit-admin/unite-administrative-edit-admin.component';
import { UniteAdministrativeViewAdminComponent } from './unite-administrative-admin/view-admin/unite-administrative-view-admin.component';
import { UniteAdministrativeListAdminComponent } from './unite-administrative-admin/list-admin/unite-administrative-list-admin.component';
import { PrestationCreateAdminComponent } from './prestation-admin/create-admin/prestation-create-admin.component';
import { PrestationEditAdminComponent } from './prestation-admin/edit-admin/prestation-edit-admin.component';
import { PrestationViewAdminComponent } from './prestation-admin/view-admin/prestation-view-admin.component';
import { PrestationListAdminComponent } from './prestation-admin/list-admin/prestation-list-admin.component';
import { TypePrestationCreateAdminComponent } from './type-prestation-admin/create-admin/type-prestation-create-admin.component';
import { TypePrestationEditAdminComponent } from './type-prestation-admin/edit-admin/type-prestation-edit-admin.component';
import { TypePrestationViewAdminComponent } from './type-prestation-admin/view-admin/type-prestation-view-admin.component';
import { TypePrestationListAdminComponent } from './type-prestation-admin/list-admin/type-prestation-list-admin.component';
import { CentreHospitalierUniversitaireCreateAdminComponent } from './centre-hospitalier-universitaire-admin/create-admin/centre-hospitalier-universitaire-create-admin.component';
import { CentreHospitalierUniversitaireEditAdminComponent } from './centre-hospitalier-universitaire-admin/edit-admin/centre-hospitalier-universitaire-edit-admin.component';
import { CentreHospitalierUniversitaireViewAdminComponent } from './centre-hospitalier-universitaire-admin/view-admin/centre-hospitalier-universitaire-view-admin.component';
import { CentreHospitalierUniversitaireListAdminComponent } from './centre-hospitalier-universitaire-admin/list-admin/centre-hospitalier-universitaire-list-admin.component';

import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TabViewModule} from 'primeng/tabview';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MessageModule } from 'primeng/message';
import {MessagesModule} from 'primeng/messages';
import {PaginatorModule} from 'primeng/paginator';



@NgModule({
  declarations: [

    HopitalCreateAdminComponent,
    HopitalListAdminComponent,
    HopitalViewAdminComponent,
    HopitalEditAdminComponent,
    UniteAdministrativeCreateAdminComponent,
    UniteAdministrativeListAdminComponent,
    UniteAdministrativeViewAdminComponent,
    UniteAdministrativeEditAdminComponent,
    PrestationCreateAdminComponent,
    PrestationListAdminComponent,
    PrestationViewAdminComponent,
    PrestationEditAdminComponent,
    TypePrestationCreateAdminComponent,
    TypePrestationListAdminComponent,
    TypePrestationViewAdminComponent,
    TypePrestationEditAdminComponent,
    CentreHospitalierUniversitaireCreateAdminComponent,
    CentreHospitalierUniversitaireListAdminComponent,
    CentreHospitalierUniversitaireViewAdminComponent,
    CentreHospitalierUniversitaireEditAdminComponent,
  ],
  imports: [
    CommonModule,
    ToastModule,
    ToolbarModule,
    TableModule,
    ConfirmDialogModule,
    DialogModule,
    PasswordModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SplitButtonModule,
    BrowserAnimationsModule,
    DropdownModule,
    TabViewModule,
    InputSwitchModule,
    InputTextareaModule,
    CalendarModule,
    PanelModule,
    MessageModule,
    MessagesModule,
    InputNumberModule,
    BadgeModule,
    MultiSelectModule,
    PaginatorModule,
    TranslateModule,
    FileUploadModule,
  ],
  exports: [
  HopitalCreateAdminComponent,
  HopitalListAdminComponent,
  HopitalViewAdminComponent,
  HopitalEditAdminComponent,
  UniteAdministrativeCreateAdminComponent,
  UniteAdministrativeListAdminComponent,
  UniteAdministrativeViewAdminComponent,
  UniteAdministrativeEditAdminComponent,
  PrestationCreateAdminComponent,
  PrestationListAdminComponent,
  PrestationViewAdminComponent,
  PrestationEditAdminComponent,
  TypePrestationCreateAdminComponent,
  TypePrestationListAdminComponent,
  TypePrestationViewAdminComponent,
  TypePrestationEditAdminComponent,
  CentreHospitalierUniversitaireCreateAdminComponent,
  CentreHospitalierUniversitaireListAdminComponent,
  CentreHospitalierUniversitaireViewAdminComponent,
  CentreHospitalierUniversitaireEditAdminComponent,
  ],
  entryComponents: [],
})
export class HopitalAdminModule { }