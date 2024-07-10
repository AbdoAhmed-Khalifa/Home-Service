import CategorySideBar from '@/app/_components/CategorySideBar';
import { ReactNode } from 'react';

export default function layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div>
      <div className="grid md:grid-cols-4 grid-cols-1  mt-8">
        <div className="hidden md:block">
          <CategorySideBar />
        </div>
        <div className="md:col-span-3">{children}</div>
      </div>
    </div>
  );
}
