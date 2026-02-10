import { Routes } from '@angular/router';
import { Login } from './features/auth/login/login';
import { UserComponent } from './features/user/user';
import { SupportEngineer } from './features/support-engineer/support-engineer';
import { AuthLayout } from './features/layouts/auth-layout/auth-layout';
import { MainLayout } from './features/layouts/main-layout/main-layout';
import { Resource } from './features/user-manual/resource/resource';
import { TechnicalDetailsLearnt } from './features/user-manual/technical-details-learnt/technical-details-learnt';
import { UserManual } from './features/user-manual/user-manual/user-manual';
import { Supervisor } from './features/supervisor/supervisor';

export const routes: Routes = [
    {
        path: '',
        component: AuthLayout,
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login', component: Login },
            { path: 'user-manual', component: UserManual },
            { path: 'technical-details-learnt', component: TechnicalDetailsLearnt },
            { path: 'resource', component: Resource },
        ]
    },
    {
        path: '',
        component: MainLayout,
        children: [
            { path: 'supervisor', component: Supervisor },
            { path: 'support', component: SupportEngineer },
            { path: 'user', component: UserComponent },



        ]
    },
];
