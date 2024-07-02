import ky from 'ky';

const api = ky.extend({
  retry: 0,
  prefixUrl: process.env.NEXT_PUBLIC_API_URL,
  hooks: {
    beforeRequest: [
      request => {
        const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

        if (token !== null) {
          request.headers.set('Authorization', `Bearer ${token}`);
        }
      }
    ]
  }
});

export default api;
