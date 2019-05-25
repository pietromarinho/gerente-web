import { Component, OnInit, ViewChild } from '@angular/core';
import { GenericListComponent } from 'app/views/generic/generic-list/generic-list.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Funcionario } from 'app/model/funcionario.model';
import { FuncionarioService } from 'app/service/funcionario/funcionario.service';
import { FuncionarioFormComponent } from '../funcionario-form/funcionario-form.component';

@Component({
  selector: 'app-funcionario-list',
  templateUrl: './funcionario-list.component.html',
  styleUrls: ['./funcionario-list.component.scss']
})
export class FuncionarioListComponent extends GenericListComponent<Funcionario, FuncionarioService> implements OnInit {

  @ViewChild('funcionarioModal') funcionarioModal: FuncionarioFormComponent;


  constructor(
    service: FuncionarioService,
    router: Router,
    activedRouter: ActivatedRoute,
    location: Location
  ) {
    super(service, router, activedRouter, location);
  }

  showFormModal(funcionario?: Funcionario): void {
    this.funcionarioModal.initModal(funcionario);
  }

}
