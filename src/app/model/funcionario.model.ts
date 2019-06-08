import { BaseModel } from './base.model';
import { Funcao } from './funcao.model';

export class Funcionario extends BaseModel {
    funcao: Funcao;
    matricula: string;

    constructor() {
        super();
        this.funcao = new Funcao();
    }
}
