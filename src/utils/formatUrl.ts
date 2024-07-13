export const formatUrl = (url: string) => {
  if (/^https?:\/\//.test(url)) {
    return url;
  }

  const baseUrl = !!process && process.env.NODE_ENV === 'development' ? process.env.NEXT_PUBLIC_URL!.replace(/\/+$/, '') : '';
  return `${baseUrl}/${encodeURI(url).replace(/^\/+/, '')}`;
};
