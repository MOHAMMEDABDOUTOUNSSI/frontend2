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

import { CauseRejetDemandeRdvCreateAdminComponent } from './cause-rejet-demande-rdv-admin/create-admin/cause-rejet-demande-rdv-create-admin.component';
import { CauseRejetDemandeRdvEditAdminComponent } from './cause-rejet-demande-rdv-admin/edit-admin/cause-rejet-demande-rdv-edit-admin.component';
import { CauseRejetDemandeRdvViewAdminComponent } from './cause-rejet-demande-rdv-admin/view-admin/cause-rejet-demande-rdv-view-admin.component';
import { CauseRejetDemandeRdvListAdminComponent } from './cause-rejet-demande-rdv-admin/list-admin/cause-rejet-demande-rdv-list-admin.component';
import { StatusRdvCreateAdminComponent } from './status-rdv-admin/create-admin/status-rdv-create-admin.component';
import { StatusRdvEditAdminComponent } from './status-rdv-admin/edit-admin/status-rdv-edit-admin.component';
import { StatusRdvViewAdminComponent } from './status-rdv-admin/view-admin/status-rdv-view-admin.component';
import { StatusRdvListAdminComponent } from './status-rdv-admin/list-admin/status-rdv-list-admin.component';
import { JourFerieCreateAdminComponent } from './jour-ferie-admin/create-admin/jour-ferie-create-admin.component';
import { JourFerieEditAdminComponent } from './jour-ferie-admin/edit-admin/jour-ferie-edit-admin.component';
import { JourFerieViewAdminComponent } from './jour-ferie-admin/view-admin/jour-ferie-view-admin.component';
import { JourFerieListAdminComponent } from './jour-ferie-admin/list-admin/jour-ferie-list-admin.component';
import { TemplateEmailConfirmationCreateAdminComponent } from './template-email-confirmation-admin/create-admin/template-email-confirmation-create-admin.component';
import { TemplateEmailConfirmationEditAdminComponent } from './template-email-confirmation-admin/edit-admin/template-email-confirmation-edit-admin.component';
import { TemplateEmailConfirmationViewAdminComponent } from './template-email-confirmation-admin/view-admin/template-email-confirmation-view-admin.component';
import { TemplateEmailConfirmationListAdminComponent } from './template-email-confirmation-admin/list-admin/template-email-confirmation-list-admin.component';

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

    CauseRejetDemandeRdvCreateAdminComponent,
    CauseRejetDemandeRdvListAdminComponent,
    CauseRejetDemandeRdvViewAdminComponent,
    CauseRejetDemandeRdvEditAdminComponent,
    StatusRdvCreateAdminComponent,
    StatusRdvListAdminComponent,
    StatusRdvViewAdminComponent,
    StatusRdvEditAdminComponent,
    JourFerieCreateAdminComponent,
    JourFerieListAdminComponent,
    JourFerieViewAdminComponent,
    JourFerieEditAdminComponent,
    TemplateEmailConfirmationCreateAdminComponent,
    TemplateEmailConfirmationListAdminComponent,
    TemplateEmailConfirmationViewAdminComponent,
    TemplateEmailConfirmationEditAdminComponent,
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
  CauseRejetDemandeRdvCreateAdminComponent,
  CauseRejetDemandeRdvListAdminComponent,
  CauseRejetDemandeRdvViewAdminComponent,
  CauseRejetDemandeRdvEditAdminComponent,
  StatusRdvCreateAdminComponent,
  StatusRdvListAdminComponent,
  StatusRdvViewAdminComponent,
  StatusRdvEditAdminComponent,
  JourFerieCreateAdminComponent,
  JourFerieListAdminComponent,
  JourFerieViewAdminComponent,
  JourFerieEditAdminComponent,
  TemplateEmailConfirmationCreateAdminComponent,
  TemplateEmailConfirmationListAdminComponent,
  TemplateEmailConfirmationViewAdminComponent,
  TemplateEmailConfirmationEditAdminComponent,
  ],
  entryComponents: [],
})
export class ConfigurationAdminModule { }