const router = require('express').Router();
const getWords = require('../../util/getWords');

const words = getWords();

function handleFilteredWord(include, res) {
    const filtered = words.filter(
        (word) => word.includes(include) && word.length < 30
    );

    if (!filtered || filtered.length === 0)
        return res.status(404).json({
            error: {
                message: 'No results for this query.',
            },
        });

    return res.status(200).json(filtered);
}

router.get('/word', async (req, res) => {
    const query = req.query;

    if (!query || (query && !query.q))
        return res.status(400).json({
            error: {
                message: 'The "q" param in query must be provided.',
            },
        });

    const include = query.q;
    return handleFilteredWord(include, res);
});

router.get('/word/:include', async (req, res) => {
    const include = req.params.include;
    return handleFilteredWord(include, res);
});

module.exports = router;
