/* eslint-disable i18next/no-literal-string */
import { classNames } from 'shared/lib/class-names/classNames';
import { memo } from 'react';
import styles from './articlesPage.module.scss';

type TArticlesPageProps = {
  className?: string;
};

const ArticlesPage = ({ className }: TArticlesPageProps) => (
  <div className={classNames(styles.articlesPage, [className])}>
    <p>Articles page</p>
  </div>
);

export default memo(ArticlesPage);
