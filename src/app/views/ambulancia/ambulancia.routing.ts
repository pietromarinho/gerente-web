import { Routes } from '@angular/router';
import { AmbulanciaTypeListComponent } from './ambulancia-type-list/ambulancia-type-list.component';

export const AmbulanciaRouter: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: 'registros',
                pathMatch: 'full'
            }, {
                path: 'registros',
                // component: AmbulanciaListComponent,
            },
            {
                path: 'tipo',
                component: AmbulanciaTypeListComponent
            },
        ]
    }
];
