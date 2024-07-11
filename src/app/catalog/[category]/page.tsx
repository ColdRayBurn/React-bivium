import { FC } from 'react';
import { redirect, RedirectType } from 'next/navigation';

import CatalogPage from './CatalogPage';

import api from '@/api';
import { ICatalogResponse } from '@/api/models';
import { categoryMap } from '@/utils/getCatalogCategoryNameById';

interface Props {
  params: { category: string }
}

const Page: FC<Props> = async ({ params: { category } }) => {
  if (category in categoryMap) {
    const response = await api.get('catalog/', {
      searchParams: new URLSearchParams({
        limit: '8',
        offset: '0',
        category: categoryMap[category].toString()
      })
    }).json<ICatalogResponse>();

    return <CatalogPage data={response} categoryId={categoryMap[category]} />;
  }

  redirect('/', RedirectType.replace);
};

export default Page;
