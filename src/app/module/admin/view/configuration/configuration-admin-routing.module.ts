
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



import { CauseRejetDemandeRdvListAdminComponent } from './cause-rejet-demande-rdv-admin/list-admin/cause-rejet-demande-rdv-list-admin.component';
import { StatusRdvListAdminComponent } from './status-rdv-admin/list-admin/status-rdv-list-admin.component';
import { JourFerieListAdminComponent } from './jour-ferie-admin/list-admin/jour-ferie-list-admin.component';
import { TemplateEmailConfirmationListAdminComponent } from './template-email-confirmation-admin/list-admin/template-email-confirmation-list-admin.component';
@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [


                        {

                            path: 'cause-rejet-demande-rdv',
                            children: [
                                {
                                    path: 'list',
                                    component: CauseRejetDemandeRdvListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'status-rdv',
                            children: [
                                {
                                    path: 'list',
                                    component: StatusRdvListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'jour-ferie',
                            children: [
                                {
                                    path: 'list',
                                    component: JourFerieListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'template-email-confirmation',
                            children: [
                                {
                                    path: 'list',
                                    component: TemplateEmailConfirmationListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                    ]
                },
            ]
        ),
    ],
    exports: [RouterModule],
})
export class ConfigurationAdminRoutingModule { }
