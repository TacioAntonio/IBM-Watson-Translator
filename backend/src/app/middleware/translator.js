const { APP_VERSION, APP_API_KEY, APP_SERVICE_URL } = require('../../config/configurations');
const LanguageTranslatorV3 = require('ibm-watson/language-translator/v3');
const { IamAuthenticator } = require('ibm-watson/auth');

const languageTranslator = new LanguageTranslatorV3({
    version: APP_VERSION,
    authenticator: new IamAuthenticator({
        apikey: APP_API_KEY,
    }),
    serviceUrl: APP_SERVICE_URL,
    disableSslVerification: true
});

module.exports = languageTranslator;