// components/Layout.tsx
import { FC, ReactNode } from 'react';
import Header from './Header';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">{children}</main>
    </div>
  );
};

export default Layout;