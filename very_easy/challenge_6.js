exports.invertWords = (sentence) => sentence.split(' ').map(w => w.split('').reverse().join('')).join(' ').toLowerCase()