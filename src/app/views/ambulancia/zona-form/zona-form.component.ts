import { Location } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GenericFormComponent } from 'app/views/generic/generic-form/generic-form.component';
import { Zona } from 'app/model/zona.model';
import { ZonaService } from 'app/service/zona/zona.service';

declare var $: any;

@Component({
  selector: 'app-zona-form',
  templateUrl: './zona-form.component.html',
  styleUrls: ['./zona-form.component.scss']
})
export class ZonaFormComponent extends GenericFormComponent<Zona, ZonaService> implements AfterViewInit {
  @ViewChild('zonaForm') zonaForm: NgForm;
  zonas: Zona[] = [];

  constructor(
    service: ZonaService,
    router: Router,
    activatedRoute: ActivatedRoute,
    location: Location
  ) {
    super(router, activatedRoute, service, location, Zona);
  }

  ngAfterViewInit(): void {
    $('#zonaModal').on('hide.bs.modal', () => {
      this.clearForm(this.zonaForm);
    });
  }

  getAmbulancias(): void {
    this.service.getAll().subscribe(
      success => {
        this.zonas = success;
      }
    );
  }

  public initModal(zona?: Zona): void {
    this.clearForm(this.zonaForm);
    if (zona) {
      Object.assign(this.obj, zona);
      this.edit = true;
    } else {
      this.obj = new Zona();
      this.edit = false;
    }
    this.getAmbulancias();
    $('#zonaModal').modal('show');
  }

  closeModal(): void {
    $('#zonaModal').modal('hide');
  }

  checkForm(): boolean {
    return this.alreadyHasName(this.zonas) ? true : false;
  }

}
