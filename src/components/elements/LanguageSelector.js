import React from 'react';
//import PropTypes from 'prop-types';
//import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { /*t,*/ i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  }

  return (
    <div onChange={changeLanguage}>
      <input type="radio" value="en" name="language" defaultChecked /> English
      <input type="radio" value="zh" name="language"/> 繁體中文
      <input type="radio" value="it" name="language" /> Italiano
      <input type="radio" value="es" name="language" /> Español
    </div>
  )
}

export default LanguageSelector