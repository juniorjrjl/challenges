const { insertWords } = require('./challenge_17')

describe('insert words in sentence', 
    () => it.each([
        ['capaz utilizar as cápsulas emergência', 'de ', [6, 27], 'capaz de utilizar as cápsulas de emergência'], 
        ['Nós decidimos apesar das chances serem baixas que enviaríamos um sinal para [...]', ',', [13, 45], 'Nós decidimos, apesar das chances serem baixas, que enviaríamos um sinal para [...]'], 
        ['Hello', 'world', [6], 'Hello'],
        ['Isso é um teste', 'não', [], 'Isso é um teste'], 
        ['teste sem informar palavra', '', [2, 3], 'teste sem informar palavra']
    ])
        ('when sentence is %s, words is %s and position is %s expected the output is %s', 
        (sentence, word, positions, expected) => expect(insertWords(sentence, word, positions)).toBe(expected)))