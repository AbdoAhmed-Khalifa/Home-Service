export default function BusinessListSkeleton() {
  return (
    <div className="mt-5">
      {/* <h2 className="font-bold text-[22px]">{title}</h2> */}
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-5">
        {[1, 2, 3, 4, 5, 6, 7, 8].map(item => (
          <div
            key={item}
            className="h-[300px] w-full bg-slate-200 animate-pulse rounded-lg"
          ></div>
        ))}
      </div>
    </div>
  );
}
