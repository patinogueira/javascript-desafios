const {indiceMaiorMenor} = require('./indiceMaiorIndiceMenorValor')

describe('função que retorne o índice do maior valor e o índice do menor valor de um array numérico qualquer sem valores repetidos', () => {
    it('deve retornar o índice do maior valor e o índice do menor valor de um array numérico', () => {
        expect(indiceMaiorMenor(1,2,3,4,5,6,7,8,9,10)).toEqual({ "indiceMaior": 9, "indiceMenor": 0 })
        expect(indiceMaiorMenor(10,5,-30,1000)).toEqual({ "indiceMaior": 3, "indiceMenor": 2 })
    });
});