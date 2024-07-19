import type { Metadata } from 'next';
import './globals.css';

import StoreProvider from './StoreProvider';

import AuthComponent from './AuthComponent';
import Header from '@/components/layouts/Header/Header';
import Footer from '@/components/layouts/Footer/Footer';

export const metadata: Metadata = {
  title: 'Одежда для циклических видов спорта Bivium',
  description:
    'Бренд одежды Bivium был создан командой профессиональных спортсменов, экспертов текстильного рынка и производителей, объединившихся с целью создания одежды нового уровня, для людей, которые не могут жить без движения и прогресса. Благодаря этому были разработаны уникальные изделия продуманные,как с точки зрения эргономики анатомичности кроя, так и с применением новейших технологий и материалов.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='ru'>
      <body>
        <StoreProvider>
          <AuthComponent />
          <Header />
          {children}
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
