import { Button } from '@/components/ui/button';
import { NotebookPen } from 'lucide-react';
import { BusinessListsType } from '../_types/businessListsType';
import { getBusinessByCategory } from '../_services/GlobalApi';
import Image from 'next/image';
import Link from 'next/link';
export default async function SuggestedBusinessList({
  categoryName,
}: {
  categoryName: string;
}) {
  const businessLists: BusinessListsType = await getBusinessByCategory(
    categoryName
  );

  return (
    <div className="md:pl-10 ">
      <Button title="Book Appointment" className="flex gap-2 w-full">
        <NotebookPen />
        <span className=" lg:block hidden">Book Appointment</span>
      </Button>
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
                src={business.images[2].url || business.images[0].url}
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
