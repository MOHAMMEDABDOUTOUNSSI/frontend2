
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



import { HopitalListAdminComponent } from './hopital-admin/list-admin/hopital-list-admin.component';
import { UniteAdministrativeListAdminComponent } from './unite-administrative-admin/list-admin/unite-administrative-list-admin.component';
import { PrestationListAdminComponent } from './prestation-admin/list-admin/prestation-list-admin.component';
import { TypePrestationListAdminComponent } from './type-prestation-admin/list-admin/type-prestation-list-admin.component';
import { CentreHospitalierUniversitaireListAdminComponent } from './centre-hospitalier-universitaire-admin/list-admin/centre-hospitalier-universitaire-list-admin.component';
@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [


                        {

                            path: 'hopital',
                            children: [
                                {
                                    path: 'list',
                                    component: HopitalListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'unite-administrative',
                            children: [
                                {
                                    path: 'list',
                                    component: UniteAdministrativeListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'prestation',
                            children: [
                                {
                                    path: 'list',
                                    component: PrestationListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'type-prestation',
                            children: [
                                {
                                    path: 'list',
                                    component: TypePrestationListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'centre-hospitalier-universitaire',
                            children: [
                                {
                                    path: 'list',
                                    component: CentreHospitalierUniversitaireListAdminComponent ,
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
export class HopitalAdminRoutingModule { }
