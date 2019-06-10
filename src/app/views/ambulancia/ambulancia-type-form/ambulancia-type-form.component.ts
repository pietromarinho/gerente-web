import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { GenericFormComponent } from 'app/views/generic/generic-form/generic-form.component';
import { AmbulanciaType } from 'app/model/ambulancia_type.model';
import { AmbulanciaTypeService } from 'app/service/ambulancia_type/ambulancia_type.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Funcao } from 'app/model/funcao.model';
import { FuncaoService } from 'app/service/funcao/funcao.service';
import { ToastService } from 'app/service/toast-notification-service/toast-service/toast.service';
import { MessageType } from 'app/service/toast-notification-service/message-type.enum';

declare var $: any;

@Component({
  selector: 'app-ambulancia-type-form',
  templateUrl: './ambulancia-type-form.component.html',
  styleUrls: ['./ambulancia-type-form.component.scss']
})
export class AmbulanciaTypeFormComponent extends GenericFormComponent<AmbulanciaType, AmbulanciaTypeService> implements AfterViewInit {
  @ViewChild('ambulanciaTypeForm') ambulanciaTypeForm: NgForm;

  ambulancias: AmbulanciaType[] = [];
  funcoes: Funcao[] = [];
  slcFuncoes: string[] = [];
  selectedFuncao: string;
  selectFuncao: Funcao = null;
  funcoesSelecionadas: Funcao[] = [];

  constructor(
    private funcaoService: FuncaoService,
    service: AmbulanciaTypeService,
    router: Router,
    activatedRoute: ActivatedRoute,
    location: Location
  ) {
    super(router, activatedRoute, service, location, AmbulanciaType);
  }

  ngAfterViewInit(): void {
    $('#ambulanciaTypeModal').on('hide.bs.modal', () => {
      this.clearForm(this.ambulanciaTypeForm);
    });
  }

  getAmbulancias(): void {
    this.service.getAll().subscribe(
      success => {
        this.ambulancias = success;
        this.getFuncoes();
      }
    );
  }

  public initModal(ambulanciaType?: AmbulanciaType): void {
    this.funcoesSelecionadas = [];
    if (ambulanciaType) {
      Object.assign(this.obj, ambulanciaType);
      this.funcoesSelecionadas = this.obj.funcoes;
      this.edit = true;
    } else {
      this.obj = new AmbulanciaType();
      this.edit = false;
    }
    this.getAmbulancias();
    $('#ambulanciaTypeModal').modal('show');
  }

  closeModal(): void {
    $('#ambulanciaTypeModal').modal('hide');
  }

  getFuncoes() {
    this.funcoes = [];
    this.funcaoService.getAll().subscribe(
      success => {
        this.funcoes = success;
        this.changeToStrings();
      }
    );
  }

  changeToStrings(): void {
    this.slcFuncoes = [];
    this.funcoes.forEach(
      funcao => {
        this.slcFuncoes.push(funcao.name);
      }
    );
  }

  setFuncao(): void {
    const found = this.funcoes.find((funcao) => funcao.name === this.selectedFuncao);
    if (found) {
      this.selectFuncao = found;
    } else {
      this.selectFuncao = null;
    }
  }

  addPlant() {
    if (this.selectFuncao) {
      const found = this.funcoesSelecionadas.find((funcao) => funcao.id === this.selectFuncao.id);
      if (found) {
        this.selectedFuncao = '';
        ToastService.show('Função já adicionada a Ambulância', MessageType.WARNING);
      } else {
        this.selectedFuncao = '';
        this.funcoesSelecionadas.push(this.selectFuncao);
      }
    }
    this.selectedFuncao = '';
  }

  getHolderFuncao(): string {
    if (this.funcoes.length < 1) {
      return 'Não há funções cadastradas';
    } else {
      return 'Pesquise por funções';
    }
  }

  removeFuncao(index: number): void {
    if (this.funcoesSelecionadas[index].id) {
      this.funcoesSelecionadas.splice(index, 1);
    }
  }

  beforeSave() {
    this.obj.funcoes = this.funcoesSelecionadas;
  }

  checkForm(): boolean {
    return this.alreadyHasName(this.ambulancias) ? true : false;
  }

}
