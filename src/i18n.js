import i18n from "i18next";
import { initReactI18next } from "react-i18next";
//import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';


import resources from './i18n-resources';
/*
import en from './locales/en/translation.json';
import it from './locales/it/translation.json';

// the translations
const resources = {
  en: { translation: en },
  it: { translation: it },
};
*/

const languageDetectionOptions = {
  // order and from where user language should be detected
  //order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
  order: [ 'navigator' ],
  
  // only detect languages that are in the whitelist
  checkWhitelist: true,
};

//alert('language: ' + window.navigator.language);

i18n
  //.use(Backend) // use backend for realtime translations (to be studied... see locize.com, a payed service...)
  .use(LanguageDetector) // detect language
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    //lng: "en",
    fallbackLng: 'it',

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    },

    detection: languageDetectionOptions,
  });

  export default i18n;