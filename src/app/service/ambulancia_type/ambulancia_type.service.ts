import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Constant } from 'app/constant/constant';
import { CrudService } from '../generic-crud/generic-crud.service';
import { ErrorService } from '../toast-notification-service/error-service/error.service';
import { AmbulanciaType } from 'app/model/ambulancia_type.model';
@Injectable()
export class AmbulanciaTypeService extends CrudService<AmbulanciaType> {

  constructor(http: Http,
    public activatedRoute: ActivatedRoute,
    errorHandler?: ErrorService) {
    super(http, Constant.AMBULANCIA, errorHandler, activatedRoute);
  }

}
