import { Location } from '@angular/common';
import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from 'app/model/funcionario.model';
import { FuncionarioService } from 'app/service/funcionario/funcionario.service';
import { GenericFormComponent } from 'app/views/generic/generic-form/generic-form.component';

declare var $: any;

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.scss']
})
export class FuncionarioFormComponent extends GenericFormComponent<Funcionario, FuncionarioService> {
  @ViewChild('funcionarioForm') funcionarioForm: NgForm;

  constructor(
    service: FuncionarioService,
    router: Router,
    activatedRoute: ActivatedRoute,
    location: Location,
    cd: ChangeDetectorRef
  ) {
    super(router, activatedRoute, service, location, Funcionario);
  }

  public initModal(funcionario?: Funcionario): void {
    if (funcionario) {
      Object.assign(this.obj, funcionario);
      this.edit = true;
    } else {
      this.obj = new Funcionario();
      this.edit = false;
    }
    $('#funcionarioModal').modal('show');
  }

  closeModal(): void {
    $('#funcionarioModal').modal('hide');
  }

}
