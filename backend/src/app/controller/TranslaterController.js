const languageTranslator = require('../middleware/translator');
const LANGUAGES = [];

class TranslatorController {

    async collectLanguages(req, res) {

        const languages = await languageTranslator.listLanguages();

        if (!languages) {
            return res.status(404).json({ message: 'Collect languages failed.' });
        }

        const allLanguagess = languages.result.languages;

        allLanguagess.map(eachLanguage => {
            LANGUAGES.push({
                language: eachLanguage.language,
                language_name: eachLanguage.language_name
            });
        });

        return res.status(200).json(LANGUAGES);
    }

    async translate(req, res) {
        const { languageOf, languageTo, TextToTranslate } = req.body;

        const translateParams = {
            text: TextToTranslate,
            modelId: `${languageOf}-${languageTo}`,
        };

        const translation = await languageTranslator.translate(translateParams);

        return res.status(200).json(translation.result.translations)
    }
}

module.exports = new TranslatorController();