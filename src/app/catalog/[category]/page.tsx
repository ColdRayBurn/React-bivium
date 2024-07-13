import { FC } from 'react';
import { redirect, RedirectType } from 'next/navigation';

import CatalogPage from './CatalogPage';

import api from '@/api';
import { ICatalogResponse } from '@/api/models';
import { categoryMap, CategoryCode } from '@/utils/catalogCategoriesMap';

interface Props {
  params: { category: string }
}

const Page: FC<Props> = async ({ params: { category } }) => {
  if (category in categoryMap) {
    const response = await api.get('catalog/', {
      searchParams: new URLSearchParams({
        limit: '8',
        offset: '0',
        category: categoryMap[category as CategoryCode].toString()
      })
    }).json<ICatalogResponse>();

    return <CatalogPage data={response} categoryId={categoryMap[category as CategoryCode]} />;
  }

  redirect('/', RedirectType.replace);
};

export default Page;
