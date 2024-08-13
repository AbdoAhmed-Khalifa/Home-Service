import Image from 'next/image';

export default function BusinessDescription({
  description,
  images,
}: {
  description: string;
  images: string[];
}) {
  return (
    <div>
      <h2 className="font-bold text-[25px]">Description</h2>
      <p className="mt-4 text-lg text-gray-600">{description}</p>
      <h2 className="font-bold text-[25px] mt-8">Gallery</h2>
      <div className="grid grid-cols-2  lg:grid-cols-3 gap-5 mt-5">
        {images.map((img, index) => (
          <Image
            width={700}
            height={200}
            key={index}
            src={img}
            alt="image"
            className="rounded-lg min-h-32 max-h-[185px]"
          />
        ))}
      </div>
    </div>
  );
}
