import React from 'react';
import { getAllBusinessList } from '../_services/GlobalApi';
import { BusinessListsType } from '../_types/businessListsType';

import BusinessListCard from './BusinessListCard';

type BusinessListProps = {
  title: string;
};

export default async function BusinessList({ title }: BusinessListProps) {
  const businessLists: BusinessListsType = await getAllBusinessList();

  return (
    <div className="mt-5">
      <h2 className="font-bold text-[22px]">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-5">
        {businessLists.map((business, index) => (
          <BusinessListCard business={business} key={index} />
        ))}
      </div>
    </div>
  );
}
