import Image from 'next/image';
import { getAllCategories } from '../_services/GlobalApi';
import { GraphCategoriesType } from '../_types/graphCategoriesType';
import CategoryListCard from './CategoryListCard';

export default async function CategoryList() {
  const { categories }: GraphCategoriesType = await getAllCategories();

  return (
    <div className=" mx-4 md:mx-28 lg:mx-48 xl:mx-52 grid  grid-cols-3  xl:grid-cols-6 gap-4">
      {categories.map(category => (
        <CategoryListCard category={category} key={category.id} />
      ))}
    </div>
  );
}
