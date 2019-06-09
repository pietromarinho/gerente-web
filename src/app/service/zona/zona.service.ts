import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Constant } from 'app/constant/constant';
import { CrudService } from '../generic-crud/generic-crud.service';
import { ErrorService } from '../toast-notification-service/error-service/error.service';
import { Zona } from 'app/model/zona.model';
@Injectable()
export class ZonaService extends CrudService<Zona> {

  constructor(http: Http,
    public activatedRoute: ActivatedRoute,
    errorHandler?: ErrorService) {
    super(http, Constant.ZONA, errorHandler, activatedRoute);
  }

}
