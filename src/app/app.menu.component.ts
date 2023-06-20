import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { AppComponent } from './app.component';
import { AppMainComponent } from './app.main.component';

import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { RoleService } from 'src/app/zynerator/security/Role.service';

@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html',
  animations: [
    trigger('inline', [
      state(
        'hidden',
        style({
          height: '0px',
          overflow: 'hidden',
        })
      ),
      state(
        'visible',
        style({
          height: '*',
        })
      ),
      state(
        'hiddenAnimated',
        style({
          height: '0px',
          overflow: 'hidden',
        })
      ),
      state(
        'visibleAnimated',
        style({
          height: '*',
        })
      ),
      transition(
        'visibleAnimated => hiddenAnimated',
        animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')
      ),
      transition(
        'hiddenAnimated => visibleAnimated',
        animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')
      ),
    ]),
  ],
})
export class AppMenuComponent implements OnInit {
  model: any[];
  modelsuperadmin:any[];
  modelanonymous: any[];
    modeladmin : any[];
  constructor(public app: AppComponent,
   public appMain: AppMainComponent,
   private roleService: RoleService,
   private authService:AuthService,
  private router: Router) {}

  ngOnInit() {


    this.modeladmin =
      [
              {
                label: 'Configuration',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste cause rejet demande rdv',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/configuration/cause-rejet-demande-rdv/list']
                    },
                    {
                      label: 'Liste status rdv',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/configuration/status-rdv/list']
                    },
                    {
                      label: 'Liste jour ferie',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/configuration/jour-ferie/list']
                    },
                    {
                      label: 'Liste template email confirmation',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/configuration/template-email-confirmation/list']
                    },
                ]
              },
              {
                label: 'Hopital Management',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste hopital',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/hopital/hopital/list']
                    },
                    {
                      label: 'Liste unite administrative',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/hopital/unite-administrative/list']
                    },
                    {
                      label: 'Liste prestation',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/hopital/prestation/list']
                    },
                    {
                      label: 'Liste type prestation',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/hopital/type-prestation/list']
                    },
                    {
                      label: 'Liste centre hospitalier universitaire',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/hopital/centre-hospitalier-universitaire/list']
                    },
                ]
              },
              {
                label: 'Patient',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste patient',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/patient/patient/list']
                    },
                ]
              },
              {
                label: 'Gestion RDV',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste demande rdv',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/rdv/demande-rdv/list']
                    },
                ]
              },
              {
                label: 'Operateur Management',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste horaire travaille validation',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/operator/horaire-travaille-validation/list']
                    },
                    {
                      label: 'Liste cellule validation',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/operator/cellule-validation/list']
                    },
                    {
                      label: 'Liste agenda',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/operator/agenda/list']
                    },
                    {
                      label: 'Liste operateur quota',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/operator/operateur-quota/list']
                    },
                    {
                      label: 'Liste operateur',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/operator/operateur/list']
                    },
                    {
                      label: 'Liste operateur agenda',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/operator/operateur-agenda/list']
                    },
                    {
                      label: 'Liste operateur horaire travaille validation',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/operator/operateur-horaire-travaille-validation/list']
                    },
                ]
              },
    ]
        if (this.authService.authenticated) {
      if (this.authService.authenticatedUser.roles) {

        this.authService.authenticatedUser.roles.forEach(role => {
          const roleName: string = this.getRole(role);
          this.roleService._role.next(roleName.toUpperCase());
          eval('this.model = this.model' + this.getRole(role));
        })
      }

    }
  }
  getRole(text){
  const [role, ...rest] = text.split('_');
  return rest.join('').toLowerCase();
}
  onMenuClick(event) {
    this.appMain.onMenuClick(event);
  }
}
