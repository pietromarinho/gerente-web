import { Location } from '@angular/common';
import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GenericFormComponent } from 'app/views/generic/generic-form/generic-form.component';
import { Ambulancia } from 'app/model/ambulancia.model';
import { AmbulanciaService } from 'app/service/ambulancia/ambulancia.service';
import { AmbulanciaType } from 'app/model/ambulancia_type.model';
import { AmbulanciaTypeService } from 'app/service/ambulancia_type/ambulancia_type.service';

declare var $: any;

@Component({
  selector: 'app-ambulancia-form',
  templateUrl: './ambulancia-form.component.html',
  styleUrls: ['./ambulancia-form.component.scss']
})
export class AmbulanciaFormComponent extends GenericFormComponent<Ambulancia, AmbulanciaService> {
  @ViewChild('ambulanciaForm') ambulanciaForm: NgForm;

  ambulancias: AmbulanciaType[] = [];

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
      this.edit = true;
    } else {
      this.obj = new Ambulancia();
      this.edit = false;
    }
    this.getFuncoes();
    $('#ambulanciaModal').modal('show');
  }

  closeModal(): void {
    $('#ambulanciaModal').modal('hide');
  }

  getFuncoes() {
    this.ambulancias = [];
    this.ambulanciaTypeService.getAll().subscribe(
      success => {
        this.ambulancias = success;
      }
    );
  }

  getHolderAmbulanciaType(): string {
    return this.ambulancias.length > 0 ? 'Selecione a Categoria' : 'Sem Categorias Cadastradas';
  }

}
