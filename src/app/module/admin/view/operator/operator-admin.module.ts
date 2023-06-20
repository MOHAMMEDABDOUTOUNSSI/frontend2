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

import { HoraireTravailleValidationCreateAdminComponent } from './horaire-travaille-validation-admin/create-admin/horaire-travaille-validation-create-admin.component';
import { HoraireTravailleValidationEditAdminComponent } from './horaire-travaille-validation-admin/edit-admin/horaire-travaille-validation-edit-admin.component';
import { HoraireTravailleValidationViewAdminComponent } from './horaire-travaille-validation-admin/view-admin/horaire-travaille-validation-view-admin.component';
import { HoraireTravailleValidationListAdminComponent } from './horaire-travaille-validation-admin/list-admin/horaire-travaille-validation-list-admin.component';
import { CelluleValidationCreateAdminComponent } from './cellule-validation-admin/create-admin/cellule-validation-create-admin.component';
import { CelluleValidationEditAdminComponent } from './cellule-validation-admin/edit-admin/cellule-validation-edit-admin.component';
import { CelluleValidationViewAdminComponent } from './cellule-validation-admin/view-admin/cellule-validation-view-admin.component';
import { CelluleValidationListAdminComponent } from './cellule-validation-admin/list-admin/cellule-validation-list-admin.component';
import { AgendaCreateAdminComponent } from './agenda-admin/create-admin/agenda-create-admin.component';
import { AgendaEditAdminComponent } from './agenda-admin/edit-admin/agenda-edit-admin.component';
import { AgendaViewAdminComponent } from './agenda-admin/view-admin/agenda-view-admin.component';
import { AgendaListAdminComponent } from './agenda-admin/list-admin/agenda-list-admin.component';
import { OperateurQuotaCreateAdminComponent } from './operateur-quota-admin/create-admin/operateur-quota-create-admin.component';
import { OperateurQuotaEditAdminComponent } from './operateur-quota-admin/edit-admin/operateur-quota-edit-admin.component';
import { OperateurQuotaViewAdminComponent } from './operateur-quota-admin/view-admin/operateur-quota-view-admin.component';
import { OperateurQuotaListAdminComponent } from './operateur-quota-admin/list-admin/operateur-quota-list-admin.component';
import { OperateurCreateAdminComponent } from './operateur-admin/create-admin/operateur-create-admin.component';
import { OperateurEditAdminComponent } from './operateur-admin/edit-admin/operateur-edit-admin.component';
import { OperateurViewAdminComponent } from './operateur-admin/view-admin/operateur-view-admin.component';
import { OperateurListAdminComponent } from './operateur-admin/list-admin/operateur-list-admin.component';
import { OperateurAgendaCreateAdminComponent } from './operateur-agenda-admin/create-admin/operateur-agenda-create-admin.component';
import { OperateurAgendaEditAdminComponent } from './operateur-agenda-admin/edit-admin/operateur-agenda-edit-admin.component';
import { OperateurAgendaViewAdminComponent } from './operateur-agenda-admin/view-admin/operateur-agenda-view-admin.component';
import { OperateurAgendaListAdminComponent } from './operateur-agenda-admin/list-admin/operateur-agenda-list-admin.component';
import { OperateurHoraireTravailleValidationCreateAdminComponent } from './operateur-horaire-travaille-validation-admin/create-admin/operateur-horaire-travaille-validation-create-admin.component';
import { OperateurHoraireTravailleValidationEditAdminComponent } from './operateur-horaire-travaille-validation-admin/edit-admin/operateur-horaire-travaille-validation-edit-admin.component';
import { OperateurHoraireTravailleValidationViewAdminComponent } from './operateur-horaire-travaille-validation-admin/view-admin/operateur-horaire-travaille-validation-view-admin.component';
import { OperateurHoraireTravailleValidationListAdminComponent } from './operateur-horaire-travaille-validation-admin/list-admin/operateur-horaire-travaille-validation-list-admin.component';

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

    HoraireTravailleValidationCreateAdminComponent,
    HoraireTravailleValidationListAdminComponent,
    HoraireTravailleValidationViewAdminComponent,
    HoraireTravailleValidationEditAdminComponent,
    CelluleValidationCreateAdminComponent,
    CelluleValidationListAdminComponent,
    CelluleValidationViewAdminComponent,
    CelluleValidationEditAdminComponent,
    AgendaCreateAdminComponent,
    AgendaListAdminComponent,
    AgendaViewAdminComponent,
    AgendaEditAdminComponent,
    OperateurQuotaCreateAdminComponent,
    OperateurQuotaListAdminComponent,
    OperateurQuotaViewAdminComponent,
    OperateurQuotaEditAdminComponent,
    OperateurCreateAdminComponent,
    OperateurListAdminComponent,
    OperateurViewAdminComponent,
    OperateurEditAdminComponent,
    OperateurAgendaCreateAdminComponent,
    OperateurAgendaListAdminComponent,
    OperateurAgendaViewAdminComponent,
    OperateurAgendaEditAdminComponent,
    OperateurHoraireTravailleValidationCreateAdminComponent,
    OperateurHoraireTravailleValidationListAdminComponent,
    OperateurHoraireTravailleValidationViewAdminComponent,
    OperateurHoraireTravailleValidationEditAdminComponent,
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
  HoraireTravailleValidationCreateAdminComponent,
  HoraireTravailleValidationListAdminComponent,
  HoraireTravailleValidationViewAdminComponent,
  HoraireTravailleValidationEditAdminComponent,
  CelluleValidationCreateAdminComponent,
  CelluleValidationListAdminComponent,
  CelluleValidationViewAdminComponent,
  CelluleValidationEditAdminComponent,
  AgendaCreateAdminComponent,
  AgendaListAdminComponent,
  AgendaViewAdminComponent,
  AgendaEditAdminComponent,
  OperateurQuotaCreateAdminComponent,
  OperateurQuotaListAdminComponent,
  OperateurQuotaViewAdminComponent,
  OperateurQuotaEditAdminComponent,
  OperateurCreateAdminComponent,
  OperateurListAdminComponent,
  OperateurViewAdminComponent,
  OperateurEditAdminComponent,
  OperateurAgendaCreateAdminComponent,
  OperateurAgendaListAdminComponent,
  OperateurAgendaViewAdminComponent,
  OperateurAgendaEditAdminComponent,
  OperateurHoraireTravailleValidationCreateAdminComponent,
  OperateurHoraireTravailleValidationListAdminComponent,
  OperateurHoraireTravailleValidationViewAdminComponent,
  OperateurHoraireTravailleValidationEditAdminComponent,
  ],
  entryComponents: [],
})
export class OperatorAdminModule { }