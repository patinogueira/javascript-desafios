const {MDC, textoNegativo, numerosInvalidos} = require('./maximoDivisorComumMDC')

describe('função que retorne o MDC (máximo divisor comum) entre dois números', () => {
    it('deve retornar o MDC (máximo divisor comum) entre dois números válidos', () => {
        expect(MDC(2,4)).toBe(2);
    });
    it('deve retornar uo MDC quando os dois números válidos são iguais', () => {
        expect(MDC(25,25)).toBe(25);
    });
    it('deve retornar uma mensagem quando os dois números não possuem divisores comuns', () => {
        expect(MDC(73, 5)).toBe(textoNegativo);
    });
    it('deve retornar uma mensagem de erro quando não são inseridos dois números válidos', () => {
        expect(MDC('banana', 5)).toBe(numerosInvalidos);
    });
});