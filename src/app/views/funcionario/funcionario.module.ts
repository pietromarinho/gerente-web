import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'app/app.module';
import { MdModule } from 'app/md/md.module';
import { FuncionarioFormComponent } from './funcionario-form/funcionario-form.component';
import { FuncionarioListComponent } from './funcionario-list/funcionario-list.component';
import { FuncionarioRouter } from './Funcionario.routing';

@NgModule({
  imports: [
    RouterModule.forChild(FuncionarioRouter),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MdModule,
    MaterialModule,
  ],
  declarations: [FuncionarioFormComponent, FuncionarioListComponent]
})
export class FuncionarioModule { }
