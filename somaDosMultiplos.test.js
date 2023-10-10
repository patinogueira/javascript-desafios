const {somaMultiplos} = require('./somaDosMultiplos')

describe('função que retorne a soma de todos os múltiplos de 5 ou 7 abaixo de 1000', () => {
    it('deve retornar a soma de todos os múltiplos de 5 ou 7 abaixo de 1000', () => {
        expect(somaMultiplos()).toBe(156361)
    });
});