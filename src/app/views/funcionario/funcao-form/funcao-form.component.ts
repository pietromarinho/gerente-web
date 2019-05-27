import { Location } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcao } from 'app/model/funcao.model';
import { FuncaoService } from 'app/service/funcao/funcao.service';
import { GenericFormComponent } from 'app/views/generic/generic-form/generic-form.component';

declare var $: any;

@Component({
  selector: 'app-funcao-form',
  templateUrl: './funcao-form.component.html',
  styleUrls: ['./funcao-form.component.scss']
})
export class FuncaoFormComponent extends GenericFormComponent<Funcao, FuncaoService> implements AfterViewInit {
  @ViewChild('funcaoForm') funcaoForm: NgForm;
  funcoes: Funcao[] = [];

  constructor(
    service: FuncaoService,
    router: Router,
    activatedRoute: ActivatedRoute,
    location: Location
  ) {
    super(router, activatedRoute, service, location, Funcao);
  }

  ngAfterViewInit(): void {
    $('#funcaoModal').on('hide.bs.modal', () => {
      this.clearForm(this.funcaoForm);
    });
  }

  getFuncoes(): void {
    this.service.getAll().subscribe(
      success => {
        this.funcoes = success;
      }
    );
  }

  public initModal(funcao?: Funcao): void {
    if (funcao) {
      Object.assign(this.obj, funcao);
      this.edit = true;
    } else {
      this.obj = new Funcao();
      this.edit = false;
    }
    this.getFuncoes();
    $('#funcaoModal').modal('show');
  }

  closeModal(): void {
    $('#funcaoModal').modal('hide');
  }

  checkForm(): boolean {
    return this.alreadyHasName(this.funcoes) ? true : false;
  }

}
