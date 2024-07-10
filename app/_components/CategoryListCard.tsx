import Image from 'next/image';
import { CategoryType } from '../_types/categoryType';
import Link from 'next/link';
type CategoryListCardProps = {
  category: CategoryType;
};
export default function CategoryListCard({ category }: CategoryListCardProps) {
  const { icon, name } = category;
  return (
    <Link
      href={`/search/${name}`}
      className="flex flex-col items-center  justify-center gap-2 bg-blue-50 p-5 rounded-lg cursor-pointer hover:scale-110 transition-all ease-in-out"
    >
      <Image width={35} height={35} src={icon.url} alt={name} />
      <h2 className="text-primary">{name}</h2>
    </Link>
  );
}
