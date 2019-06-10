import { CommonModule, Location } from '@angular/common';
import { Component, NgModule, ViewChild } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterialModule } from 'app/app.module';
import { MdModule } from 'app/md/md.module';
import { Ambulancia } from 'app/model/ambulancia.model';
import { Equipe } from 'app/model/equipe.model';
import { Funcao } from 'app/model/funcao.model';
import { Funcionario } from 'app/model/funcionario.model';
import { AmbulanciaService } from 'app/service/ambulancia/ambulancia.service';
import { EquipeService } from 'app/service/equipe/equipe.service';
import { GenericFormComponent } from 'app/views/generic/generic-form/generic-form.component';
import { FuncionarioService } from 'app/service/funcionario/funcionario.service';
import { ToastService } from 'app/service/toast-notification-service/toast-service/toast.service';
import { MessageType } from 'app/service/toast-notification-service/message-type.enum';
import { EasyAutocompleteModule } from '../autocomplete/autocomplete.component';

declare var $: any;

@Component({
  selector: 'app-equipe-form',
  templateUrl: './equipe-form.component.html',
  styleUrls: ['./equipe-form.component.scss']
})
export class EquipeFormComponent extends GenericFormComponent<Equipe, EquipeService> {
  @ViewChild('equipeForm') equipeForm: NgForm;

  ambulancias: Ambulancia[] = [];

  name: string;
  funcoesImportantes: Funcao[] = [];

  funcionarios: Funcionario[] = [];
  slcFuncionarios: string[] = [];
  selectedFuncionario: string;
  selectFuncionario: Funcionario = null;
  funcionariosSelecionados: Funcionario[] = [];

  constructor(
    private funcionarioService: FuncionarioService,
    private ambulanciaService: AmbulanciaService,
    service: EquipeService,
    router: Router,
    activatedRoute: ActivatedRoute,
    location: Location
  ) {
    super(router, activatedRoute, service, location, Equipe);
  }

  public initModal(equipe?: Equipe): void {
    this.funcionariosSelecionados = [];
    this.clearForm(this.equipeForm);
    if (equipe) {
      Object.assign(this.obj, equipe);
      this.funcionariosSelecionados = this.obj.funcionarios;
      this.edit = true;
    } else {
      this.obj = new Equipe();
      this.edit = false;
    }
    this.getCategories();
    $('#equipeModal').modal('show');
  }

  closeModal(): void {
    $('#equipeModal').modal('hide');
  }

  getCategories(): void {
    this.ambulanciaService.getAll().subscribe(
      success => {
        this.ambulancias = success;
        this.getFuncionarios();
      }
    );
  }

  getHolderAmbulancia(): string {
    if (this.ambulancias.length < 1) {
      return 'Não há ambulâncias cadastradas';
    } else {
      return 'Ambulâncias';
    }
  }

  getName(id) {
    if (id) {
      this.ambulanciaService.getOne(id).subscribe(
        success => {
          this.name = success.name;
          this.getFuncoesImportantes(id);
        }
      );
    }
  }

  getFuncoesImportantes(id) {
    if (id) {
      this.ambulanciaService.getOne(id).subscribe(
        success => {
          this.funcoesImportantes = success.ambulanciaType.funcoes;
        }
      );
    }
  }

  getFuncionarios() {
    this.funcionarioService.getAll().subscribe(
      success => {
        this.funcionarios = success;
        this.changeToStrings();
      }
    );
  }

  changeToStrings(): void {
    this.slcFuncionarios = [];
    this.funcionarios.forEach(
      funcionario => {
        this.slcFuncionarios.push(funcionario.name);
      }
    );
  }

  setFuncionario(): void {
    const found = this.funcionarios.find((funcionario) => funcionario.name === this.selectedFuncionario);
    if (found) {
      this.selectFuncionario = found;
    } else {
      this.selectFuncionario = null;
    }
  }

  addPFuncionario() {
    if (this.selectFuncionario) {
      const found = this.funcionariosSelecionados.find((funcionario) => funcionario.id === this.selectFuncionario.id);
      if (found) {
        this.selectedFuncionario = '';
        ToastService.show('Funcionario já adicionada a Equipe', MessageType.WARNING);
      } else {
        this.selectedFuncionario = '';
        this.funcionariosSelecionados.push(this.selectFuncionario);
      }
    }
    this.selectedFuncionario = '';
  }

  getHolderFuncionarios(): string {
    if (this.funcionarios.length < 1) {
      return 'Não há funcionarios cadastradas';
    } else {
      return 'Pesquise por funcionarios';
    }
  }

  removeFuncionario(index: number): void {
    if (this.funcionariosSelecionados[index].id) {
      this.funcionariosSelecionados.splice(index, 1);
    }
  }

  beforeSave() {
    if (!this.obj.name) {
      this.obj.name = this.name;
    }
    this.obj.funcionarios = this.funcionariosSelecionados;
  }

}

@NgModule({
  declarations: [EquipeFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MdModule,
    MaterialModule,
    EasyAutocompleteModule,
  ],
  exports: [EquipeFormComponent]
})
export class EquipeModule { }
