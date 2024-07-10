import Image from 'next/image';
import { BusinessListType } from '../_types/businessListType';
import { MapPin, Mail, Share, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function BusinessInfo({
  business,
}: {
  business: BusinessListType;
}) {
  return (
    <div className="md:flex gap-4 items-center">
      <Image
        className="rounded-full h-[150px]
        object-cover mx-auto"
        src={business?.images[0].url}
        alt={business.name}
        width={150}
        height={200}
      />
      <div className="flex md:flex-row flex-col md:justify-between items-center w-full it">
        <div className="flex flex-col mt-4 md:mt-0 items-baseline gap-3 ">
          <h2 className="text-primary bg-blue-100 rounded-full p-1 px-3 text-lg">
            {business?.category?.name}
          </h2>
          <h2 className="text-[40px] font-bold">{business.name}</h2>
          <h2 className="flex gap-2 text-lg text-gray-500">
            <MapPin /> {business.address}
          </h2>
          <h2 className="flex gap-2 text-lg text-gray-500">
            <Mail /> {business.email}
          </h2>
        </div>
        <div className="flex flex-col gap-5 md:items-end mt-3">
          <Button>
            <Share />
          </Button>
          <h2 className="flex gap-2 text-lg text-primary">
            <User /> {business.contactPerson}
          </h2>
          <h2 className="flex gap-2 text-lg text-gray-500">
            <User /> Available 8:00 AM to 10:00 PM
          </h2>
        </div>
      </div>
    </div>
  );
}
