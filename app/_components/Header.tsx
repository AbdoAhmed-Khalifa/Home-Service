import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Header() {
  return (
    <div className="p-5 shadow-sm flex justify-between">
      <div className="flex items-center gap-8">
        <Image src="/logo.svg" alt="logo" width={180} height={100} />
      </div>
      <div className="md:flex items justify-between gap-6 lg:gap-14 hidden font-semibold text-xl">
        <h2 className="hover:scale-105 hover:text-primary cursor-pointer">
          Home
        </h2>
        <h2 className="hover:scale-105 hover:text-primary cursor-pointer">
          Service
        </h2>
        <h2 className="hover:scale-105 hover:text-primary cursor-pointer">
          About us
        </h2>
      </div>
      <div>
        <Button>Get Started</Button>
      </div>
    </div>
  );
}
