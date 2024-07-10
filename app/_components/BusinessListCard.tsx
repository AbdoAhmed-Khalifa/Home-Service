import { BusinessListType } from '../_types/businessListType';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
type BusinessListCardProps = {
  business: BusinessListType;
};
export default function BusinessListCard({ business }: BusinessListCardProps) {
  const { images, name, address, category, contactPerson, id } = business;

  return (
    <Link
      href={`/details/${id}`}
      className="shadow-md rounded-lg hover:shadow-lg hover:shadow-blue-300 cursor-pointer hover:scale-105 transition-all ease-in-out"
    >
      <Image
        src={images[0].url}
        width={500}
        height={200}
        alt={name}
        className="w-full h-[150px] md:h-[200px] object-cover rounded-lg"
      />
      <div className="flex flex-col items-baseline p-3 gap-1">
        <h2 className="p-1 bg-blue-200 text-primary rounded-full px-2 text-[12px]">
          {category.name}
        </h2>
        <h2 className="font-bold text-lg">{name}</h2>
        <h2 className="text-primary">{contactPerson}</h2>
        <h2 className="text-gray-400 text-sm">{address}</h2>
        <div className="w-full flex justify-end">
          <Button className="rounded-lg mt-3">Book Now</Button>
        </div>
      </div>
    </Link>
  );
}
