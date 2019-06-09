import { Location } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GenericListComponent } from 'app/views/generic/generic-list/generic-list.component';
import { Zona } from 'app/model/zona.model';
import { ZonaService } from 'app/service/zona/zona.service';
import { ZonaFormComponent } from '../zona-form/zona-form.component';
@Component({
  selector: 'app-zona-list',
  templateUrl: './zona-list.component.html',
  styleUrls: ['./zona-list.component.scss']
})
export class ZonaListComponent extends GenericListComponent<Zona, ZonaService> {

  @ViewChild('zonaModal') zonaModal: ZonaFormComponent;

  constructor(
    service: ZonaService,
    router: Router,
    activedRouter: ActivatedRoute,
    location: Location
  ) {
    super(service, router, activedRouter, location);
  }

  showCreateUpdateModal(zona?: Zona): void {
    this.zonaModal.initModal(zona);
  }

}
