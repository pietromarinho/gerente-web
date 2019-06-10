import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmbulanciaTypeListComponent } from './ambulancia-type-list/ambulancia-type-list.component';
import { AmbulanciaTypeFormComponent } from './ambulancia-type-form/ambulancia-type-form.component';
import { AmbulanciaRouter } from './ambulancia.routing';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdModule } from 'app/md/md.module';
import { MaterialModule } from 'app/app.module';
import { AmbulanciaFormComponent } from './ambulancia-form/ambulancia-form.component';
import { AmbulanciaListComponent } from './ambulancia-list/ambulancia-list.component';
import { ZonaListComponent } from './zona-list/zona-list.component';
import { ZonaFormComponent } from './zona-form/zona-form.component';
import { EasyAutocompleteModule } from 'app/shared/autocomplete/autocomplete.component';

@NgModule({
  imports: [
    RouterModule.forChild(AmbulanciaRouter),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MdModule,
    MaterialModule,
    EasyAutocompleteModule,
  ],
  declarations: [
    AmbulanciaTypeListComponent,
    AmbulanciaTypeFormComponent,
    AmbulanciaFormComponent,
    AmbulanciaListComponent,
    ZonaListComponent,
    ZonaFormComponent]
})
export class AmbulanciaModule { }
