'use client';

import { useEffect } from 'react';
import { useAppSelector } from '@/redux/hooks';
import { useRouter } from 'next/navigation';

const AuthRedirect = () => {
  const router = useRouter();
  const { isAuthorized } = useAppSelector(selector => selector.user);

  useEffect(() => {
    if (isAuthorized) {
      return;
    }

    router.push('/signin');
  }, [router, isAuthorized]);

  return null;
};

export default AuthRedirect;
