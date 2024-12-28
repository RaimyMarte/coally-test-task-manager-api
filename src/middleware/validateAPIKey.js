const errorResponse = require('../response/errorResponse');

require('dotenv').config()

const apiKey = process.env.API_KEY || '';

const validateAPIKey = (req, res, next) => {
    const headerAPIKey = req.headers.apikey;

    if (headerAPIKey === apiKey) {
        next();
    } else {
        const { response } = errorResponse({
            message: 'API Key inválida',
            statusCode: 403
        })
        res.json(response);
    }
};

module.exports = validateAPIKey;
