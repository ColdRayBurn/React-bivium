'use client';

import { FC, useEffect, useState } from 'react';
import classNames from 'classnames';
import styles from './page.module.css';
import Form from './Form';
import api from '@/api';
import { useParams } from 'next/navigation';
import NotFound from '@/app/not-found';

const Page: FC = () => {
  const [hashValid, setHashValid] = useState(true);

  const params = useParams();
  const hash = params.id || '';

  useEffect(() => {
    if (!hash) {
      setHashValid(false);
      return;
    }

    api
      .post(`authorization/check-hash/${hash}/`)
      .then(response => {
        if (response.status !== 200) {
          setHashValid(false);
        }
      })
      .catch(error => {
        setHashValid(false);
      });
  }, [hash]);

  if (!hashValid) {
    return <NotFound />;
  }

  return (
    <main className={classNames(styles.wrapper, 'container')}>
      <h1 className={styles.title}>Восстановление пароля</h1>
      <Form />
    </main>
  );
};

export default Page;
