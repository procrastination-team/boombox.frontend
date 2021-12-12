import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { Triangle } from '../../Icons/Triangle';
import styles from './SkeletonCard.module.css';
import 'react-loading-skeleton/dist/skeleton.css';
import cn from 'classnames';


interface SkeletonCardProps { }

export const SkeletonCard: React.FC<SkeletonCardProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.skeletonImageWrapper}>
        <Skeleton className={cn(styles.skeletonElement)} width={'100%'} height={'100%'} />
      </div>
      <Skeleton className={styles.skeletonElement} width={'100%'} height={30} />
      <Skeleton className={styles.skeletonElement} width={'100%'} height={10} count={2} />
    </div>
  );
};
