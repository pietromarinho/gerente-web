import { Component, OnInit, ViewChild } from '@angular/core';
import { GenericListComponent } from 'app/views/generic/generic-list/generic-list.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Ambulancia } from 'app/model/ambulancia.model';
import { AmbulanciaService } from 'app/service/ambulancia/ambulancia.service';
import { AmbulanciaFormComponent } from '../ambulancia-form/ambulancia-form.component';
@Component({
  selector: 'app-ambulancia-list',
  templateUrl: './ambulancia-list.component.html',
  styleUrls: ['./ambulancia-list.component.scss']
})
export class AmbulanciaListComponent extends GenericListComponent<Ambulancia, AmbulanciaService> implements OnInit {

  @ViewChild('ambulanciaModal') ambulanciaModal: AmbulanciaFormComponent;


  constructor(
    service: AmbulanciaService,
    router: Router,
    activedRouter: ActivatedRoute,
    location: Location
  ) {
    super(service, router, activedRouter, location);
  }

  showFormModal(ambulancia?: Ambulancia): void {
    this.ambulanciaModal.initModal(ambulancia);
  }

}
