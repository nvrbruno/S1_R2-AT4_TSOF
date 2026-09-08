import { describe, expect, it } from 'vitest'

import {
    somar,
    subtrair,
    multiplicar,
    dividir,
    elevar,
    fatorial,
    ehPar,
    media,
    ehPrimo,
    limitar,
    fibonacci
} from '../src/math.js'

describe('Biblioteca matemática.', () => {
    it('deve somar dois números.', () => {
        expect(somar(2, 3)).toBe(5);
        expect(somar(2, 0)).toBe(2);
        expect(somar(-2, 5)).toBe(3);
    });
})

it('deve lançar erro ao somar valores não númericos', () => {
    expect(() => somar(2, '3')).toThrow('Os valores devem ser números.')
})


describe('Biblioteca matemática.', () => {
    it('deve subtrair dois números.', () => {
        expect(subtrair(3, 3)).toBe(0);
        expect(subtrair(2, 0)).toBe(2);
        expect(subtrair(5, 1)).toBe(4);
    });
})

it('deve lançar erro ao subtrair valores não númericos', () => {
    expect(() => subtrair(2, '3')).toThrow('Os valores devem ser números.')
})


describe('Biblioteca matemática.', () => {
    it('deve multiplicar dois números.', () => {
        expect(multiplicar(3, 3)).toBe(9);
        expect(multiplicar(2, 0)).toBe(0);
        expect(multiplicar(5, 1)).toBe(5);
    });
})

it('deve lançar erro ao multiplicar valores não númericos', () => {
    expect(() => multiplicar(2, '3')).toThrow('Os valores devem ser números.')
})


describe('Biblioteca matemática.', () => {
    it('deve dividir dois números.', () => {
        expect(dividir(3, 3)).toBe(1);
        expect(dividir(2, 1)).toBe(2);
        expect(dividir(5, 1)).toBe(5);
    });
})

it('deve lançar erro ao dividir por zero', () => {
    expect(() => dividir(2, 0)).toThrow('Divisão por zero não é permitida.')
})


describe('Biblioteca matemática.', () => {
    it('deve elevar números.', () => {
        expect(elevar(3, 2)).toBe(9);
        expect(elevar(2, 1)).toBe(2);
        expect(elevar(5, 4)).toBe(625);
    });
})

it('deve lançar erro ao elevar valores não númericos', () => {
    expect(() => elevar(2, '3')).toThrow('Os valores devem ser números.')
})


describe('Biblioteca matemática.', () => {
    it('deve calcular o fatorial de um número.', () => {
        expect(fatorial(3)).toBe(6);
        expect(fatorial(2)).toBe(2);
        expect(fatorial(5)).toBe(120);
    });
})

it('deve retornar 1 para o fatorial de zero', () => {
    expect(fatorial(0)).toBe(1);
})

it('deve lançar erro ao calcular fatorial de número negativo', () => {
    expect(() => fatorial(-1)).toThrow('Fatorial de número negativo não é permitido.')
})


describe('Biblioteca matemática.', () => {
    it('deve verificar se um número é par.', () => {
        expect(ehPar(2)).toBe(true);
        expect(ehPar(4)).toBe(true);
        expect(ehPar(5)).toBe(false);
    });
})

it('deve lançar erro ao verificar valores não númericos como pares', () => {
    expect(() => ehPar('2')).toThrow('O valor deve ser um número.')
})


describe('Biblioteca matemática.', () => {
    it('deve calcular a média de uma lista de números.', () => {
        expect(media([2, 4, 6])).toBe(4);
        expect(media([10, 20])).toBe(15);
        expect(media([5])).toBe(5);
    });
})

it('deve lançar erro ao calcular média de uma lista inválida', () => {
    expect(() => media([])).toThrow(
        'É necessário informar uma lista de números válida.'
    );
})


describe('Biblioteca matemática.', () => {
    it('deve verificar se um número é primo.', () => {
        expect(ehPrimo(2)).toBe(true);
        expect(ehPrimo(3)).toBe(true);
        expect(ehPrimo(5)).toBe(true);
    });
})

describe('Biblioteca matemática.', () => {
    it('deve limitar um valor entre mínimo e máximo.', () => {
        expect(limitar(5, 1, 10)).toBe(5);
        expect(limitar(0, 1, 10)).toBe(1);
        expect(limitar(15, 1, 10)).toBe(10);
    });
})

it('deve lançar erro quando o mínimo for maior que o máximo', () => {
    expect(() => limitar(5, 10, 1)).toThrow(
        'O valor mínimo não pode ser maior que o máximo.'
    );
})


describe('Biblioteca matemática.', () => {
    it('deve calcular a sequência de Fibonacci.', () => {
        expect(fibonacci(0)).toBe(0);
        expect(fibonacci(1)).toBe(1);
        expect(fibonacci(2)).toBe(1);
    });
})

it('deve lançar erro ao informar posição não inteira no Fibonacci', () => {
    expect(() => fibonacci(2.5)).toThrow(
        'A posição deve ser um número inteiro não negativo.'
    );
})
