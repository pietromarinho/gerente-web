import { AmbulanciaType } from './ambulancia_type.model';
import { BaseModel } from './base.model';

export class Ambulancia extends BaseModel {
    ambulanciaType: AmbulanciaType;

    constructor() {
        super();
        this.ambulanciaType = new AmbulanciaType();
    }
}
