
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';

import { LoginAdminComponent } from './login-admin/login-admin.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';

@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [
                        {
                            path: 'login',
                            children: [
                                {
                                    path: '',
                                    component: LoginAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                              ]
                        },
                        {
                            path: 'register',
                            children: [
                                {
                                    path: '',
                                    component: RegisterAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                              ]
                        },
                        {

                            path: 'rdv',
                            loadChildren: () => import('./view/rdv/rdv-admin-routing.module').then(x=>x.RdvAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {

                            path: 'hopital',
                            loadChildren: () => import('./view/hopital/hopital-admin-routing.module').then(x=>x.HopitalAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {

                            path: 'configuration',
                            loadChildren: () => import('./view/configuration/configuration-admin-routing.module').then(x=>x.ConfigurationAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {

                            path: 'patient',
                            loadChildren: () => import('./view/patient/patient-admin-routing.module').then(x=>x.PatientAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {

                            path: 'operator',
                            loadChildren: () => import('./view/operator/operator-admin-routing.module').then(x=>x.OperatorAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                    ]
                },
            ]
        ),
    ],
    exports: [RouterModule],
})
export class AdminRoutingModule { }
