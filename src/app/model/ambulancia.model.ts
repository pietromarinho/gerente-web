import { BaseModel } from './base.model';
import { Funcao } from './funcao.model';
import { AmbulanciaType } from './ambulancia_type.model';

export class Ambulancia extends BaseModel {
    ambulanciaType: AmbulanciaType;

    constructor() {
        super();
        this.ambulanciaType = new AmbulanciaType();
    }
}
