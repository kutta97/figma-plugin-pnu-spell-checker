import * as React from 'react';
import { Navbar } from './Navbar';

export function Layout({ children }) {
  return (
    <main>
      <Navbar name="맞춤법 검사하기" />
      {children}
    </main>
  );
}
