import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const FooterNav = ({
  className,
  ...props
}) => {

  const { t } = useTranslation();

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <Link to="#0">{t('Contact')}</Link>
        </li>
        <li>
          <Link to="#0">{t('About us')}</Link>
        </li>
        <li>
          <Link to="#0">{t('FAQ\'s')}</Link>
        </li>
        <li>
          <Link to="#0">{t('Support')}</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;