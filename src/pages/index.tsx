import { useState } from 'react';
import styles from './index.less';

export default function IndexPage() {

  interface IIndex {
    count: number;
  }

  const [index, setState] = useState<IIndex>({
    count: 1,
  })

  return (
    <div>
      {index.count}
    </div>
  );
}
