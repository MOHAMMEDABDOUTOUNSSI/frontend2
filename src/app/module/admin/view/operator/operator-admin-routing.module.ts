
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



import { HoraireTravailleValidationListAdminComponent } from './horaire-travaille-validation-admin/list-admin/horaire-travaille-validation-list-admin.component';
import { CelluleValidationListAdminComponent } from './cellule-validation-admin/list-admin/cellule-validation-list-admin.component';
import { AgendaListAdminComponent } from './agenda-admin/list-admin/agenda-list-admin.component';
import { OperateurQuotaListAdminComponent } from './operateur-quota-admin/list-admin/operateur-quota-list-admin.component';
import { OperateurListAdminComponent } from './operateur-admin/list-admin/operateur-list-admin.component';
import { OperateurAgendaListAdminComponent } from './operateur-agenda-admin/list-admin/operateur-agenda-list-admin.component';
import { OperateurHoraireTravailleValidationListAdminComponent } from './operateur-horaire-travaille-validation-admin/list-admin/operateur-horaire-travaille-validation-list-admin.component';
@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [


                        {

                            path: 'horaire-travaille-validation',
                            children: [
                                {
                                    path: 'list',
                                    component: HoraireTravailleValidationListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'cellule-validation',
                            children: [
                                {
                                    path: 'list',
                                    component: CelluleValidationListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'agenda',
                            children: [
                                {
                                    path: 'list',
                                    component: AgendaListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'operateur-quota',
                            children: [
                                {
                                    path: 'list',
                                    component: OperateurQuotaListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'operateur',
                            children: [
                                {
                                    path: 'list',
                                    component: OperateurListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'operateur-agenda',
                            children: [
                                {
                                    path: 'list',
                                    component: OperateurAgendaListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'operateur-horaire-travaille-validation',
                            children: [
                                {
                                    path: 'list',
                                    component: OperateurHoraireTravailleValidationListAdminComponent ,
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
export class OperatorAdminRoutingModule { }
