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
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {PanelModule} from 'primeng/panel';
import {InputNumberModule} from 'primeng/inputnumber';
import {BadgeModule} from 'primeng/badge';
import { MultiSelectModule } from 'primeng/multiselect';
import { RdvAdminModule } from './view/rdv/rdv-admin.module';
import { RdvAdminRoutingModule } from './view/rdv/rdv-admin-routing.module';
import { HopitalAdminModule } from './view/hopital/hopital-admin.module';
import { HopitalAdminRoutingModule } from './view/hopital/hopital-admin-routing.module';
import { ConfigurationAdminModule } from './view/configuration/configuration-admin.module';
import { ConfigurationAdminRoutingModule } from './view/configuration/configuration-admin-routing.module';
import { PatientAdminModule } from './view/patient/patient-admin.module';
import { PatientAdminRoutingModule } from './view/patient/patient-admin-routing.module';
import { OperatorAdminModule } from './view/operator/operator-admin.module';
import { OperatorAdminRoutingModule } from './view/operator/operator-admin-routing.module';


import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TabViewModule} from 'primeng/tabview';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MessageModule } from 'primeng/message';
import {MessagesModule} from 'primeng/messages';


@NgModule({
  declarations: [
   LoginAdminComponent,
   RegisterAdminComponent
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
  RdvAdminModule,
  RdvAdminRoutingModule,
  HopitalAdminModule,
  HopitalAdminRoutingModule,
  ConfigurationAdminModule,
  ConfigurationAdminRoutingModule,
  PatientAdminModule,
  PatientAdminRoutingModule,
  OperatorAdminModule,
  OperatorAdminRoutingModule,
  ],
  exports: [
  LoginAdminComponent,
  RegisterAdminComponent,

    RdvAdminModule,
    HopitalAdminModule,
    ConfigurationAdminModule,
    PatientAdminModule,
    OperatorAdminModule,
  ],
  entryComponents: [],
})
export class AdminModule { }
