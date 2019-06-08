import { Routes } from '@angular/router';
import { FuncionarioListComponent } from './funcionario-list/funcionario-list.component';
import { FuncaoListComponent } from './funcao-list/funcao-list.component';

export const FuncionarioRouter: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: 'registros',
                pathMatch: 'full'
            }, {
                path: 'registros',
                component: FuncionarioListComponent,
            },
            {
                path: 'funcao',
                component: FuncaoListComponent
            },
        ]
    }
];
