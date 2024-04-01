'use client';
import { useEffect, useState } from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header/Header';
import Nav from '@/components/nav/Nav';
import NavItem from '@/components/nav/NavItem';
import { navData } from '@/constants/pageData';
import Logo from '@/components/logo/Logo';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  const [active, setActive] = useState(false);


  useEffect(() => {
    setActive(false);
  }, []);
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header>
          <Logo />
          <Nav active={active} setActive={setActive}>
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
