const fs = require('fs');
const path = require('path');

function getWords() {
    const words = [];
    const files = fs.readdirSync(path.join(__dirname, '../data'));

    for (const file of files) {
        const wordsFile = fs.readFileSync(
            path.join(__dirname, '../data/', file),
            'utf8'
        );

        const _words = wordsFile.includes('\t\n')
            ? wordsFile.split('\t\n')
            : wordsFile.split('\n');

        words.push(..._words);
    }

    const unique = [...new Set(words)];
    return unique;
}

module.exports = getWords;
