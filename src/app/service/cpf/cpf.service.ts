import { Injectable } from '@angular/core';
import * as CPF from 'gerador-validador-cpf';

@Injectable()
export class CpfService {

  constructor() { }

  valida(cpf: string) {
    return CPF.validate(cpf);
  }

  formata(cpf: string) {
    return CPF.format(cpf);
  }

}
