import { Ambulancia } from './ambulancia.model';
import { BaseModel } from './base.model';
import { Funcionario } from './funcionario.model';

export class Equipe extends BaseModel {
    ambulancia: Ambulancia;
    funcionarios: Funcionario[];

    constructor() {
        super();
        this.funcionarios = [];
        this.ambulancia = new Ambulancia();
    }
}
