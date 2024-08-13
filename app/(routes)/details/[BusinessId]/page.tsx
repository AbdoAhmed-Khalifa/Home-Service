import { getBusinessById } from '@/app/_services/GlobalApi';
import Auth from './Auth';
import BusinessInfo from '@/app/_components/BusinessInfo';
import BusinessDescription from '@/app/_components/BusinessDescription';
import SuggestedBusinessList from '@/app/_components/SuggestedBusinessList';
type DetailsPage = {
  params: {
    BusinessId: string;
  };
};

export default async function Page({ params }: DetailsPage) {
  const business = await getBusinessById(params.BusinessId);
  return (
    <Auth business={business}>
      <div className="py-8 px-10 md:py-20 xl:px-36 lg:px-24">
        <BusinessInfo business={business} />
        <div className="grid grid-cols-4 mt-16">
          <div className="col-span-4 md:col-span-3 order-last md:order-first">
            <BusinessDescription
              description={business.about}
              images={business.images}
            />
          </div>
          <div>
            <SuggestedBusinessList categoryName={business.category.name} />
          </div>
        </div>
      </div>
    </Auth>
  );
}
