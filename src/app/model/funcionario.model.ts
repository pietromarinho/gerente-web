import { BaseModel } from "./base.model";
import { Funcao } from "./funcao.model";

export class Funcionario extends BaseModel {
    funcao: Funcao;

    constructor() {
        super();
        this.funcao = new Funcao();
    }
}
