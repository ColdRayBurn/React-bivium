import './globals.css';

import { FC, ReactNode } from 'react';
import { Montserrat, Fira_Sans_Extra_Condensed } from 'next/font/google';
import type { Metadata } from 'next';

import AuthComponent from './AuthComponent';
import Header from '@/components/layouts/Header/Header';
import Footer from '@/components/layouts/Footer/Footer';

import StoreProvider from '@/redux/StoreProvider';

interface Props {
  children: ReactNode;
}

const montserrat = Montserrat({ subsets: ['cyrillic'], fallback: ['sans-serif'] });
const firaSansExtraCondensed = Fira_Sans_Extra_Condensed({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  fallback: ['sans-serif'],
  subsets: ['cyrillic']
});

export const metadata: Metadata = {
  title: 'Одежда для циклических видов спорта Bivium',
  description:
    'Бренд одежды Bivium был создан командой профессиональных спортсменов, экспертов текстильного рынка и производителей, объединившихся с целью создания одежды нового уровня, для людей, которые не могут жить без движения и прогресса. Благодаря этому были разработаны уникальные изделия продуманные,как с точки зрения эргономики анатомичности кроя, так и с применением новейших технологий и материалов.'
};

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang='ru'>
      <body
        style={{
          '--font-montserrat': montserrat.style.fontFamily,
          '--font-fira-sans-extra-condensed': firaSansExtraCondensed.style.fontFamily
        }}
      >
        <StoreProvider>
          <AuthComponent />
          <Header />
          {children}
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
};

export default RootLayout;
