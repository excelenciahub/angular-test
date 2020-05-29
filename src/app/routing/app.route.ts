import { Routes } from '@angular/router';
import { PostComponent } from '../components';


export const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'post',
        pathMatch: 'full',
    },
    {
        path: 'post',
        component: PostComponent
    }
];
