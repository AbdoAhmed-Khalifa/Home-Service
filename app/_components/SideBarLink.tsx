'use client';
import Image from 'next/image';
import { CategoryType } from '../_types/categoryType';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SideBarLink({ category }: { category: CategoryType }) {
  const pathName = usePathname();
  const urlCategory = pathName.split('/')[2];
  return (
    <Link
      href={`/search/${category.name}`}
      key={category.id}
      className={`flex gap-2 p-3 rounded-lg border mb-3 cursor-pointer md:mr-10 hover:bg-blue-50 hover:text-primary hover:border-primary 
    hover:shadow-md 
    items-center transition-all ease-in-out ${
      urlCategory === category.name && 'bg-blue-50 text-primary border-primary shadow-md'
    }`}
    >
      <Image
        src={category.icon.url}
        alt={category.name}
        width={30}
        height={30}
      />
      <h2>{category.name}</h2>
    </Link>
  );
}
