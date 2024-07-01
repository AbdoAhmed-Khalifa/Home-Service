import { Suspense } from 'react';
import CategoryList from './_components/CategoryList';
import Hero from './_components/Hero';
import CategoryListSkeleton from './_components/CategoryListSkeleton';
import BusinessList from './_components/BusinessList';
import BusinessListSkeleton from './_components/BusinessListSkeleton';

export default function Home() {
  return (
    <div>
      <Hero />
      <Suspense fallback={<CategoryListSkeleton />}>
        <CategoryList />
      </Suspense>
      <Suspense fallback={<BusinessListSkeleton />}>
        <BusinessList title="Popular Business" />
      </Suspense>
    </div>
  );
}
