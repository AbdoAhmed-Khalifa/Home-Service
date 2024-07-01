import Image from 'next/image';
import { CategoryType } from '../_types/categoryType';
type CategoryListCardProps = {
  category: CategoryType;
};
export default function CategoryListCard({ category }: CategoryListCardProps) {
  const { icon, name } = category;
  return (
    <div className="flex flex-col items-center  justify-center gap-2 bg-blue-50 p-5 rounded-lg cursor-pointer hover:scale-110 transition-all ease-in-out">
      <Image width={35} height={35} src={icon.url} alt={name} />
      <h2 className="text-primary">{name}</h2>
    </div>
  );
}
