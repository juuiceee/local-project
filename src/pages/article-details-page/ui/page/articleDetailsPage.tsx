/* eslint-disable i18next/no-literal-string */
import { classNames } from 'shared/lib/class-names/classNames';
import { memo } from 'react';
import styles from './articleDetailsPage.module.scss';

type TArticleDetailsPageProps = {
  className?: string;
};

const ArticleDetailsPage = ({ className }: TArticleDetailsPageProps) => (
  <div className={classNames(styles.articleDetailsPage, [className])}>
    <p>ARTICLE DETAILS PAGE</p>
  </div>
);

export default memo(ArticleDetailsPage);
