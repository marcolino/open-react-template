'use strict';

const write = require('write');
const i18nParserConfig = require('../../config/i18next-parser.config.js');

module.exports = class I18nextPreWebpackPlugin {
  constructor(options) {
    if (!options) {
      throw new Error(`Please provide 'options' for the I18nextPreWebpackPlugin config`);
    }

    const missingOptions = [];

    if (options.path == null) missingOptions.push('path');

    if (missingOptions.length)
      throw new Error(
        `Please provide the following option${
          missingOptions.length > 1 ? 's' : ''
        } in the I18nextPreWebpackPlugin config: ${missingOptions.join(', ')}`
      )
    ;

    this.options = options;
  }

  _createFile({ path }, compilation) {
    let content = '';
    //console.log('locales:', i18nParserConfig.locales, typeof i18nParserConfig.locales, i18nParserConfig.locales[0]);
    for (var i in i18nParserConfig.locales) {
      var locale = i18nParserConfig.locales[i]
      content += `import ${locale} from './locales/${locale}/translation.json';\n`;
    }

    content += `
// the translations
export default {
`;

    for (var i in i18nParserConfig.locales) {
      var locale = i18nParserConfig.locales[i]
      content += `  ${locale}: { translation: ${locale} },\n`;
    }

    content += `};
`;

    write.sync(path, content);
  }

  apply(compiler) {
    compiler.hooks.emit.tapPromise('I18nextPreWebpackPlugin', async compilation => {
      this._createFile(this.options, compilation);
    });
  }
};