'use client';
import { useEffect, useState } from 'react';
import { Inter } from 'next/font/google';
import './globals.scss';
import Header from '@/components/header/Header';
import Nav from '@/components/nav/Nav';
import NavItem from '@/components/nav/NavItem';
import { navData } from '@/constants/pageData';
import Logo from '@/components/logo/Logo';
import MenuBtn from '@/components/menuBtn/MenuBtn';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(false);
  }, []);
  return (
    <html lang='en'>
      <body className={inter.className}>
        <MenuBtn active={active} setActive={setActive} />
        <Header>
          <Logo />
          <Nav active={active}>
            {navData.map(({ title, path, cls, id }, i) => (
              <NavItem title={title} path={path} cls={cls} key={id} i={i} />
            ))}
          </Nav>
        </Header>
        {children}
      </body>
    </html>
  );
}
