'use client';

import { useEffect, useRef } from 'react';

import api from '@/api';
import { IUser } from '@/models';

import { useAppDispatch } from '@/redux/hooks';
import { setUser } from '@/redux/slices/userSlice';
import { fetchFavorites } from '@/redux/slices/favoritesSlice';
import { cartFetch } from '@/redux/slices/cartSlice';

const AuthComponent = () => {
  const dispatch = useAppDispatch();
  const abortControllerRef = useRef(new AbortController());

  useEffect(() => {
    const abortController = abortControllerRef.current;

    api
      .get('user/', {
        signal: abortController.signal
      })
      .json<IUser>()
      .then(response => {
        dispatch(cartFetch());
        dispatch(fetchFavorites());
        dispatch(setUser({ ...response, isAuthorized: true, isLoaded: true }));
      })
      .catch(e => {
        if (e !== 'aborted') {
          localStorage.removeItem('token');
        }
      });

    return () => abortController.abort('aborted');
  }, [dispatch]);

  return null;
};

export default AuthComponent;
