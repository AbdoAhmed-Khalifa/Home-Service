'use client';
import { ReactNode } from 'react';
import Spinner from '@/app/_components/Spinner';
import { signIn, useSession } from 'next-auth/react';
import { BusinessListType } from '@/app/_types/businessListType';

export default function Auth({
  business,
  children,
}: {
  business: BusinessListType;
  children: ReactNode;
}) {
  const { data, status } = useSession();

  console.log(business);

  if (status === 'loading') return <Spinner />;

  if (status === 'unauthenticated') signIn('descope');

  if (status === 'authenticated') return children;
}
