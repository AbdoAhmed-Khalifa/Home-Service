import Image from 'next/image';
import { getAllCategories } from '../_services/GlobalApi';
import { GraphCategoriesType } from '../_types/graphCategoriesType';
import Link from 'next/link';
import SideBarLink from './SideBarLink';

export default async function CategorySideBar() {
  const { categories }: GraphCategoriesType = await getAllCategories();
  return (
    <div>
      <h2 className="font-bold mb-3 text-lg text-primary">Categories</h2>
      {categories.map(category => (
        <SideBarLink key={category.id} category={category} />
      ))}
    </div>
  );
}
