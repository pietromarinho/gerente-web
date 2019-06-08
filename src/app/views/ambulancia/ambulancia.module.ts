import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmbulanciaTypeListComponent } from './ambulancia-type-list/ambulancia-type-list.component';
import { AmbulanciaTypeFormComponent } from './ambulancia-type-form/ambulancia-type-form.component';
import { AmbulanciaRouter } from './ambulancia.routing';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdModule } from 'app/md/md.module';
import { MaterialModule } from 'app/app.module';

@NgModule({
  imports: [
    RouterModule.forChild(AmbulanciaRouter),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MdModule,
    MaterialModule,
  ],
  declarations: [AmbulanciaTypeListComponent, AmbulanciaTypeFormComponent]
})
export class AmbulanciaModule { }
