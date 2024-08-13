import { Button } from '@/components/ui/button';
import { NotebookPen } from 'lucide-react';
import { BusinessListsType } from '../_types/businessListsType';
import { getBusinessByCategory } from '../_services/GlobalApi';
import Image from 'next/image';
import Link from 'next/link';

import BookingSection from './BookingSection';

export default async function SuggestedBusinessList({
  categoryName,
}: {
  categoryName: string;
}) {
  const businessLists: BusinessListsType = await getBusinessByCategory(
    categoryName
  );

  console.log();
  return (
    <div className="md:pl-10">
      <BookingSection />
      <div className="md:block hidden">
        <h2 className="font-bold text-lg my-3 md:block hidden">
          Similar Business
        </h2>
        <div>
          {businessLists.map((business, index) => (
            <Link
              href={`/details/${business.id}`}
              className="flex gap-2 mb-4 hover:border p-2 rounded-lg border-primary cursor-pointer shadow-md overflow-hidden transition-all ease-in-out"
              key={index}
            >
              <Image
                className="rounded-lg object-cover"
                src={business.images[2] || business.images[0]}
                width={90}
                height={80}
                alt={business.name}
              />
              <div>
                <h2 className="font-bold">{business.name}</h2>
                <h2 className="text-primary">{business.contactPerson}</h2>
                <h2 className="text-gray-400">{business.address}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
