import { ReactNode } from 'react';
import { AppNavbar } from '../components/AppNavbar';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <AppNavbar />
      <main className='p-4 max-w-7xl mx-auto'>{children}</main>
    </>
  );
}
