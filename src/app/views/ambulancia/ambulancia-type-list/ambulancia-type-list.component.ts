import { Location } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AmbulanciaType } from 'app/model/ambulancia_type.model';
import { AmbulanciaTypeService } from 'app/service/ambulancia_type/ambulancia_type.service';
import { GenericListComponent } from 'app/views/generic/generic-list/generic-list.component';
import { AmbulanciaTypeFormComponent } from '../ambulancia-type-form/ambulancia-type-form.component';

@Component({
  selector: 'app-ambulancia-type-list',
  templateUrl: './ambulancia-type-list.component.html',
  styleUrls: ['./ambulancia-type-list.component.scss']
})
export class AmbulanciaTypeListComponent extends GenericListComponent<AmbulanciaType, AmbulanciaTypeService> {

  @ViewChild('ambulanciaTypeModal') ambulanciaTypeModal: AmbulanciaTypeFormComponent;

  constructor(
    service: AmbulanciaTypeService,
    router: Router,
    activedRouter: ActivatedRoute,
    location: Location
  ) {
    super(service, router, activedRouter, location);
  }

  showCreateUpdateModal(ambulanciaType?: AmbulanciaType): void {
    this.ambulanciaTypeModal.initModal(ambulanciaType);
  }

}
