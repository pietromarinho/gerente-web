import { Location } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcao } from 'app/model/funcao.model';
import { FuncaoService } from 'app/service/funcao/funcao.service';
import { GenericListComponent } from 'app/views/generic/generic-list/generic-list.component';
import { FuncaoFormComponent } from '../funcao-form/funcao-form.component';

@Component({
  selector: 'app-funcao-list',
  templateUrl: './funcao-list.component.html',
  styleUrls: ['./funcao-list.component.scss']
})
export class FuncaoListComponent extends GenericListComponent<Funcao, FuncaoService> {

  @ViewChild('funcaoModal') funcaoModal: FuncaoFormComponent;

  constructor(
    service: FuncaoService,
    router: Router,
    activedRouter: ActivatedRoute,
    location: Location
  ) {
    super(service, router, activedRouter, location);
  }

  showCreateUpdateModal(funcao?: Funcao): void {
    this.funcaoModal.initModal(funcao);
  }
}
