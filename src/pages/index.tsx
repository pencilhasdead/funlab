import { useState } from 'react';
import styles from './index.less';
import icon from '../assets/image/icon_main.png'

export default function IndexPage() {

  interface IIndex {
    count: number;
  }

  const [index, setState] = useState<IIndex>({
    count: 1,
  })

  return (
    <div>
      <div className={styles.index_header}>
        <img src={icon} alt='icon' />
        <div className={styles.index_title}>
          <span className={styles.title}>
            FunLab
          </span>
          <span className={styles.des}>搞些没用但快乐的事~</span>
        </div>
      </div>
      <div className={styles.index_wrapper}>
        123
      </div>
    </div>

  );
}
