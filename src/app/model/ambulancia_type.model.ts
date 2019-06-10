import { BaseModel } from './base.model';
import { Funcao } from './funcao.model';

export class AmbulanciaType extends BaseModel {
    funcoes: Funcao[];

    constructor() {
        super();
        this.funcoes = [];

    }
}
