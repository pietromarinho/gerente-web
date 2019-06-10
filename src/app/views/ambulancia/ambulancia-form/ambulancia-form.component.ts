import { Location } from '@angular/common';
import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Ambulancia } from 'app/model/ambulancia.model';
import { AmbulanciaType } from 'app/model/ambulancia_type.model';
import { Funcao } from 'app/model/funcao.model';
import { AmbulanciaService } from 'app/service/ambulancia/ambulancia.service';
import { AmbulanciaTypeService } from 'app/service/ambulancia_type/ambulancia_type.service';
import { GenericFormComponent } from 'app/views/generic/generic-form/generic-form.component';

declare var $: any;

@Component({
  selector: 'app-ambulancia-form',
  templateUrl: './ambulancia-form.component.html',
  styleUrls: ['./ambulancia-form.component.scss']
})
export class AmbulanciaFormComponent extends GenericFormComponent<Ambulancia, AmbulanciaService> {
  @ViewChild('ambulanciaForm') ambulanciaForm: NgForm;

  categorias: AmbulanciaType[] = [];
  funcoes: Funcao[] = [];

  constructor(
    private ambulanciaTypeService: AmbulanciaTypeService,
    service: AmbulanciaService,
    router: Router,
    activatedRoute: ActivatedRoute,
    location: Location,
    cd: ChangeDetectorRef
  ) {
    super(router, activatedRoute, service, location, Ambulancia);
  }

  public initModal(ambulancia?: Ambulancia): void {
    if (ambulancia) {
      Object.assign(this.obj, ambulancia);
      this.funcoes = this.obj.ambulanciaType.funcoes;
      this.edit = true;
    } else {
      this.obj = new Ambulancia();
      this.edit = false;
    }
    this.getCategorias();
    $('#ambulanciaModal').modal('show');
  }

  closeModal(): void {
    $('#ambulanciaModal').modal('hide');
  }

  getCategorias() {
    this.categorias = [];
    this.ambulanciaTypeService.getAll().subscribe(
      success => {
        this.categorias = success;
      }
    );
  }

  getFuncoesCategoria(id) {
    this.funcoes = [];
    if (id) {
      this.ambulanciaTypeService.getOne(id).subscribe(
        success => {
          this.funcoes = success.funcoes;
          console.log(this.funcoes);
        }
      );
    }
  }

  getHolderAmbulanciaType(): string {
    return this.categorias.length > 0 ? 'Selecione a Categoria' : 'Sem Categorias Cadastradas';
  }

}
