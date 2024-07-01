export default function CategoryListSkeleton() {
  return (
    <div className=" mx-4 md:mx-22 lg:mx-52 grid  grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {[1, 2, 3, 4, 5, 6].map(item => (
        <div
          key={item}
          className="h-[120px] w-full bg-slate-200 animate-pulse rounded-lg"
        ></div>
      ))}
    </div>
  );
}
