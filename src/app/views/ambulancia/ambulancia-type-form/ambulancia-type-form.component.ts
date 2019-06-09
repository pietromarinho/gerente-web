import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { GenericFormComponent } from 'app/views/generic/generic-form/generic-form.component';
import { AmbulanciaType } from 'app/model/ambulancia_type.model';
import { AmbulanciaTypeService } from 'app/service/ambulancia_type/ambulancia_type.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

declare var $: any;

@Component({
  selector: 'app-ambulancia-type-form',
  templateUrl: './ambulancia-type-form.component.html',
  styleUrls: ['./ambulancia-type-form.component.scss']
})
export class AmbulanciaTypeFormComponent extends GenericFormComponent<AmbulanciaType, AmbulanciaTypeService> implements AfterViewInit {
  @ViewChild('ambulanciaTypeForm') ambulanciaTypeForm: NgForm;
  ambulancias: AmbulanciaType[] = [];

  constructor(
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
      }
    );
  }

  public initModal(ambulanciaType?: AmbulanciaType): void {
    if (ambulanciaType) {
      Object.assign(this.obj, ambulanciaType);
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

  checkForm(): boolean {
    return this.alreadyHasName(this.ambulancias) ? true : false;
  }

}
