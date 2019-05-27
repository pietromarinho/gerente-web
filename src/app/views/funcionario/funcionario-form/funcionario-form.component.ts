import { Location } from '@angular/common';
import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from 'app/model/funcionario.model';
import { FuncionarioService } from 'app/service/funcionario/funcionario.service';
import { GenericFormComponent } from 'app/views/generic/generic-form/generic-form.component';
import { Funcao } from 'app/model/funcao.model';
import { FuncaoService } from 'app/service/funcao/funcao.service';

declare var $: any;

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.scss']
})
export class FuncionarioFormComponent extends GenericFormComponent<Funcionario, FuncionarioService> {
  @ViewChild('funcionarioForm') funcionarioForm: NgForm;

  id_funcao: string;
  funcoes: Funcao[] = [];

  constructor(
    private funcaoService: FuncaoService,
    service: FuncionarioService,
    router: Router,
    activatedRoute: ActivatedRoute,
    location: Location,
    cd: ChangeDetectorRef
  ) {
    super(router, activatedRoute, service, location, Funcionario);
  }

  beforeSave() {
    this.getFuncao();
  }

  public initModal(funcionario?: Funcionario): void {
    this.id_funcao = '';
    if (funcionario) {
      Object.assign(this.obj, funcionario);
      this.id_funcao = this.obj.funcao.id;
      this.edit = true;
    } else {
      this.obj = new Funcionario();
      this.edit = false;
    }
    this.getFuncoes();
    $('#funcionarioModal').modal('show');
  }

  closeModal(): void {
    $('#funcionarioModal').modal('hide');
  }

  getFuncoes() {
    this.funcoes = [];
    this.funcaoService.getAll().subscribe(
      success => {
        this.funcoes = success;
      }
    );
  }

  getFuncao() {
    this.funcaoService.getOne(this.id_funcao).subscribe(
      success => {
        this.obj.funcao = success;
      }
    )
  }

  getHolderFuncao(): string {
    return this.funcoes.length > 0 ? 'Selecione a Função' : 'Sem Funções Cadastradas';
  }

}
