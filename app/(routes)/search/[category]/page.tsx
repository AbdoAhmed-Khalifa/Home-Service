import BusinessListCard from '@/app/_components/BusinessListCard';
import { getBusinessByCategory } from '@/app/_services/GlobalApi';
import { BusinessListsType } from '@/app/_types/businessListsType';

interface PageProps {
  params: { category: string };
}

export default async function page({ params }: PageProps) {
  const businessLists: BusinessListsType = await getBusinessByCategory(
    params.category
  );
  return (
    <div className="mt-5">
      <h2 className="font-bold text-[22px]">{params.category}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-5">
        {businessLists.length > 0 ? (
          businessLists.map((business, index) => (
            <BusinessListCard business={business} key={index} />
          ))
        ) : (
          <div className="text-lg font-semibold">
            Sorry! this service currently unavailable.
          </div>
        )}
      </div>
    </div>
  );
}
